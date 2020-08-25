export const defaultProps = {
	activeIndex: 0, // 1
	children: [], // 1
	items: [], // 1
	infinite: false, // 1
	showSlideInfo: false, // 1
	dotsDisabled: false, // 1
	buttonsDisabled: false, // 1
	playButtonEnabled: false, // 1
	controlsStrategy: 'default', // 1
	autoPlayDirection: 'ltr',
	autoPlayInterval: 400, // 1
	autoWidth: false, // 1
	autoHeight: false, // 1
	autoPlay: false, // 1
	preventAutoPlayOnAction: true, // 1
	stopAutoPlayOnHover: true, // 1
	preservePosition: false, // TODO
	responsive: null, // 1
	paddingLeft: 0, // 1
	paddingRight: 0, // 1
	animationType: 'slide', // 1
	animationDuration: 400, // 1
	animationEasingFunction: 'ease', // 1
	onInitialized: () => undefined, // 1
	onSlideChange: () => undefined, // 1
	onSlideChanged: () => undefined, // 1
	swipeDelta: 10,
	mouseTrackingEnabled: false,
	touchTrackingEnabled: false,
	preventEventOnTouchMove: false,
	swipeExtraPadding: 200,
};
