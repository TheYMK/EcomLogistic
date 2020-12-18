import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import LazyHero from 'react-lazy-hero';
import { Button } from 'antd';
import '../styles/Home.module.css';
import FooterComponent from '../components/nav/FooterComponent';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import ServiceCard from '../components/cards/ServiceCard';

function Home() {
	const [ values, setValues ] = useState({
		email: '',
		name: '',
		message: ''
	});

	const { email, name, message } = values;

	const handleMessageSubmit = (e) => {
		e.preventDefault();

		console.log(values);
	};

	return (
		<React.Fragment>
			<AppLayout />
			<LazyHero
				imageSrc="/static/images/hero_bg_1_1.jpg"
				color="#3b3b3b"
				isCentered={true}
				minHeight="65vh"
				opacity={0.5}
				style={{ overflow: 'hidden' }}
				transitionDuration={1000}
				transitionTimingFunction="ease-in-out"
			>
				<h1 style={{ color: 'white', fontWeight: '700' }} className="hero-text">
					<nobr>
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
						& LOGISTIQUES
					</nobr>
				</h1>
				<div className="card tracking-card" style={{ width: '100%', borderRadius: '20px' }}>
					<div className="card-body px-5">
						<h5 className="card-title" style={{ color: '#555' }}>
							Suivez vos colis en temps réel
						</h5>
						<small style={{ fontWeight: '400', color: 'gray' }}>
							Le numéro de suivi vous a été envoyé par email. <br />En cas de perte de votre numéro de
							suivi, veuillez nous contacter.
						</small>
						<form>
							<div className="form-group">
								<div className="container mt-4">
									<input
										type="number"
										className="form-control text-center"
										id="tracking_number"
										aria-describedby="trackingNumber"
										placeholder="Saisissez votre numéro de suivi..."
									/>

									<Link href="#">
										<a className="btn effect01 mt-4">
											<span>
												Suivre <i className="fa fa-arrow-circle-right" />
											</span>
										</a>
									</Link>
								</div>
							</div>
						</form>
					</div>
				</div>
			</LazyHero>

			<div className="container">
				<h3 className="text-center mt-4" style={{ color: '#555' }}>
					CE QUE NOUS OFFRONS
				</h3>
				<div className="line-border" />
				<div className="row text-center">
					<ServiceCard
						imgSrc={'/static/images/planeservice.jpeg'}
						title={'FRET AÉRIEN'}
						description={`Le réseau mondial aérien de E-Comores Services propose des solutions de livraison rapides et économiques qui répondent à vos besoins. Nous assurons le transport intégral de porte-à-porte et un dédouanement sans encombres. Notre technologie de pointe nous permettent un suivi sophistiqué de vos colis, de l'ordre d'envoi jusqu'à sa destination finale.`}
					/>
					<ServiceCard
						imgSrc={'/static/images/shipservice.jpeg'}
						title={'FRET MARITIME'}
						description={`En nous appuyant sur notre réseau international, une équipe d'experts aguerris et des systèmes technologiques intégrés, nous couvrons les principales routes maritimes et commerciales mondiales. Nous nous consacrons entièrement à la gestion de votre cargaison sur tout le processus d'expédition ; de la collecte, à la douane jusqu'à la livraison finale.`}
					/>
					<ServiceCard
						imgSrc={'/static/images/truckservice.jpeg'}
						title={'FRET TERRESTRE'}
						description={`Des solutions variées de chargement partiel (LTL) et complet (FTL) associées à des centres stratégiquement localisés permettent d'obtenir les meilleurs résultats en terme de délais et de fiabilité pour le transport de marchandises.`}
					/>
				</div>
			</div>

			<div className="container">
				<h3 className="text-center" style={{ color: '#4f4f4e', marginTop: '120px' }}>
					À PROPOS DE NOUS
				</h3>
				<div className="line-border" />
			</div>

			<div className="about">
				<div className="small-container">
					<div className="row">
						<div className="col-md-6">
							<img src="/static/images/ecomservices.png" className="about-img" />
						</div>
						<div className="col-md-6 mt-5">
							<h1>Qui sommes-nous?</h1>
							<p style={{ color: '#555' }} className="about-text">
								Nous sommes tous très différents. Nous sommes nés dans différentes villes, à des moments
								différents. Mais nous avons quelque chose qui nous unit tous. C'est notre entreprise.
								Nous sommes son cœur. Nous ne sommes pas qu'une équipe, nous sommes une famille. Une
								famille avec pour but d'assurer une livraison en temps et en heure, choisissez parmi une
								palette d'options de fret allant du terrestre au maritime, en passant par les services
								aériens. Grâce à une combinaison de technologies innovantes de pointe, nous livrons les
								colis rapidement, quels que soient la taille ou le nombre de colis. Que ce soit pour
								votre entreprise ou à titre privé, E-Comores Services vous propose la meilleure option
								de fret pour répondre à vos besoins.
							</p>
							<br />
							<Link href="">
								<a className="about-button">En savoir plus &#8594;</a>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<h3 className="text-center" style={{ color: '#4f4f4e', marginTop: '120px' }}>
					CONTACTEZ NOUS
				</h3>
				<div className="line-border" />
			</div>

			<div className="container" style={{ padding: '100px' }}>
				<form>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label htmlFor="name">Nom</label>
							<input
								type="text"
								className="form-control"
								value={name}
								onChange={(e) => setValues({ ...values, name: e.target.value })}
								id="name"
								placeholder="Saisissez votre nom..."
							/>
						</div>
						<div className="form-group col-md-6">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								className="form-control"
								id="email"
								value={email}
								onChange={(e) => setValues({ ...values, email: e.target.value })}
								placeholder="Saisissez votre email..."
							/>
						</div>
						<div className="form-group col-md-12">
							<label htmlFor="message">Message</label>
							<textarea
								className="form-control"
								id="message"
								rows="6"
								value={message}
								onChange={(e) => setValues({ ...values, message: e.target.value })}
								placeholder="Saisissez votre message..."
							/>
						</div>
					</div>

					<button className="message-button" onClick={handleMessageSubmit}>
						Envoyer
					</button>
				</form>
			</div>

			<div>
				<FooterComponent />
			</div>
		</React.Fragment>
	);
}

// 		<img src={'/static/images/ecomservices.png'} style={{ width: '400px' }} />
export default Home;
