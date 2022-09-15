import React from 'react';
import {
	PageWrapper,
	Main
} from './CreateIdentity.style';
import Header from '../../components/Header/Header.component';
import Footer from '../../components/Footer/Footer.component';
import Form from '../../components/CreateIndentityPageComponents/Form/Form.component';

const CreateIdentity = () => {
	return (
		<PageWrapper>
			<Header />
			<Main>
				<Form />
			</Main>
			<Footer/>
		</PageWrapper>
	);
}

export default CreateIdentity;