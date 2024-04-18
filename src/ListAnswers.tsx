import React, { FC, useEffect } from "react";

interface ListAnswersProps {
  answers: object;
}

const ListAnswers: FC<ListAnswersProps> = ({ answers }) => {
  useEffect(() => {
    localStorage.clear();
  }, []);

  const isEmpty = Object.keys(answers).length === 0;

  return (
    <div>
      <h1>Список ответов:</h1>
      {isEmpty ? (
        <h2>Ответов нет</h2>
      ) : (
        <ul>
          {Object.entries(answers).map(([questionId, answer], index) => (
            <li key={index}>{`${questionId} ${answer}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListAnswers;
