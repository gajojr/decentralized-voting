import React, { useEffect } from 'react';
import {
	PageWrapper,
	Main,
	Alert,
	AlertCaption,
	AlertText,
	AlertBtn
} from './HomePage.style';
import Header from '../../components/Header/Header.component';
import Intro from '../../components/HomePageComponents/Intro/Intro.component';
import CandidatesList from '../../components/HomePageComponents/CandidatesList/CandidatesList.component';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ReactAlert = withReactContent(Swal);

const HomePage = () => {
	useEffect(() => {
		if (!window.ethereum) {
			ReactAlert.fire({
				html: <Alert>
					<AlertCaption>Wallet notification</AlertCaption>
					<AlertText>You don't have any ethereum wallet installed</AlertText>
					<AlertBtn onClick={ReactAlert.close}>OK</AlertBtn>
				</Alert>,
				showConfirmButton: false,
				background: '#152D25'
			});

			return;
		}

		const chainId = window.ethereum.networkVersion;
		if (chainId !== "4") {
			ReactAlert.fire({
				html: <Alert>
					<AlertCaption>Wallet notification</AlertCaption>
					<AlertText>Switch network to rinkeby and try again</AlertText>
					<AlertBtn onClick={ReactAlert.close}>OK</AlertBtn>
				</Alert>,
				showConfirmButton: false,
				background: '#152D25'
			});

			return;
		}
	}, []);

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