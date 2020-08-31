import { h, app } from 'hyperapp';

export default function RandomQuote({ state, actions }) {
	return (
		<section
			class="RandomQuote"
			style={{
				backgroundImage:
					'linear-gradient(135deg, rgba(0, 0, 0, .2) 0, #000 100%),url("https://www.seriouseats.com/2019/07/20190619-korean-bbq-vicky-wasik-19-1500x1125.jpg")'
			}}
		>
			<div class="container">
				<h1>
					"One cannot think well, love well, sleep well, if one has not dined
					well."
				</h1>
				<span class="author"> - Virginia Woolf</span>
			</div>
		</section>
	);
}
