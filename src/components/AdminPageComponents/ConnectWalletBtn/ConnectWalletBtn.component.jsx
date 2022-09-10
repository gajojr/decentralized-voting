import React from 'react';
import {
	SectionWrapper,
	Btn,
	Info
} from './ConnectWalletBtn.style';

const ConnectWalletBtn = () => {
	const connectWallet = async () => { }

	return (
		<SectionWrapper>
			<Info>You must confirm that you are the admin by connecting the wallet.</Info>
			<Btn onClick={connectWallet}>Connect wallet</Btn>
		</SectionWrapper>
	);
}

export default ConnectWalletBtn;