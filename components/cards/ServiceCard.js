import React from 'react';

function ServiceCard({ imgSrc, title, description }) {
	return (
		<React.Fragment>
			<div className="col-md-4 mt-4">
				<div className="card profile-card-5">
					<div className="card-img-block">
						<img className="card-img-top" src={imgSrc} alt="Card image cap" />
					</div>
					<div className="card-body pt-0">
						<h5 className="card-title">{title}</h5>
						<p className="card-text" style={{ color: '#555' }}>
							{description}
						</p>
					</div>
				</div>
				{/* <button className="mt-3 w-100 text-center btn btn-secondary">
					<strong>En savoir plus</strong>
				</button> */}
			</div>
		</React.Fragment>
	);
}

export default ServiceCard;
