import React from 'react';
import {
	SectionWrapper,
	MintForm,
	FormCaption,
	NameInput,
	LastnameInput,
	MintBtn,
	QuoteInput
} from './Form.style';

const Form = () => {
	const addCandidate = async (e) => {
		e.preventDefault();

		// console.log(e.target.name.value);
		// TODO: check if inputs are correct
	}

	return (
		<SectionWrapper>
			<MintForm onSubmit={addCandidate}>
				<FormCaption>Add candidate</FormCaption>
				<NameInput minLength="2" maxLength="20" />
				<LastnameInput minLength="2" maxLength="20" />
				<QuoteInput minLength="50" maxLegnth="500" />
				<MintBtn>MINT</MintBtn>
			</MintForm>
		</SectionWrapper>
	);
}

export default Form;