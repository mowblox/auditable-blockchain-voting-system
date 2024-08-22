// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.24;

import "./Election.sol";

contract ElectionFactory {
  address public owner;
  //Array ti keep track of the elections
  address[] public elections;

  constructor (){
    owner = msg.sender;
  }

   modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        _;
    }

  //Event emitted when an election is created
  event ElectionCreated(address electionAddress);

  //Function to create new election
  function createElection(
    string memory _title,
    string memory _description,
    bool _isPublic,
    uint _startDate,
    uint _endDate
  ) public {
    //Create a new instance of the Election contract
    Election newElection = new Election(
      _title,
      _description,
      _isPublic,
      _startDate,
      _endDate
    );

    //Store the address of the newly created election
    elections.push(address(newElection));

    //Emit an event for the ceration of the new contract
    emit ElectionCreated(address(newElection));
  }
  

  //function to get addresses of all elections
  function getElections() public view returns (address[] memory){
    return elections;
  }

  //Below are other functions that I think should be added
  //function to get election by ID
  function getElectionDetails(uint _electionID) public view returns (string memory, string memory, bool, uint , uint){
    Election election = Election(elections[_electionID]);
    return (election.title(), election.description(), election.isPublic(), election.startDate(), election.endDate());

  }

  //function to delete an election
  function deleteElection(uint _electionID) public onlyOwner {
    delete elections[_electionID];
  }


  //Function to retrieve the total number of elections
  function getTotalElections() public view returns (uint) {
    return elections.length;
  }



}


