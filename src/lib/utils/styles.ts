import * as Utils from '.';
import { Props, State, Style, Transition } from '../types';

export const getRenderWrapperStyles = (props: Props, state: State, element) => {
	const { paddingLeft, paddingRight, autoHeight, duration } = props || {};
	// TODO
	const height = autoHeight && element && Utils.getGalleryItemHeight(/*element, props, state*/);
	const transition = height ? `height ${duration}ms` : undefined;

	return {
		height,
		transition,
		paddingLeft: `${paddingLeft}px`,
		paddingRight: `${paddingRight}px`,
	};
};

export const getDefaultStyles = (options?: Transition): Style => {
	const { transitionDuration = 0, transitionTimingFunction = '' } = options || {};
	return {
		transition: `transform ${transitionDuration}ms ${transitionTimingFunction}`,
	};
};

export const getTransitionProperty = (options?: Transition): string => {
	const { transitionDuration = 0, transitionTimingFunction = '' } = options || {};
	return `transform ${transitionDuration}ms ${transitionTimingFunction}`;
};

export const getRenderStageStyles = (nextStyles, currentStyles: Style): Style => {
	const { translate3d = 0 } = nextStyles || {};
	const transform = `translate3d(${-translate3d}px, 0, 0)`;

	return { ...currentStyles, transform };
};

export const getStageItemStyles = (i: number, state: State) => {
	const { sizesGrid } = state;
	const item = sizesGrid[i];

	return { width: item?.width };
};

export const getTranslate3dProperty = (nextIndex, state: Partial<State>) => {
	return state.autoWidth ? getTranslatePositionAutoWidth(nextIndex, state) : getTranslatePosition(nextIndex, state);
};

export const getTranslatePosition = (nextIndex, state: Partial<State>) => {
	const { itemsOffset = 0, itemsInSlide = 0, sizesGrid = [] } = state;
	const cursor = nextIndex + itemsOffset + itemsInSlide;
	const { position } = sizesGrid[cursor] || {};

	return position;
};

export const getTranslatePositionAutoWidth = (nextIndex, state: Partial<State>) => {
	const { infinite, itemsOffset = 0, itemsInSlide = 0, sizesGrid = [], stageWidth = 0, itemsCount = 0 } = state;
	const cursor = nextIndex + itemsOffset + itemsInSlide;
	const { position } = sizesGrid[cursor] || {};

	if (infinite) {
		return position;
	}

	const limit = getAutoWidthTranslatePositionLimit(sizesGrid, cursor);

	if (stageWidth < limit) {
		const { position } = sizesGrid[itemsCount + itemsOffset + itemsInSlide] || {};
		return Math.ceil(position) - stageWidth;
	}

	return position;
};

export const getAutoWidthTranslatePositionLimit = (sizesGrid, cursor) => {
	return sizesGrid.reduce((acc, { position }, index) => {
		if (index <= cursor) {
			acc += position;
		}
		return acc;
	}, 0);
};
