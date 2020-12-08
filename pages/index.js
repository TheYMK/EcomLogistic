import React from 'react';
import Layout from '../components/Layout';
import LazyHero from 'react-lazy-hero';
import { Button } from 'antd';
import { InfoCircleOutlined, DollarCircleFilled, PhoneFilled } from '@ant-design/icons';
import '../styles/Home.module.css';
import FooterComponent from '../components/nav/FooterComponent';
import Typewriter from 'typewriter-effect';

function Home() {
	return (
		<React.Fragment>
			<Layout />
			<LazyHero
				className="mt-4"
				imageSrc="/static/images/hero_bg_1_1.jpg"
				color="#3b3b3b"
				isCentered={true}
				minHeight="75vh"
				opacity={0.5}
				style={{ overflow: 'hidden' }}
				transitionDuration={1000}
				transitionTimingFunction="ease-in-out"
			>
				<h1 style={{ color: 'white', fontWeight: '700' }}>
					SERVICES DE FRET
					<span style={{ color: '#f89d13' }}>
						<Typewriter
							options={{
								strings: [ 'Aérien', 'Maritime', 'Terrestre' ],
								autoStart: true,
								loop: true
							}}
						/>
					</span>
					& LOGISTIQUE
				</h1>
				<Button shape="round" size="large" icon={<InfoCircleOutlined />} className="mt-5 button-home">
					En savoir plus
				</Button>
			</LazyHero>

			{/* Tracking section */}
			<section>
				<div className="container">
					<div className="row align-items-center no-gutters align-items-stretch overlap-section">
						<div className="col-md-4">
							<div className="feature-1 pricing h-100 text-center">
								<div className="icon">
									<DollarCircleFilled />
								</div>
								<h2 className="my-4 heading">Best Prices</h2>
								<p>La rapidité à un prix imbattable</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="free-quote bg-dark h-100">
								<h2 className="my-4 heading text-center" style={{ fontSize: '15px' }}>
									Saissez le numéro de suivi qui vous a été fournis
								</h2>

								<form>
									<div className="form-group">
										<label htmlFor="trackingno">Numero de suivi</label>
										<input
											type="text"
											className="form-control btn-block text-center"
											id="trackingno"
											name="trackingno"
											placeholder="Inserer votre numero de suivi"
										/>
									</div>
									<Button size="large" className="text-center py-2 px-4 btn-block">
										Suivre
									</Button>
								</form>
							</div>
						</div>
						<div className="col-md-4">
							<div className="feature-3 pricing h-100 text-center">
								<div className="icon">
									<PhoneFilled />
								</div>
								<h2 className="my-4 heading">Assistance 24/7</h2>
								<p>Nous somme à votre disposition toute la semaine en cas de besoin</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services section */}
			<section style={{ marginTop: '80px' }}>
				<div className="container">
					<div className="row justify-content-center mb-5">
						<div className="col-md-7 text-center border-primary">
							<h2 className="mb-0 text-primary">Ce que nous offrons</h2>
							<p className="color-black-opacity-5 mt-2">Services de fret terrestre, aérien et maritime</p>
						</div>
					</div>
					<div className="row align-items-stretch">
						<div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
							<div className="unit-4 d-flex">
								<div className="unit-4-icon mr-4">
									<img src="/static/images/travelicon.png" className="text-primary" />
								</div>
								<div>
									<h3>Fret Aérien</h3>

									<p className="mb-0">
										<a href="#" style={{ color: '#f89d13' }}>
											En savoir plus
										</a>
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
							<div className="unit-4 d-flex">
								<div className="unit-4-icon mr-4">
									<img src="/static/images/shipicon.png" />
								</div>
								<div>
									<h3>Fret Maritime</h3>

									<p className="mb-0">
										<a href="#" style={{ color: '#f89d13' }}>
											En savoir plus
										</a>
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
							<div className="unit-4 d-flex">
								<div className="unit-4-icon mr-4">
									<img src="/static/images/truckicon.png" />
								</div>
								<div>
									<h3>Livraison à Domicile</h3>
									<p className="mb-0">
										<a href="#" style={{ color: '#f89d13' }}>
											En savoir plus
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<hr className="mt-5" />

			{/* Contact us section */}
			<section>
				<div className="container mt-5">
					<div className="row text-center">
						<div className="col-md-12">
							<h2 className="mb-5 text-black">Essayez nos services</h2>
							<p className="mb-0">
								<Button
									size="large"
									className="text-center py-2 px-4 button-home"
									style={{ width: '250px', height: '70px', fontSize: '20px' }}
								>
									Contactez nous
								</Button>
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<section style={{ marginTop: '100px' }}>
				<FooterComponent />
			</section>
		</React.Fragment>
	);
}

export default Home;
