import React from 'react';
import {
	SectionWrapper,
	LinkSection,
	TwitterIcon,
	StyledLink,
	JobTitle
} from './Footer.style';

const Footer = () => {
	return (
		<SectionWrapper>
			<LinkSection>
				<StyledLink href="https://twitter.com/ilijaGajo">
					<TwitterIcon />
					<JobTitle>Designer</JobTitle>
				</StyledLink>
			</LinkSection>
			<LinkSection>
				<StyledLink href="https://twitter.com/AndrijaGajic1">
					<TwitterIcon />
					<JobTitle>Developer</JobTitle>
				</StyledLink>
			</LinkSection>
		</SectionWrapper>
	);
}

export default Footer;