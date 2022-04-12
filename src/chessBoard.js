import Cell from "./cell";
import "./chessStyle.css";

const numArray = [1, 2, 3, 4, 5, 6, 7, 8];

const generateRow = (rowNum) => {
	return (
		<>
			{numArray.map((colNum) => {
				let color = (rowNum + colNum) % 2 === 0 ? "black" : "white";
				return (
					<td key={"" + rowNum + colNum}>
						<Cell
							idV={"" + rowNum + colNum}
							colorCell={color}
						></Cell>
					</td>
				);
			})}
		</>
	);
};

const ChessBoard = () => {
	return (
		<table className="chessTable" cellPadding={0} cellSpacing={0}>
			<tbody>
				{numArray.map((row) => (
					<tr key={`num${row}`}>{generateRow(row)}</tr>
				))}
			</tbody>
		</table>
	);
};

export default ChessBoard;
