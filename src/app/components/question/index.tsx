// src/components/QuestionScreen.tsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import questionsData from "../../questions.json";
import { Box, Heading } from "@chakra-ui/react";
import QuestionControls from "./questionControls";
import QuestionIndex from "./questionIndex";
import QuestionStatement from "./questionStatement";

const QuestionScreen: React.FC = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState<any[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = location.state;

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  useEffect(() => {
    const currentResponse = userResponses[currentQuestionIndex];
    if (currentResponse) {
      setSelectedOption(currentResponse.optionValue);
    } else {
      setSelectedOption(null);
    }
  }, [currentQuestionIndex, userResponses]);

  const handleOptionChange = (optionValue: string) => {
    setSelectedOption(optionValue);
  };

  const handleNext = () => {
    if (selectedOption) {
      const { extroWeight, introWeight } = questions[
        currentQuestionIndex
      ].options.find((option: any) => option.value === selectedOption);
      const newResponses = [...userResponses];
      newResponses[currentQuestionIndex] = {
        optionValue: selectedOption,
        extroWeight,
        introWeight,
      };
      setUserResponses(newResponses);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          const nextResponse = userResponses[nextIndex];
          setSelectedOption(
            nextResponse ? nextResponse.optionValue : undefined
          );
          return nextIndex;
        });
      } else {
        calculatePersonalityTrait();
      }
    } else {
      alert("Please select an option before proceeding.");
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        const prevResponse = userResponses[newIndex];
        setSelectedOption(prevResponse ? prevResponse.optionValue : undefined);
        return newIndex;
      });
    }
  };

  const calculatePersonalityTrait = () => {
    let extroScore = 0;
    let introScore = 0;
    userResponses.forEach((response) => {
      extroScore += response.extroWeight;
      introScore += response.introWeight;
    });
    const trait = extroScore > introScore ? "Extrovert" : "Introvert";
    navigate("/result", { state: { trait, username } });
  };

  const question = questions[currentQuestionIndex];

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        bg="gray.100 !important"
      >
        <Box
          bg="white"
          p={8}
          borderRadius="md"
          boxShadow="lg"
          maxW="600px"
          width="100%"
        >
          <Heading as="h2" size="lg" mb={4}>
            See if you are an extrovert or introvert?
          </Heading>
          <QuestionIndex
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
          />
          <QuestionStatement
            question={question}
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
          />
          <QuestionControls
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
          />
        </Box>
      </Box>
    </>
  );
};

export default QuestionScreen;
