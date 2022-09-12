import React, { useState, useEffect } from 'react';
import { Buckets } from '@textile/hub';
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
	AlertBtn,
	Spinner
} from './CandidatesList.style';
import Voting from '../../../web3/contracts-js/Voting';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import web3 from '../../../web3/web3-provider';
import SBT from '../../../web3/contracts-js/SBT';

const ReactAlert = withReactContent(Swal);

const auth = {
	key: process.env.REACT_APP_TEXTILE_HUB_KEY
};
const buckets = Buckets.withUserAuth(auth);

const CandidatesList = () => {
	const [candidates, setCandidates] = useState([]);
	const [votingInProgress, setVotingInProgress] = useState(false);
	const [currentId, setCurrentId] = useState();

	const fetchCandidatesAndVotes = async () => {
		const { root } = await buckets.getOrCreate('candidate-images');
		if (!root) throw new Error('bucket not created');
		const bucketKey = root.key;

		let candidates = await Voting.getPastEvents('candidateCreated', {
			fromBlock: 0,
			toBlock: 'latest'
		});

		let votes = await Voting.getPastEvents('electionUpdated', {
			fromBlock: 0,
			toBlock: 'latest'
		});

		const candidateIds = {};

		votes.forEach(vote => {
			if (!candidateIds[vote.returnValues[0]]) {
				candidateIds[vote.returnValues[0]] = 1;
			} else {
				candidateIds[vote.returnValues[0]]++;
			}
		})

		candidates = candidates.map(event => ({
			id: event.returnValues[0],
			name: event.returnValues[1],
			lastname: event.returnValues[2],
			quote: event.returnValues[3],
			votes: candidateIds[event.returnValues[0]] || 0,
			imgUrl: `https://hub.textile.io/ipns/${bucketKey}/${event.returnValues[5]}`
		}));
		setCandidates(candidates);
	}

	useEffect(() => {
		(async () => {
			await fetchCandidatesAndVotes();
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

		setCurrentId(id);
		setVotingInProgress(true);

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
			setVotingInProgress(false);
			setCurrentId('');

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
			setVotingInProgress(false);
			setCurrentId('');

			return;
		}

		let gasAmount;
		try {
			gasAmount = await Voting.methods
				.vote(id)
				.estimateGas({
					from: accounts[0]
				});
		} catch (err) {
			console.log(err);
			ReactAlert.fire({
				html: <Alert>
					<AlertCaption>Wallet notification</AlertCaption>
					<AlertText>Failed to estimate gas for transaction, try again</AlertText>
					<AlertBtn onClick={ReactAlert.close}>OK</AlertBtn>
				</Alert>,
				showConfirmButton: false,
				background: '#152D25'
			});
			setVotingInProgress(false);
			setCurrentId('');

			return;
		}

		try {
			await Voting.methods
				.vote(id)
				.send({
					from: accounts[0],
					gasLimit: String(gasAmount + 5000)
				});
		} catch (err) {
			console.log(err);
			ReactAlert.fire({
				html: <Alert>
					<AlertCaption>Wallet notification</AlertCaption>
					<AlertText>Failed to create identity, try again</AlertText>
					<AlertBtn onClick={ReactAlert.close}>OK</AlertBtn>
				</Alert>,
				showConfirmButton: false,
				background: '#152D25'
			});
			setVotingInProgress(false);
			setCurrentId('');

			return;
		}

		await fetchCandidatesAndVotes();

		setVotingInProgress(false);
		setCurrentId('');
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
									<VoteBtn disabled={votingInProgress} onClick={() => vote(candidate.id)}>Vote
										{
											(votingInProgress && currentId === candidate.id) &&
											<Spinner />
										}
									</VoteBtn>
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