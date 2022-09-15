import React from 'react';
import {
	PageWrapper,
	Main
} from './Admin.style';
import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import ConnectWalletBtn from '../../components/AdminPageComponents/ConnectWalletBtn/ConnectWalletBtn.component';
import Form from '../../components/AdminPageComponents/Form/Form.comonent';
import { useSelector } from 'react-redux';

const Owner = () => {
	const isOwner = useSelector(state => state.auth.owner);

	return (
		<PageWrapper>
			<Header />
			<Main>
				{
					isOwner ?
						<Form /> :
						<ConnectWalletBtn />
				}
			</Main>
			<Footer/>
		</PageWrapper>
	);
}

export default Owner;