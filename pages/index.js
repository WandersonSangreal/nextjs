import { useState } from "react";

function Home() {
	return (
		<div>
			<h2>Hello World</h2>
			<Contador />
		</div>
	);
}

function Contador() {
	let [contador, setContador] = useState(1);

	function incrementarContador() {
		setContador(contador + 1);
	}

	return (
		<div>
			<div>{contador}</div>
			<br />
			<button onClick={incrementarContador}>Adicionar</button>
		</div>
	);
}

export default Home;
