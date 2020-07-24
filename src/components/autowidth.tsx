import React from 'react';
import AliceCarousel from '../lib/react-alice-carousel';
import '../lib/scss/alice-carousel.scss';
import '../style.scss';

export default class Autowidth extends React.PureComponent<AppProps> {
	render() {
		return (
			<div className="app">
				<h1 className="h1">React Alice Carousel</h1>
				<AliceCarousel
					// paddingLeft={100}
					// startIndex={0}
					infinite={true}
					autoWidth={true}
					// responsive={{ 0: { items: 2 } }}
					// transitionDuration={400}
					// onSlideChange={console.debug}
				>
					<div className="item" style={{ width: 100 }}>
						<h1>1</h1>
					</div>
					<div className="item" style={{ width: 200 }}>
						<h1>2</h1>
					</div>
					<div className="item" style={{ width: 120 }}>
						<h1>3</h1>
					</div>
					<div className="item" style={{ width: 140 }}>
						<h1>4</h1>
					</div>
					<div className="item">
						<h1>5</h1>
					</div>
					<div className="item" style={{ width: 170 }}>
						<h1>6</h1>
					</div>
					<div className="item" style={{ width: 170 }}>
						<h1>7</h1>
					</div>
				</AliceCarousel>
			</div>
		);
	}
}

type AppProps = Record<string, unknown>;
