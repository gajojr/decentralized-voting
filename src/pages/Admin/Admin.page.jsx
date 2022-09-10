import React, { useState } from 'react';
import {
	PageWrapper,
	Main
} from './Admin.style';
import Header from '../../components/Header/Header.component';
import ConnectWalletBtn from '../../components/AdminPageComponents/ConnectWalletBtn/ConnectWalletBtn.component';
import Form from '../../components/AdminPageComponents/Form/Form.comonent';

const Owner = () => {
	const [ownershipConfirmed, setOwnershipConfirmed] = useState(false);

	return (
		<PageWrapper>
			<Header />
			<Main>
				{
					ownershipConfirmed ?
						<Form /> :
						<ConnectWalletBtn />
				}
			</Main>
		</PageWrapper>
	);
}

export default Owner;