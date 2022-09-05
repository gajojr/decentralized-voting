// SPDX-License-Identifier: MIT

import "./SBT.sol";

pragma solidity ^0.8.7;

contract Voting {
    SBT identityContract;
    mapping(address => bool) public voters;
    address public owner;

    struct Candidate{
        uint256 id;
        string name;
        string lastName;
        uint256 voteCount;
    }

    uint public candidateCount;
    mapping(uint => Candidate) public candidates;
        
    event electionUpdated(
        uint id,
        string name,
        string lastName,
        uint voteCount
    );
      
    constructor (address _sbtContracAddress) {
        owner = msg.sender;
        identityContract = SBT(_sbtContracAddress);
    }

    function getVotesForCandidate(uint _candidateId) public view returns (uint256) {
        require(candidates[_candidateId].id != 0, "Candidate doesn't exist!");
        return candidates[_candidateId].voteCount;
    }

    function addCandidate (string calldata name, string calldata lastName) public {
        require(msg.sender == owner,"Only owner can set the presidents.");
        candidateCount++;
        candidates[candidateCount] = Candidate(candidateCount, name, lastName, 0);
    } 

    function vote (uint _id) public {
        require(!voters[msg.sender], "You have already voted");
        require(candidates[_id].id != 0, "The candidate doesn't exist");
        require(identityContract.walletOfOwner(msg.sender).length != 0, "You haven't created identitiy yet");
        candidates[_id].voteCount++;
        voters[msg.sender] = true;
        emit electionUpdated(_id, candidates[_id].name, candidates[_id].lastName, candidates[_id].voteCount);
    }
}