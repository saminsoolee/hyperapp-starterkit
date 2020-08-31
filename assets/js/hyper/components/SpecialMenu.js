import { h, app } from 'hyperapp';

export default function SpecialMenu({ state, actions }) {
	return (
		<section class="SpecialMenu">
			<div class="container">
				<h5 class="comp-title">Special Menu</h5>
				<h2>Delicious Flavor for All Seasons</h2>
				<div class="row boxes">
					<div class="col-md-4">
						<div class="box">
							<div class="box-image">
								<div class="price-circle">$125</div>
							</div>
							<span class="title">Combo #1</span>
							<p class="details">Ribs, Ribeye, Flank</p>
						</div>
					</div>
					<div class="col-md-4">
						<div class="box">
							<div class="box-image">
								<div class="price-circle">$150</div>
							</div>
							<span class="title">Combo #2</span>
							<p class="details">Ribs, Ribeye, Flank</p>
						</div>
					</div>
					<div class="col-md-4">
						<div class="box">
							<div class="box-image">
								<div class="price-circle"> (MP)</div>
							</div>
							<span class="title">Korean Beef Imported</span>
							<p class="details">Cost is Market Price (MP)</p>
						</div>
					</div>
					<a href="#" class="link">
						View Full Menu
					</a>
				</div>
			</div>
		</section>
	);
}
