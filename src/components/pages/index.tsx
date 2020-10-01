import React from 'react';
import BasicPage from './basic';
import FadeoutPage from './fadeout';
import StagePaddingPage from './stage-padding';
import './styles.scss';

export default function getPageComponent(pageID = '') {
	if (pageID === 'basic') {
		return <BasicPage />;
	}
	if (pageID === 'fadeout') {
		return <FadeoutPage />;
	}
	if (pageID === 'stage-padding') {
		return <StagePaddingPage />;
	}

	return null;
}
