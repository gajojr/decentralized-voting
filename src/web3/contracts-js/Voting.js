import web3 from '../web3-provider';

const address = '0xc47d4f8aFD38CeB4b814D19a554C754bA5C68585';

const abi = [{
        "inputs": [{
            "internalType": "address",
            "name": "_sbtContracAddress",
            "type": "address"
        }],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "lastName",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "quote",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "voteCount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "profileImgUrl",
                "type": "string"
            }
        ],
        "name": "candidateCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "lastName",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "quote",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "voteCount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "profileImgUrl",
                "type": "string"
            }
        ],
        "name": "electionUpdated",
        "type": "event"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "lastName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "quote",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "profileImgUrl",
                "type": "string"
            }
        ],
        "name": "addCandidate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "candidateCount",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "candidates",
        "outputs": [{
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "lastName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "quote",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "voteCount",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "profileImgUrl",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_candidateId",
            "type": "uint256"
        }],
        "name": "getVotesForCandidate",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
        }],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "voters",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    }
]

export default new web3.eth.Contract(abi, address);