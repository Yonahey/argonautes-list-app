// import "./App.css";
import {React, useState, useEffect} from "react";
import {getArgonautes} from "./api/axios";
import "./style/main.css";

function App() {
	const [argonautes, setArgonautes] = useState([]);

	useEffect(() => {
		getArgonautes().then((res) => {
			setArgonautes(res.data);
		});
	}, []);

	const argonautesList = argonautes.map((argonaute) => {
		return <tr> {argonaute.name}</tr>;
	});
	return (
		<div className="App">
			<h1>Bienvenu</h1>

			<table>
				<thead>
					<tr>Argonautes:</tr>
				</thead>
				<tbody>
					<tr>{argonautesList}</tr>
				</tbody>
			</table>
		</div>
	);
}

export default App;
