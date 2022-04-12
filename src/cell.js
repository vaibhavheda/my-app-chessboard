import { useState } from "react";
import "./chessStyle.css";

const Cell = ({ idV, colorCell }) => {
	const [color, setColor] = useState(colorCell);

	return (
		<button
			className={`cell ${color}`}
			onClick={() => {
				setColor("red");
			}}
		></button>
	);
};

export default Cell;
