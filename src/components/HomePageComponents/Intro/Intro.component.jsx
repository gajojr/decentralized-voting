import React from 'react';
import {
	SectionWrapper,
	Caption,
	LogoImg
} from './Intro.style';

const Intro = () => {
	return (
		<SectionWrapper>
			<Caption>Vote for president using your <span style={{ color: '#02FFA8' }}>decentralised id</span></Caption>
			<LogoImg src='/images/project-logo.svg' alt="logo" />
		</SectionWrapper>
	);
}

export default Intro;