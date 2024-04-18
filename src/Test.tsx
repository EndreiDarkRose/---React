import React, { FC, useEffect, useState } from "react";
import AnswerOption from "./AnswerOption";
import { useForm, FormProvider } from "react-hook-form";
import { useAppDispatch } from "./redux/hooks";
import { updateAnswers } from "./redux/slice/answersSlice";
import Timer from "./Timer";
import { Button } from "@chakra-ui/react";

interface QuestionProps {
  question: {
    id: number;
    question: string;
    options: string[];
    inputType: string;
    responseLength: string;
  };
  onNext: () => void;
}

const Test: FC<QuestionProps> = ({ question, onNext }) => {
  const methods = useForm();
  const dispatch = useAppDispatch();

  const [countdown, setCountdown] = useState(() => {
    const countdownLS = localStorage.getItem("countdown");
    return countdownLS ? Number(countdownLS) : 60;
  });

  const time = new Date();
  time.setSeconds(time.getSeconds() + countdown);

  const onSubmit = (data: any) => {
    const previousAnswers = localStorage.getItem("testing");
    const previousAnswersJSON = previousAnswers
      ? JSON.parse(previousAnswers)
      : {};

    const updatedAnswers = { ...previousAnswersJSON, ...data };
    localStorage.setItem("testing", JSON.stringify(updatedAnswers));
    dispatch(updateAnswers(updatedAnswers));
    methods.reset();
    onNext();
  };
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const newCountdown = prevCountdown - 1;
        localStorage.setItem("countdown", newCountdown.toString());
        return newCountdown;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <>
      <Timer expiryTimestamp={time} />
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          style={{ textAlign: "center" }}
        >
          <h2>Вопрос {question.id}</h2>
          <p>{question.question}</p>
          {question.responseLength === "" ? null : (
            <p>Минимальная длинна ответа: {question.responseLength}</p>
          )}
          {question.options.map((option, index) => (
            <AnswerOption
              key={index}
              option={option}
              question={question.question}
              inputType={question.inputType}
              responseLength={question.responseLength}
            />
          ))}
          <Button colorScheme="teal" variant="outline" type="submit">
            Ответить
          </Button>
        </form>
      </FormProvider>
    </>
  );
};

export default Test;
