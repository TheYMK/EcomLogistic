import React, { useState } from 'react';
import Link from 'next/link';
import { SettingOutlined, UserOutlined, UserAddOutlined, LogoutOutlined, AppstoreOutlined } from '@ant-design/icons';
import Router from 'next/router';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';

import '../../styles/Header4.module.css';

function Header4() {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => ({ ...state }));
	const [ current, setCurrent ] = useState('home');

	const logout = () => {
		firebase.auth().signOut();

		dispatch({
			type: 'LOGOUT',
			payload: null
		});

		Router.push('/auth/login');
	};

	return (
		<React.Fragment>
			<div className="">
				<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
					<div className="logo mr-4">
						<Link href="/" onClick={(e) => setCurrent('home')}>
							<a className="navbar-brand">E-Comores Logisitcs</a>
						</Link>
					</div>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="fa fa-bars" />
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li
								className={`nav-item ${current === 'home' ? 'active' : ''}`}
								onClick={(e) => setCurrent('home')}
							>
								<Link href="/">
									<a className="nav-link">
										Acceuil <span className="sr-only">(current)</span>
									</a>
								</Link>
							</li>
							<li
								className={`nav-item ${current === 'services' ? 'active' : ''}`}
								onClick={(e) => setCurrent('services')}
							>
								<Link href="/#services">
									<a className="nav-link">Services</a>
								</Link>
							</li>
							{/* <li
								className={`nav-item ${current === 'services' ? 'active' : ''} dropdown`}
								onClick={(e) => setCurrent('services')}
							>
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Services
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<Link href="/services">
										<a className="dropdown-item">Services aérien</a>
									</Link>
									<Link href="/services">
										<a className="dropdown-item">Services maritime</a>
									</Link>
									<Link href="/services">
										<a className="dropdown-item">Services terrestre</a>
									</Link>
								</div>
							</li> */}
							<li
								className={`nav-item ${current === 'about' ? 'active' : ''}`}
								onClick={(e) => setCurrent('about')}
							>
								<Link href="/#about">
									<a className="nav-link">À propos de nous</a>
								</Link>
							</li>
							<li
								className={`nav-item ${current === 'contact' ? 'active' : ''}`}
								onClick={(e) => setCurrent('contact')}
							>
								<Link href="/#contact">
									<a className="nav-link">Contactez nous</a>
								</Link>
							</li>
						</ul>
						<ul className="navbar-nav ml-auto nav-flex-icons">
							{/* {!user && (
								<li className="nav-item">
									<Link href="/auth/register">
										<a className="nav-link">Inscription</a>
									</Link>
								</li>
							)}

							{!user && (
								<li className="nav-item">
									<Link href="/auth/login">
										<a className="nav-link">Se connecter</a>
									</Link>
								</li>
							)} */}

							{user && (
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										id="navbarDropdownMenuLink"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										<i className="fa fa-user mr-2" />
										{user.email && user.email.split('@')[0]}
									</a>
									<div
										className="dropdown-menu dropdown-menu-right dropdown-unique"
										aria-labelledby="navbarDropdownMenuLink"
									>
										{user &&
										user.role === 'admin' && (
											<Link href="/admin/dashboard">
												<a className="dropdown-item">Tableau de bord</a>
											</Link>
										)}
										<div className="dropdown-item" onClick={logout}>
											Deconnexion
										</div>
									</div>
								</li>
							)}
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
}

export default Header4;
