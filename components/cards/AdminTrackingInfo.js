import React, { useState } from 'react';
import { Timeline, Button, Modal } from 'antd';
import { useSelector } from 'react-redux';
import { updateDeliveryLocation } from '../../actions/admin';
import { toast } from 'react-toastify';

function AdminTrackingInfo({ customers, handleUpdateStatus }) {
	const [ values, setValues ] = useState({
		address: '',
		country: '',
		date: '',
		time: ''
	});

	const { address, country, date, time } = values;
	const { user } = useSelector((state) => ({ ...state }));

	const handleUpdateLocation = (e, id) => {
		e.preventDefault();
		// update delivery location
		const location = {
			address,
			country,
			date,
			time
		};

		if (user && user.token) {
			// console.log(customer.first_name);
			updateDeliveryLocation(id, location, user.token)
				.then((res) => {
					toast.success('La localisation de la livraison a été mise à jour');
					window.location.reload();
				})
				.catch((err) => {
					console.log(err);
					toast.error(
						`Une erreur est survenue lors de la mise à jour de la localisation. Veuillez réessayer.`
					);
				});
		}
	};

	const showCustomerTable = (customer) => (
		<div className="table-responsive">
			<table className="table">
				<thead className="thead-dark">
					<tr>
						<th scope="col">Nom et prénom</th>
						<th scope="col">Nombre de colis</th>
						<th scope="col">Type de fret</th>
						<th scope="col">ID du fret</th>
						<th scope="col">Numéro de suivi</th>
						<th scope="col">Pays</th>
						<th scope="col">Ville</th>
						<th scope="col">Adresse de destination</th>
						<th scope="col">Estimation arrivée</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							{customer.first_name} {customer.last_name}
						</td>
						<td>{customer.number_pieces}</td>
						<td>{customer.transport_type}</td>
						<td>{customer.freight_ID}</td>
						<td>{customer.tracking_number}</td>
						<td>{customer.country}</td>
						<td>{customer.city}</td>
						<td>{customer.customer_address}</td>
						<td>{new Date(customer.estimated_arrival).toLocaleDateString('en-US')}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);

	return (
		<React.Fragment>
			{customers.reverse().map((customer, index) => (
				<div key={index} className="pb-5 m-5">
					<div className="card ">
						<div
							style={
								customer.status !== 'Completed' ? (
									styles.customerCardBackgroundRed
								) : (
									styles.customerCardBackgroundGreen
								)
							}
						/>
						<div className="text-center mt-4">
							<span className="badge bg-primary text-white">
								<b>Status:</b> {customer.status}
							</span>
						</div>

						<div className="mx-5 mt-3">
							<h6>Modifier l'état de la livraison</h6>
							<select
								onChange={(e) => handleUpdateStatus(customer._id, e.target.value)}
								className="form-control"
								defaultValue={customer.status}
								name="status"
							>
								<option value="Not Processed">Not Processed</option>
								<option value="Processing">Processing</option>
								<option value="Dispatched">Dispatched</option>
								<option value="Cancelled">Cancelled</option>
								<option value="Completed">Completed</option>
							</select>
						</div>

						<div className="p-4">
							<div>{showCustomerTable(customer)}</div>
							<hr />
							<h4 className="mt-5">Delivery tracking</h4>
							<div className="row mt-2">
								<div className="col-md-6" style={{ overflowY: 'scroll', height: '200px' }}>
									<h4 />
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
								<div className="col-md-6">
									<form>
										<div className="form-row">
											<div className="form-group col-md-12">
												<label htmlFor="address">Adresse actuel</label>
												<input
													type="text"
													className="form-control"
													id="address"
													value={address}
													onChange={(e) => setValues({ ...values, address: e.target.value })}
													placeholder="Entrez une adresse"
												/>
											</div>
											<div className="form-group col-md-12">
												<label htmlFor="country">Pays</label>
												<input
													type="text"
													className="form-control"
													id="country"
													value={country}
													onChange={(e) => setValues({ ...values, country: e.target.value })}
													placeholder="Entrez un pays"
												/>
											</div>
											<div className="form-group col-md-6">
												<label htmlFor="date">Date</label>
												<input
													type="date"
													className="form-control"
													value={date}
													onChange={(e) => setValues({ ...values, date: e.target.value })}
												/>
											</div>
											<div className="form-group col-md-6">
												<label htmlFor="time">Heure</label>
												<input
													type="time"
													className="form-control"
													value={time}
													onChange={(e) => setValues({ ...values, time: e.target.value })}
												/>
											</div>
										</div>
										<Button type="primary" onClick={(e) => handleUpdateLocation(e, customer._id)}>
											Mettre à jour la localisation
										</Button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</React.Fragment>
	);
}

const styles = {
	customerCardBackgroundRed: {
		height: '5px',
		weight: '100%',
		backgroundColor: 'red'
	},
	customerCardBackgroundOrange: {
		height: '5px',
		weight: '100%',
		backgroundColor: 'orange'
	},
	customerCardBackgroundGreen: {
		height: '5px',
		weight: '100%',
		backgroundColor: 'green'
	}
};

export default AdminTrackingInfo;
