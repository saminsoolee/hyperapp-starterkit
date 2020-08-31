import { h, app } from 'hyperapp';

export default function ContactUs({ state, actions }) {
	return (
		<section class="ContactUs">
			<div class="container">
				<h5 class="comp-title">Contact Us</h5>
				<h2>Delicious Flavour all year round!</h2>
			</div>
			<div class="box">
				<div class="row">
					<div class="col-md-8">
						<div class="title">Irvine, California</div>
						<h6 class="Address">3392 Michelson Dr, Irvine CA 92606</h6>
						<p>
							<strong>email:</strong>{' '}
							<a href="mailto:info@premiumkoreanbbq.com">
								info@premiumkoreanbbq.com
							</a>
						</p>
					</div>
					<div class="col-md-4">
						<h6>Phone:</h6>
						<div class="title">(949) 332 - 7575</div>
						<h6>Lunch Service:</h6>
						<p>Friday, Saturday, and Sunday.</p>
						<p>Bookings from 12:00pm - 1:30pm</p>
						<br></br>
						<h6>Dinner Service:</h6>
						<p>Daily Booking from 6:00pm - 9:30pm</p>
					</div>
				</div>
			</div>
		</section>
	);
}
