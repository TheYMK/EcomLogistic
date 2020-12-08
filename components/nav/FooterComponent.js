import React from 'react';

function FooterComponent() {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="container">
					<div className="row text-center">
						<div className="col-md-4">
							<img src="/static/images/logo.png" style={{ width: '230px', marginBottom: '20px' }} />
							<p>Discover the Lay&Lub playground</p>
						</div>
						<div className="col-md-4">
							<h3>Useful Links</h3>
							<ul>
								<li>Coupons</li>
								<li>Blog Post</li>
								<li>Return Policy</li>
								<li>Join Affiliate</li>
							</ul>
						</div>
						<div className="col-md-4">
							<h3>Follow us</h3>
							<ul>
								<li>Facebook</li>
								<li>Instagram</li>
								<li>Twitter</li>
								<li>Youtube</li>
							</ul>
						</div>
					</div>
					<hr />
					<p className="copyright">Copyright ©2020 Ecomores Services SARL, Tous droits réservés</p>
				</div>
			</div>
		</React.Fragment>
	);
}

export default FooterComponent;
