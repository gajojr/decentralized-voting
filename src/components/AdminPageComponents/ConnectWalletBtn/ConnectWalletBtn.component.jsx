import React, { useState } from 'react';
import {
	SectionWrapper,
	Btn,
	Info,
	Alert,
	AlertCaption,
	AlertText,
	AlertBtn,
	Spinner
} from './ConnectWalletBtn.style';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Voting from '../../../web3/contracts-js/Voting';
import web3 from '../../../web3/web3-provider';
import { useDispatch } from 'react-redux';
import { selectAuthenticated, selectOwner, selectWalletAddress } from '../../../redux/reducers/Auth';

const ReactAlert = withReactContent(Swal);

const ConnectWalletBtn = () => {
	const dispatch = useDispatch();
	const [connectingWallet, setConnectingWallet] = useState(false);

	const connectWallet = async () => {
		setConnectingWallet(true);

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
			setConnectingWallet(false);

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
			setConnectingWallet(false);

			return;
		}

		await window.ethereum.request({ method: 'eth_requestAccounts' });
		const accounts = await web3.eth.getAccounts();
		const owner = await Voting.methods.owner().call();

		dispatch(selectAuthenticated(true));
		dispatch(selectWalletAddress(accounts[0]));
		dispatch(selectOwner(accounts[0] === owner));

		if (accounts[0] !== owner) {
			ReactAlert.fire({
				html: <Alert>
					<AlertCaption>Wallet notification</AlertCaption>
					<AlertText>You are not the owner</AlertText>
					<AlertBtn onClick={ReactAlert.close}>OK</AlertBtn>
				</Alert>,
				showConfirmButton: false,
				background: '#152D25'
			});
		}

		setConnectingWallet(false);
	}

	return (
		<SectionWrapper>
			<Info>You must confirm that you are the admin by connecting the wallet.</Info>
			<Btn onClick={connectWallet}>Connect wallet</Btn>
			{
				connectingWallet && <Spinner />
			}
		</SectionWrapper>
	);
}

export default ConnectWalletBtn;