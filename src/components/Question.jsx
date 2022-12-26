import React from "react";

function Question({
	questionText,
	answerOptions,
	id,
	currentQuestion,
	handleAnswerChange,
}) {
	return (
		<div
			className={`wrapper text-white ${
				currentQuestion == id ? "block" : "hidden"
			}`}
		>
			<h3 className="questionText text-center text-3xl mb-7">{questionText}</h3>
			<ul>
				{answerOptions.map(({ answerText, isCorrect }) => (
					<li className="mb-5" key={questionText + "_" + answerText}>
						<label
							htmlFor={answerText + "_" + id}
							className="flex items-center gap-3 cursor-pointer"
						>
							<input
								type="radio"
								name={questionText}
								id={answerText + "_" + id}
								onChange={() => handleAnswerChange(isCorrect, id)}
							/>
							<span className="graphical-radio">
								<span></span>
							</span>
							<span className="text-white bg-[#620BFF] w-full block py-2 pl-5 rounded-sm">
								{answerText}
							</span>
						</label>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Question;
