import React, { useState, useEffect } from 'react';
import {
	SectionWrapper,
	List,
	CandidateCard,
	UpperCardRow,
	ImageAndNumber,
	CandidateImg,
	CandidateNumber,
	NameAndQuote,
	CandidateName,
	CandidateQuote,
	DownRow,
	VoteBtn,
	NumberOfVotes,
	Alert,
	AlertCaption,
	AlertText,
	AlertBtn
} from './CandidatesList.style';
import Voting from '../../../web3/contracts-js/Voting';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import web3 from '../../../web3/web3-provider';
import SBT from '../../../web3/contracts-js/SBT';

const ReactAlert = withReactContent(Swal);

const CandidatesList = () => {
	const [candidates, setCandidates] = useState([]);

	useEffect(() => {
		(async () => {
			const events = await Voting.getPastEvents('candidateCreated', {
				fromBlock: 0,
				toBlock: 'latest'
			});
			console.log(events);
			const candidates = events.map(event => ({
				id: event.returnValues[0],
				name: event.returnValues[1],
				lastname: event.returnValues[2],
				quote: event.returnValues[3],
				votes: event.returnValues[4],
				imgUrl: `https://hub.textile.io/ipns/bafzbeifxc26sp5nc3kqbbb7gg4j43t2gj5445en2gzp2c6sp6t37mtlxhi/${event.returnValues[5]}`
			}));
			setCandidates(candidates);
		})();
	}, []);

	const vote = async (id) => {
		if (!window.ethereum) {
			ReactAlert.fire({
				html: <Alert>
					<AlertCaption>Wallet notification</AlertCaption>
					<AlertText>No ethereum wallet installed!</AlertText>
					<AlertBtn onClick={ReactAlert.close}>OK</AlertBtn>
				</Alert>,
				showConfirmButton: false,
				background: '#152D25'
			});

			return;
		}

		await window.ethereum.request({ method: 'eth_requestAccounts' });
		const accounts = await web3.eth.getAccounts();

		const hasId = await SBT.methods.walletOfOwner(accounts[0]).call();
		if (!hasId.length) {
			ReactAlert.fire({
				html: <Alert>
					<AlertCaption>Id notification</AlertCaption>
					<AlertText>You haven't minted your id, go create identity page and do it first.</AlertText>
					<AlertBtn onClick={ReactAlert.close}>OK</AlertBtn>
				</Alert>,
				showConfirmButton: false,
				background: '#152D25'
			});

			return;
		}

		const hasVoted = await Voting.methods.voters(accounts[0]).call();
		if (hasVoted) {
			ReactAlert.fire({
				html: <Alert>
					<AlertCaption>Voting notification</AlertCaption>
					<AlertText>You have already voted!</AlertText>
					<AlertBtn onClick={ReactAlert.close}>OK</AlertBtn>
				</Alert>,
				showConfirmButton: false,
				background: '#152D25'
			});

			return;
		}
	}

	return (
		<SectionWrapper>
			<List>
				{
					candidates.map(candidate => {
						return (
							<CandidateCard key={candidate.id}>
								<UpperCardRow>
									<ImageAndNumber>
										<CandidateImg src={candidate.imgUrl} alt={`${candidate.name} ${candidate.lastname}`} />
										<CandidateNumber>Number #{candidate.id}</CandidateNumber>
									</ImageAndNumber>
									<NameAndQuote>
										<CandidateName>{candidate.name} {candidate.lastname}</CandidateName>
										<CandidateQuote>{candidate.quote}</CandidateQuote>
									</NameAndQuote>
								</UpperCardRow>
								<DownRow>
									<NumberOfVotes>Votes: {candidate.votes}</NumberOfVotes>
									<VoteBtn onClick={() => vote(candidate.id)}>Vote</VoteBtn>
								</DownRow>
							</CandidateCard>
						);
					})
				}
			</List>
		</SectionWrapper>
	);
}

export default CandidatesList;