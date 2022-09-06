import React from 'react';
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
	NumberOfVotes
} from './CandidatesList.style';

const mockData = [
	{
		id: 1,
		name: 'Aki',
		lastname: 'Vucic',
		imgUrl: '/images/president-placeholder.png',
		quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		votes: 21
	}
];

const CandidatesList = () => {
	return (
		<SectionWrapper>
			<List>
				{mockData.map(candidate => {
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
								<VoteBtn>Vote</VoteBtn>
							</DownRow>
						</CandidateCard>
					);
				})}
			</List>
		</SectionWrapper>
	);
}

export default CandidatesList;