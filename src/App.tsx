import React, { useEffect, useState } from "react";
import Test from "./Test";
import { useAppSelector } from "./redux/hooks";
import { useAppDispatch } from "./redux/hooks";
import { fetchQuestions } from "./redux/api/fetchQuestions";
import ListAnswers from "./ListAnswers";
import { Spinner } from "@chakra-ui/react";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  const questLists = useAppSelector((state) => state.question.questions);
  const testing = localStorage.getItem("testing");
  const testingJSON = testing === null ? 0 : JSON.parse(testing);
  const initialState =
    testingJSON !== null && typeof testingJSON === "object"
      ? Object.keys(testingJSON).length
      : 0;
  const [questionIndex, setQuestionIndex] = useState(initialState);
  const answers = useAppSelector((state) => state.answers.answers);
  const handleNextQuestion = () => {
    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const isTimerRunning = useAppSelector(
    (state) => state.isTimerRunning.isRunning
  );

  return (
    <div>
      {questLists.length === 0 ? (
        <Spinner
          size="xl"
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
        />
      ) : questionIndex >= questLists.length || !isTimerRunning ? (
        <ListAnswers answers={answers} />
      ) : (
        <Test
          question={questLists[questionIndex]}
          onNext={handleNextQuestion}
        />
      )}
    </div>
  );
};

export default App;
