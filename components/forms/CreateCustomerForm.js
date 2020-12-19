import React from 'react';
import { Button } from 'antd';

function CreateCustomerForm({ setValues, values, loading, transport_types, statusOptions }) {
	const {
		first_name,
		last_name,
		email,
		number_pieces,
		customer_address,
		transport_type,
		freight_ID,
		tracking_number,
		country,
		city,
		phone_number,
		status,
		estimated_arrival
	} = values;

	return (
		<form>
			<div className="form-group row g-3">
				<div className="col-md-6">
					<label htmlFor="first_name" className="form-label">
						Nom
					</label>
					<input
						type="text"
						className="form-control"
						id="first_name"
						placeholder="Nom du client"
						value={first_name}
						autoFocus
						onChange={(e) => setValues({ ...values, first_name: e.target.value })}
					/>
				</div>
				<div className="col-md-6">
					<label htmlFor="last_name" className="form-label">
						Prenom
					</label>
					<input
						type="text"
						className="form-control"
						id="last_name"
						placeholder="Prenom du client"
						value={last_name}
						onChange={(e) => setValues({ ...values, last_name: e.target.value })}
					/>
				</div>
				<div className="col-md-6 mt-3">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
						placeholder="xxx@xxx.com"
						value={email}
						onChange={(e) => setValues({ ...values, email: e.target.value })}
					/>
				</div>
				<div className="col-md-6 mt-3">
					<label htmlFor="phone_number" className="form-label">
						Numero de telephone
					</label>
					<input
						type="text"
						className="form-control"
						id="phone_number"
						placeholder="00000000"
						value={phone_number}
						onChange={(e) => setValues({ ...values, phone_number: e.target.value })}
					/>
				</div>
				<div className="col-md-12 mt-3">
					<label htmlFor="customer_address" className="form-label">
						Address du destinataire
					</label>
					<input
						type="text"
						className="form-control"
						id="customer_address"
						placeholder="Entrez une adresse complete"
						value={customer_address}
						onChange={(e) => setValues({ ...values, customer_address: e.target.value })}
					/>
				</div>
				<div className="col-md-6 mt-3">
					<label htmlFor="country" className="form-label">
						Pays
					</label>
					<input
						type="text"
						className="form-control"
						id="country"
						placeholder="Pays de destination"
						value={country}
						onChange={(e) => setValues({ ...values, country: e.target.value })}
					/>
				</div>
				<div className="col-md-6 mt-3">
					<label htmlFor="city" className="form-label">
						Ville
					</label>
					<input
						type="text"
						className="form-control"
						id="city"
						placeholder="Ville de destination"
						value={city}
						onChange={(e) => setValues({ ...values, city: e.target.value })}
					/>
				</div>
				<div className="col-md-6 mt-3">
					<label htmlFor="number_pieces" className="form-label">
						Nombre de pieces
					</label>
					<input
						type="number"
						className="form-control"
						id="number_pieces"
						placeholder="Nombre de pieces"
						value={number_pieces}
						min={0}
						onChange={(e) => setValues({ ...values, number_pieces: e.target.value })}
					/>
				</div>
				<div className="col-md-6 mt-3">
					<label htmlFor="transport_type" className="form-label">
						Type de transport
					</label>
					<select
						name="transport_type"
						id="transport_type"
						className="form-control"
						onChange={(e) => setValues({ ...values, transport_type: e.target.value })}
					>
						<option value="">Veuillez choisir un type de transport</option>
						{transport_types.map((t, i) => (
							<option key={i} value={t}>
								{t}
							</option>
						))}
					</select>
				</div>

				<div className="col-md-6 mt-3">
					<label htmlFor="freight_ID" className="form-label">
						ID du fret
					</label>
					<input
						type="text"
						className="form-control"
						id="freight_ID"
						placeholder="Entrez l'ID du fet"
						value={freight_ID}
						onChange={(e) => setValues({ ...values, freight_ID: e.target.value })}
					/>
				</div>
				<div className="col-md-6 mt-3">
					<label htmlFor="tracking_number" className="form-label">
						№ de suivi <span style={{ color: 'red' }}>(Doit être unique)</span>
					</label>
					<input
						type="text"
						className="form-control"
						id="tracking_number"
						placeholder="Entrez le numero de suivi"
						value={tracking_number}
						onChange={(e) => setValues({ ...values, tracking_number: e.target.value })}
					/>
				</div>

				<div className="col-md-6 mt-3">
					<label htmlFor="status" className="form-label">
						État de l'envoi
					</label>
					<select
						name="status"
						id="status"
						className="form-control"
						onChange={(e) => setValues({ ...values, status: e.target.value })}
					>
						<option value="">Veuillez choisir un status</option>
						{statusOptions.map((s, i) => (
							<option key={i} value={s}>
								{s}
							</option>
						))}
					</select>
				</div>
				<div className="col-md-6 mt-3">
					<label htmlFor="estimated_arrival" className="form-label">
						Estimation arrivée
					</label>
					<input
						type="date"
						className="form-control"
						id="estimated_arrival"
						value={estimated_arrival}
						onChange={(e) => setValues({ ...values, estimated_arrival: e.target.value })}
					/>
				</div>
			</div>
		</form>
	);
}

export default CreateCustomerForm;
