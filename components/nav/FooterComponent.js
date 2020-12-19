import React from 'react';
import { FacebookFilled, InstagramFilled } from '@ant-design/icons';

function FooterComponent() {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="container">
					<div className="row text-center">
						<div className="col-md-6">
							<img src="/static/images/logo_white.png" style={{ width: '230px' }} />
						</div>
						{/* <div className="col-md-4">
							<h3>Liens direct</h3>
							<ul>
								<li>Coupons</li>
								<li>Blog Post</li>
								<li>Return Policy</li>
								<li>Join Affiliate</li>
							</ul>
						</div> */}
						<div className="col-md-6">
							<p className="mt-5">
								<span>
									<a
										href="https://www.facebook.com/eComoresService"
										target="blank"
										className="text-white"
									>
										<FacebookFilled style={{ fontSize: '45px' }} />acebook
									</a>
								</span>{' '}
								<span className="ml-4">
									<a
										href="https://www.instagram.com/e_comores_service/"
										target="blank"
										className="text-white"
									>
										<InstagramFilled style={{ fontSize: '45px' }} /> Instagram
									</a>
								</span>
							</p>
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
