// import "./App.css";
import {React, useState, useEffect} from "react";
import {getArgonautes, addArgonautes, deleteArgonautes} from "./api/axios";
import "./style/main.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";

function App() {
	const [argonautes, setArgonautes] = useState([]);
	const [argonauteInput, setArgonauteInput] = useState("");
	const [serverResponse, setServerResponse] = useState("");
	// const [argonauteList, setArgonauteList] = useState([]);

	useEffect(() => {
		getArgonautes().then((res) => {
			setArgonautes(res.data);
		});

		setTimeout(() => {
			setServerResponse("");
		}, 5000);
	}, [serverResponse]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(argonauteInput);
		const data = {
			argonauteName: argonauteInput,
		};

		addArgonautes(data).then((res) => {
			setServerResponse(res.data);
		});
	};

	const handleSupression = async (argonauteId) => {
		const data = {
			argonauteId: argonauteId,
		};

		deleteArgonautes(data).then((res) => {
			setServerResponse(res.data);
		});
	};

	const argonautesList = argonautes.map((argonaute) => {
		let argonauteId = argonaute._id;

		return (
			<tr
				key={argonauteId}
				className=" border border-solid text-center"
			>
				<td>{argonaute.name}</td>
				<td>
					<button
						className="suppressionBtn"
						onClick={() => handleSupression(argonauteId)}
					>
						<FontAwesomeIcon icon={faCircleXmark} />
					</button>
				</td>
			</tr>
		);
	});
	return (
		<div>
			<h1 className="welcomeMessage">Liste des argonautes</h1>

			<div className="m-10 argonauteInput">
				<h3>Ajouter un argonaute : </h3>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						className="border border-black  "
						value={argonauteInput}
						onChange={(e) => {
							setArgonauteInput(e.target.value);
						}}
					/>
					<button className="border border-black"> go !</button>
				</form>
			</div>
			<p className="serverResponseMessage">
				{/* {serverResponse === "cette argonaute existe d??j?? !"
					? "l'Argonaute existe d??j?? !"
					: serverResponse === ""
					? ""
					: "Argonaute Cr??e !"} */}
				{serverResponse}
			</p>
			<div className="  tableContainer flex justify-center mx-auto  ">
				<div className="flex flex-col">
					<div className="w-full">
						<div className="border-b border-gray-200 shadow">
							<table>
								<thead className="bg-gray-50">
									<th className="px-52 py-2 text-base text-gray-500">
										Argonautes:
									</th>
								</thead>
								<tbody>{argonautesList}</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
