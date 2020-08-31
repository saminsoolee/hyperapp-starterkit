import { h, app } from 'hyperapp';

export default function Footer({ state, actions }) {
	return (
		<footer>
			<div class="container">
				<nav class="menu">
					<a href="#">Our Story</a>
					<a href="#">Reviews</a>
					<a href="#">Special Menu</a>
					<a href="#">Reservations</a>
					<a href="#">Contact Us</a>
				</nav>
				<ul class="social-media">
					<li>
						<a href="www.facebook.com" target="new">
							<i class="fab fa-facebook"></i>
						</a>
					</li>
					<li>
						<a href="www.twitter.com" target="new">
							<i class="fab fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href="www.google.com" target="new">
							<i class="fab fa-google"></i>
						</a>
					</li>
					<li>
						<a href="www.instagram.com" target="new">
							<i class="fab fa-instagram"></i>
						</a>
					</li>
					<li>
						<a href="www.youtube.com" target="new">
							<i class="fab fa-youtube"></i>
						</a>
					</li>
				</ul>
				<div class="copyright">Ⓒ 2020 Copyright</div>
			</div>
		</footer>
	);
}
