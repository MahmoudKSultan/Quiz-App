import React from "react";

function Button({ label, disablity, handleClick }) {
	return (
		<button
			className={`text-white border-[#676A6F] border-[1px] px-5 py-2 hover:bg-[#676A6F]  transition duration-300 ${
				disablity && "cursor-not-allowed"
			}`}
			disabled={disablity}
			onClick={handleClick}
		>
			{label}
		</button>
	);
}

export default Button;
