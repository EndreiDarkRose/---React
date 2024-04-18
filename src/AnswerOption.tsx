import { Checkbox, Input, Radio } from "@chakra-ui/react";
import { FC } from "react";
import { useFormContext } from "react-hook-form";

interface AnswerOptionProps {
  option: string;
  question: string;
  inputType: string;
  responseLength: string;
}

const AnswerOption: FC<AnswerOptionProps> = ({
  option,
  question,
  inputType,
  responseLength,
}) => {
  const { register } = useFormContext();
  const initialValue = inputType === "text" ? "" : option;

  return (
    <div>
      {inputType === "radio" ? (
        <Radio
          value={option}
          {...register(`${question}`, { required: true })}
        />
      ) : inputType === "checkbox" ? (
        <Checkbox
          value={option}
          {...register(`${question}`, { required: true })}
        />
      ) : (
        <Input
          minLength={Number(responseLength)}
          placeholder="Ваш ответ"
          defaultValue={initialValue}
          w="300px"
          {...register(`${question}`, { required: true })}
        />
      )}
      <label>{option}</label>
    </div>
  );
};

export default AnswerOption;
