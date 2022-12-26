import Question from "./Question";
import Button from "./Button";
import useQuiz from "./../hooks/useQuiz";

function Quiz() {
	const {
		currentQuestion,
		setCurrentQuestion,
		answers,
		setAnswers,
		questions,
		handleNextBtn,
		handlePrevBtn,
		handleAnswerChange,
		handleReset,
	} = useQuiz();

	return (
		<div className="wapper h-screen bg-[#3D28FF] pt-10">
			<div className="md:max-w-xl mx-3 md:mx-auto rounded-xl bg-[#171A2B] py-7 px-4">
				{currentQuestion == 5 ? (
					<div className="result text-white">
						<h3 className="text-center text-2xl mb-10 pb-5 border-b-[1px] border-[#585858]">
							Your score is:{" "}
							<span>
								{answers.filter((a) => a.value == true).length} /{" "}
								{questions.length}
							</span>
						</h3>{" "}
						<Button label={"Try again"} handleClick={handleReset} />
					</div>
				) : (
					<>
						{questions.map((question) => (
							<Question
								key={question.id}
								{...question}
								currentQuestion={currentQuestion}
								handleAnswerChange={handleAnswerChange}
							/>
						))}
						<div className="flex justify-between mt-16">
							<Button
								label={"Prev"}
								disablity={currentQuestion == 1 ? true : false}
								handleClick={handlePrevBtn}
							/>
							<Button
								label={currentQuestion == 4 ? "Finish" : "Next"}
								handleClick={handleNextBtn}
							/>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default Quiz;
