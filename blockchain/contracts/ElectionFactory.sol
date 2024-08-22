// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.24;

import "./Election.sol";

contract ElectionFactory {
  //Array ti keep track of the elections
  address[] public elections;

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

}


