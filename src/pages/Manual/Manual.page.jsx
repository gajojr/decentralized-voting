import React from 'react';
import {
	PageWrapper,
	Main,
	ProjectInfo
} from './Manual.style';
import Header from '../../components/Header/Header.component';

const Manual = () => {
	return (
		<PageWrapper>
			<Header />
			<Main>
				<ProjectInfo>
					This project is used as a decentralised voting platform. User can create digital identity by minting the SBT token from CREATE ID page with his info. Every user can mint 1 token max. That token is used as proof that you own id and you can vote with it. Every user can only vote once. To mint sbt token, connect your ethereum wallet and choose rinkeby testnet.
					<br />
					<br />
					Admin(deployer of the contract) can add new candidates on admin page where he uploads the image of candidate to textile bucket(organized way to use ipfs or ipns) are those images are retrieved from buckets on home page.
				</ProjectInfo>
			</Main>
		</PageWrapper>
	);
}

export default Manual;