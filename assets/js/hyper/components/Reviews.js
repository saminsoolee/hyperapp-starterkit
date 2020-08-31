import { h, app } from 'hyperapp';

export default function Reviews({ state, actions }) {
	return (
		<section class="Reviews">
			<div class="container">
				<div class="row">
					<div class="col-md-8 side-image">
						<img src="https://cdn.vox-cdn.com/thumbor/DkL_JMY1fMXjZhqBTWUj8lowwzU=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7023701/BUTCHER-1-peter-luger-porterhouse-new-york.jpg" />
					</div>
					<div class="col-md-4">
						<h5 class="comp-title"> Reviews</h5>
						<h2>The Food Network</h2>
						<h4>"Best Restaurant in the O.C. Area!!"</h4>
						<p>
							Swag succulents lomo, mixtape semiotics pork belly seitan quinoa.
							Next level brooklyn coloring book 90's portland four dollar toast
							franzen selvage wolf normcore lyft artisan tbh. You probably
							haven't heard of them offal small batch kogi food truck, put a
							bird on it VHS. Biodiesel master cleanse fashion axe DIY. Health
							goth drinking vinegar asymmetrical vexillologist literally.
						</p>
						<div class="author">
							<strong>Joe Bastiachi</strong> <em>- World Renown BBQ Master</em>
						</div>
						<div class="arrows">
							<i class="fas fa-arrow-left"></i>
							<i class="fas fa-arrow-right"></i>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
