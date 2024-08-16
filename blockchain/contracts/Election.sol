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
        start_date = _start_date;
        end_date = _end_date;
    }
}
