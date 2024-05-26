// src/components/QuestionStatement.tsx
import React from "react";
import { Stack, Text } from "@chakra-ui/react";

interface QuestionStatementProps {
  question: any;
  selectedOption: string | null;
  handleOptionChange: (optionValue: string) => void;
}

const QuestionStatement: React.FC<QuestionStatementProps> = ({
  question,
  selectedOption,
  handleOptionChange,
}) => {
  return (
    <>
      <Text fontSize="xl" mb={4} fontWeight="bolder">
        {question?.text}
      </Text>
      <Stack spacing={2}>
        {question?.options?.map((option: any) => (
          <label key={option.value}>
            <input
              type="radio"
              name="option"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={() => handleOptionChange(option.value)}
            />{" "}
            &nbsp;
            {option.content}
          </label>
        ))}
      </Stack>
    </>
  );
};

export default QuestionStatement;
