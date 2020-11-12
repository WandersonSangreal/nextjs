import {useState} from "react";

const Contador = () => {

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

};

const NavBar = ({children}) => {

	return (
		<nav className={'navbar navbar-expand-lg navbar-light bg-white'}>
			<div className={'container'}>

				<a href="" className={'navbar-brand text-primary font-weight-bold'}>SANGREAL</a>

				<div className={'collapse navbar-collapse'}>

					<ul className={'navbar-nav ml-auto'}>

						{children}

					</ul>

					<a href="" className={'navbar-btn btn btn-primary btn-lg ml-auto'}>
						Buy Now
					</a>
				</div>

			</div>
		</nav>
	);

};

const NavItem = ({children}) => {

	return (
		<li className={'nav-item'}>
			<a className={'nav-link'} id="navbarLandings" data-toggle="dropdown"
			   href="#" aria-haspopup="true" aria-expanded="false">
				{children}
			</a>
		</li>
	);

};

const FirstSection = () => {

	return (
		<section className="pt-4 pt-md-11">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-12 col-md-5 col-lg-6 order-md-2">

						<img src="/images/illustration.png"
						     className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate" alt="..."
						     data-aos="fade-up" data-aos-delay="100"/>

					</div>
					<div className="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate" data-aos="fade-up">

						<h1 className="display-3 text-center text-md-left">
							Welcome to <span className="text-primary">Sangreal</span>
							Develop anything
						</h1>

						<p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
							Build a beautiful, modern website with flexible Bootstrap components built from scratch.
						</p>

						<div className="text-center text-md-left">
							<a href="#" className="btn btn-primary shadow mr-2">
								View all pages <i className="fe fe-arrow-right d-none d-md-inline ml-3"></i>
							</a>
							<a href="#" className="btn btn-light shadow">
								Documentation
							</a>
						</div>

					</div>
				</div>
			</div>
		</section>
	);

};

const Home = () => {
	return (
		<header className={'header'}>
			<NavBar>
				<NavItem>Landings</NavItem>
				<NavItem>Pages</NavItem>
				<NavItem>Account</NavItem>
				<NavItem>Documentation</NavItem>
			</NavBar>

			<FirstSection/>
		</header>
	);
};

export default Home;
