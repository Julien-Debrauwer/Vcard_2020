import { Component } from 'react';
import { Row, Col } from 'antd';
// import jupiler from './img/'
import './App.scss';


export default class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="container app-container">
					<header>
						<nav>
							<a href="/"><h2 className="title title__logo"><span className="title__logo--yellowletter">J</span><span className="mobile-logo-invisible">ulien</span> <span className="title__logo--yellowletter">D</span><span className="mobile-logo-invisible">ebrauwer</span></h2></a>
							{/* <h2 className="title title__logo"><span className="title__logo--yellowletter">J</span><span className="mobile-logo-invisible">ulien</span> <span className="title__logo--yellowletter">D</span><span className="mobile-logo-invisible">ebrauwer</span></h2> */}
							<ul className="menu">
								<li className="menu--el"><a className="menu-link" href="/" target="_blank" rel="noopener noreferrer">Accueil</a></li>
								<li className="menu--el"><a className="menu-link" href="http://juliendebrauwer.fr/projets.html" target="_blank" rel="noopener noreferrer">Projets</a></li>
							</ul>
						</nav>
					</header>
					<main>
						<Row justify="space-between">
							<Col xs={24} md={12} lg={10}>
								<h1 className="title title--home">Julien Debrauwer</h1>
								<h2 className="title title--sub">Le développeur, venu d'ailleurs.</h2>
								<p>Je voyage au travers des ligne de code. Je suis une développeur qui développe. Je suis une développeur qui développe. Je suis une développeur qui développe. Je suis une développeur qui développe.</p>
								<a className="btn" href="http://juliendebrauwer.fr/projets.html" target="_blank" rel="noopener noreferrer">Découvrez mes projets</a>
							</Col>
						</Row>
						<div className="illu-spaceship">
							<img className="illu-img" src={`${process.env.PUBLIC_URL}/img/illus/spaceship.svg`} alt="" />
						</div>
					</main>
					<footer>
						<Row className="footer-row">
							<ul className="networks">
								<li className="networks-el">
									<a className="networks-link" href="https://www.linkedin.com/in/julien-debrauwer/" target="_blank" rel="noopener noreferrer" aria-label="Github">
										<svg className="networks-img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"/></svg>
									</a>
								</li>
								<li className="networks-el">
									<a className="networks-link" href="https://github.com/Julien-Debrauwer" target="_blank" rel="noopener noreferrer" aria-label="Github">
										<svg className="networks-img" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" /></svg>
									</a>
								</li>
								<li className="networks-el">
									<a className="networks-link" href="http://juliendebrauwer.fr/assets/images/cv/jdebrauwer_cv_2019-generic.pdf" target="_blank" rel="noopener noreferrer" aria-label="Github">
									<svg className="networks-img" viewBox="0 0 32 32" sxmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.7461 20.7586C15.7461 20.4951 15.6286 20.3633 15.3938 20.3633C15.2964 20.3633 15.2104 20.3919 15.1359 20.4492C15.0615 20.5065 14.9612 20.6096 14.8352 20.7586C14.4857 21.1596 13.9643 21.4633 13.2711 21.6695C12.9617 21.7612 12.6466 21.8271 12.3258 21.8672C12.0049 21.9073 11.6898 21.9273 11.3805 21.9273C11.0711 21.9273 10.7159 21.893 10.3148 21.8242V10.807C10.6471 10.7383 11.0654 10.7039 11.5695 10.7039C12.0794 10.7039 12.6438 10.7984 13.2625 10.9875C13.5661 11.0849 13.844 11.1995 14.0961 11.3313C14.3539 11.463 14.5573 11.612 14.7063 11.7781C14.8552 11.9385 15.0214 12.0188 15.2047 12.0188C15.2964 12.0188 15.3766 11.9786 15.4453 11.8984C15.5198 11.8182 15.557 11.7237 15.557 11.6148C15.557 11.3456 15.1245 11.019 14.2594 10.6352C13.4458 10.2685 12.5034 10.0852 11.432 10.0852C9.52422 10.0852 7.9401 10.6552 6.67969 11.7953C6.08385 12.3339 5.61693 12.9813 5.27891 13.7375C4.94089 14.488 4.77188 15.313 4.77188 16.2125C4.77188 18.0802 5.37057 19.6042 6.56797 20.7844C7.14089 21.3458 7.83125 21.7841 8.63906 22.0992C9.4526 22.4086 10.2977 22.5633 11.1742 22.5633C12.0508 22.5633 12.8872 22.4458 13.6836 22.2109C14.1076 22.0849 14.6289 21.8185 15.2477 21.4117C15.5799 21.194 15.7461 20.9763 15.7461 20.7586ZM26.9008 10.5148C26.9008 10.2685 26.7833 10.1453 26.5484 10.1453C26.4109 10.1453 26.3049 10.1911 26.2305 10.2828C26.156 10.3688 26.0872 10.5263 26.0242 10.7555C25.9612 10.9846 25.8266 11.357 25.6203 11.8727L23.7039 16.668L20.9711 10.2398H16.2789L21.9336 22.8727L26.6 11.3484C26.6458 11.2453 26.706 11.1135 26.7805 10.9531C26.8607 10.787 26.9008 10.6409 26.9008 10.5148Z"/></svg>
									</a>
								</li>
							</ul>

						</Row>
					</footer>
				</div>
				<div className="illu-container illu-container__jupi"><img className="illu-img" src={`${process.env.PUBLIC_URL}/img/illus/jupiler.svg`} alt="" /></div>
				<div className="illu-container illu-container__moune"><img className="illu-img" src={`${process.env.PUBLIC_URL}/img/illus/moune.svg`} alt="" /></div>
				<div className="illu-container illu-container__satourne"><img className="illu-img" src={`${process.env.PUBLIC_URL}/img/illus/satourne.svg`} alt="" /></div>
				<div className="body-border"></div>
				<div className="noise"></div>
			</div>
		);
	}
}
