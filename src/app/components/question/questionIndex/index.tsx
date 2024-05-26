// src/components/QuestionIndex.tsx
import React from "react";
import { Text } from "@chakra-ui/react";

interface QuestionIndexProps {
  currentQuestionIndex: number;
  totalQuestions: number;
}

const QuestionIndex: React.FC<QuestionIndexProps> = ({
  currentQuestionIndex,
  totalQuestions,
}) => {
  return (
    <Text fontSize="md" mb={2}>
      QUESTION {currentQuestionIndex + 1} OF {totalQuestions}
    </Text>
  );
};

export default QuestionIndex;
