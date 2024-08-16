// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Election {
    string public title;
    string public description;
    bool public isPublic;
    string public start_date;
    string public end_date;

    // variable for keeping the number of candidates in election, increases when a new candidate is added
    uint public candidatesCount;

    //defines structure for a candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }
    // defines structure for a voter
    struct Voter {
        bool hasVoted;
        uint candidateId;
    }

    //creates mapping to map a unique candidate Id to a Candidate struct
    mapping(uint => Candidate) public candidates;
    // also to tie/map a unique blockchain adresss to a voter
    mapping(address => Voter) public voters;

    // event to be emitted when a voter casts a vote
    event VoteCast(address indexed voter, uint indexed candidateId);

    constructor(
        string memory _title,
        string memory _description,
        bool _isPublic,
        string _start_date,
        string _end_date,
    ) {
        require(_startDate < _endDate, "Start date must be before end date");
        title = _title;
        description = _description;
        isPublic = _isPublic;
        start_date = _startDate;
        end_date = _endDate;
    }

    // Modifier to ensure the election is active
    modifier onlyWhileOpen() {
        require(block.timestamp >= startDate, "Election has not started yet");
        require(block.timestamp <= endDate, "Election has ended");
        _;
    }

    // function to create a new candidate
    function addCandidate(string memory _name) public onlyWhileOpen {
        // increamented to assign a new id to a candidate
        candidatesCount++;
        // a new candidate struct is created and stored in the candiates mapping
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }
    
    //function to get all candidates
    function getCandidates() public view returns (Candidate[] memory) {
        Candidate[] memory allCandidates = new Candidate[](candidatesCount);
        for (uint i = 1; i <= candidatesCount; i++) {
            allCandidates[i - 1] = candidates[i];
        }
        return allCandidates;
    }

      // Function to add a voter to the election
    function addVoter(address _voterAddress) public onlyWhileOpen {
        require(!voters[_voterAddress].hasVoted, "Voter is already registered");
        voters[_voterAddress] = Voter(false, 0);
    }

    
}
