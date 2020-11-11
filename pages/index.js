import {useState} from "react";

function Home() {
	return (
		<header className={'header bg-primary'}>
			<div className={'container text-center'}>
				<h2>Hello World</h2>
				<Contador/>
			</div>
		</header>
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
			<br/>
			<button className={'btn btn-light'} onClick={incrementarContador}>Adicionar</button>
		</div>
	);

}

export default Home;
