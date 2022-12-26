import getQuestions from "./../data/questions";
import { useState } from "react";
const useQuiz = () => {
	const [currentQuestion, setCurrentQuestion] = useState(1);
	const [answers, setAnswers] = useState([]);
	const questions = getQuestions();

	const handleNextBtn = () => setCurrentQuestion((curr) => curr + 1);
	const handlePrevBtn = () => setCurrentQuestion((curr) => curr - 1);
	const handleAnswerChange = (value, id) => {
		let tempAnswers = [...answers];
		const answer = tempAnswers.find((a) => a.id == id);
		if (answer) {
			const index = tempAnswers.indexOf(answer);
			tempAnswers[index].value = value;
			setAnswers(tempAnswers);
			return;
		}
		tempAnswers.push({ value, id });
		setAnswers(tempAnswers);
	};
	const handleReset = () => {
		setCurrentQuestion(1);
		setAnswers([]);
	};
	return {
		currentQuestion,
		setCurrentQuestion,
		answers,
		setAnswers,
		questions,
		handleNextBtn,
		handlePrevBtn,
		handleAnswerChange,
		handleReset,
	};
};

export default useQuiz;
