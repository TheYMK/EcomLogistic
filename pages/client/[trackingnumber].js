import React, { useState, useEffect } from 'react';
import { getCustomerInfo } from '../../actions/client';
import AppLayout from '../../components/AppLayout';
import Router from 'next/router';
import { toast } from 'react-toastify';
import { Timeline, Button, Modal } from 'antd';

import FooterComponent from '../../components/nav/FooterComponent';

function ClientDashboard({ customer }) {
	useEffect(() => {
		if (Object.keys(customer).length === 0 && customer.constructor === Object) {
			toast.error("Le numéro de suivi que vous avez saisi n'est pas enregistré.");
			Router.push('/');
		}
	}, []);
	return (
		<React.Fragment>
			<AppLayout />

			<div className="jumbotron jumbotron-fluid" style={{ background: ' #f89d13' }}>
				<div className="container text-center">
					<h1 className="text-white" style={{ fontWeight: '500', fontSize: '25px' }}>
						Merci pour la confiance que vous nous faites pour la gestion de vos colis!
					</h1>
				</div>
			</div>

			<div className="container mb-5">
				<div className="card">
					<div className="card-body">
						<p className="text-center p-5" style={{ fontSize: '15px' }}>
							Hello {customer.first_name}! Vous trouverez ici tous les informations conçernant vos colis.
							Si les informations suivantes comportent des erreurs veuillez nous le signaler le plus
							rapidement possible. <br />
						</p>
						<p className="text-center">
							<span style={{ color: '#f89d13' }}>contact@ecomores-services.com</span>
						</p>
						<div className="row">
							<div className="col-md-6 p-5">
								<h4 className="text-center">Information destinataire</h4>
								<div className="line-border mb-5" />
								<div className="ml-4 text-center">
									<p>
										<strong>Nom et prénom:</strong>{' '}
										<span>
											{customer.first_name} {customer.last_name}
										</span>
									</p>
									<p>
										<strong>Email:</strong> <span>{customer.email}</span>
									</p>
									<p>
										<strong>Tel:</strong> <span>{customer.phone_number}</span>
									</p>
									<p>
										<strong>Adresse:</strong> <span>{customer.customer_address}</span>
									</p>
									<p>
										<strong>Pays (Ville):</strong>{' '}
										<span>
											{customer.country} ({customer.city})
										</span>
									</p>
									<p>
										<strong>Adresse:</strong> <span>{customer.customer_address}</span>
									</p>
								</div>
							</div>

							<div className="col-md-6 p-5">
								<h4 className="text-center">Information livraison</h4>
								<div className="line-border mb-5" />
								<div className="text-center">
									<p>
										<strong>Nombre de colis:</strong> <span>{customer.number_pieces}</span>
									</p>
									<p>
										<strong>Type de fret:</strong> <span>{customer.transport_type}</span>
									</p>
									<p>
										<strong>Numéro du fret:</strong> <span>{customer.freight_ID}</span>
									</p>
									<p>
										<strong>Numéro de suivi:</strong> <span>{customer.tracking_number}</span>
									</p>
									<p>
										<strong>Estimation arrivée:</strong>{' '}
										<span style={{ color: 'red' }}>
											{new Date(customer.estimated_arrival).toLocaleDateString('en-US')}
										</span>
									</p>
									<p>
										<strong>État de la livraison:</strong>{' '}
										<span style={{ color: 'red', fontWeight: '500' }}>{customer.status}</span>
									</p>
								</div>
							</div>

							<div className="col-md-12">
								<hr />
								<h4 className="text-center">Delivery Tracking</h4>
								<div className="line-border mb-5" />
								<Timeline mode="right">
									{customer.visited_locations.length > 0 ? (
										customer.visited_locations.map((location, i) => (
											<Timeline.Item
												label={`${new Date(location.date).toLocaleDateString(
													'en-US'
												)} à ${location.time}`}
												key={i}
											>
												{location.address} ({location.country})
											</Timeline.Item>
										))
									) : (
										<Timeline.Item color="gray" label="no date">
											No location update
										</Timeline.Item>
									)}
								</Timeline>
							</div>
						</div>
					</div>
				</div>
			</div>
			<FooterComponent />
		</React.Fragment>
	);
}

export async function getServerSideProps({ params }) {
	return getCustomerInfo(params.trackingnumber).then((res) => {
		return {
			props: {
				customer: res.data,
				params
			}
		};
	});
}

export default ClientDashboard;
