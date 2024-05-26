// src/components/QuestionControls.tsx
import React from "react";
import { Button, Stack } from "@chakra-ui/react";

interface QuestionControlsProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  handlePrevious: () => void;
  handleNext: () => void;
}

const QuestionControls: React.FC<QuestionControlsProps> = ({
  currentQuestionIndex,
  totalQuestions,
  handlePrevious,
  handleNext,
}) => {
  return (
    <Stack direction="row" spacing={4} mt={4}>
      <Button
        onClick={handlePrevious}
        disabled={currentQuestionIndex === 0}
      >
        Previous
      </Button>
      <Button
        onClick={handleNext}
        colorScheme="blue"
      >
        Next
      </Button>
    </Stack>
  );
};

export default QuestionControls;
