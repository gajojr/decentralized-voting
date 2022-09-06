import React from 'react';
import {
	PageWrapper,
	Main
} from './HomePage.style';
import Header from '../../components/Header/Header.component';
import Intro from '../../components/HomePageComponents/Intro/Intro.component';
import CandidatesList from '../../components/HomePageComponents/CandidatesList/CandidatesList.component';

const HomePage = () => {
	return (
		<PageWrapper>
			<Header />
			<Main>
				<Intro />
				<CandidatesList />
			</Main>
		</PageWrapper>
	);
}

export default HomePage;