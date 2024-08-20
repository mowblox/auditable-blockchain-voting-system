import { expect } from "chai";
import { ethers } from "hardhat";

describe("Election Contract", function () {
  let Election;    // The contract factory
  let election;    // The deployed contract instance
  let owner;       // The owner of the contract (deployer)
  let voter1;      // A test account to represent a voter
  let voter2;      // Another test account to represent a second voter

  // This runs before each test
  beforeEach(async function () {
    [owner, voter1, voter2] = await ethers.getSigners();
    Election = await ethers.getContractFactory("Election");
    
    // Deploy the contract with some initial values
    election = await Election.deploy(
      "Test Election", 
      "An election for testing.", 
      true, 
      Math.floor(Date.now() / 1000), 
      Math.floor(Date.now() / 1000) + 3600 // Election lasts 1 hour
    );
  });

  // Test the contract's initialization
  it("should initialize with correct values", async function () {
    expect(await election.title()).to.equal("Test Election");
    expect(await election.description()).to.equal("An election for testing.");
    expect(await election.isPublic()).to.equal(true);
  });

  // Test adding a candidate
  it("should add a candidate", async function () {
    await election.addCandidate("Alice");
    const candidates = await election.getCandidates();
    expect(candidates.length).to.equal(1);
    expect(candidates[0].name).to.equal("Alice");
  });

  // Test adding a voter
  it("should add a voter", async function () {
    await election.addVoter(voter1.address);
    const [hasVoted, candidateId] = await election.getVoter(voter1.address);
    expect(hasVoted).to.equal(false);
    expect(candidateId).to.equal(0);
  });

  // Test casting a vote
  it("should allow a voter to cast a vote", async function () {
    await election.addCandidate("Alice");
    await election.addVoter(voter1.address);

    await election.connect(voter1).castVote(1);

    const [hasVoted, candidateId] = await election.getVoter(voter1.address);
    expect(hasVoted).to.equal(true);
    expect(candidateId).to.equal(1);

    const candidates = await election.getCandidates();
    expect(candidates[0].voteCount).to.equal(1);
  });

  // Test that voting emits the correct event
  it("should emit VoteCast event when a vote is cast", async function () {
    await election.addCandidate("Alice");
    await election.addVoter(voter1.address);

    await expect(election.connect(voter1).castVote(1))
      .to.emit(election, "VoteCast")
      .withArgs(voter1.address, 1);
  });

  // Test that a voter can't vote twice
  it("should not allow voting twice", async function () {
    await election.addCandidate("Alice");
    await election.addVoter(voter1.address);

    await election.connect(voter1).castVote(1);

    await expect(election.connect(voter1).castVote(1)).to.be.revertedWith("You have already voted.");
  });

  // Test that a voter can't vote for an invalid candidate
  it("should not allow voting for a non-existent candidate", async function () {
    await election.addCandidate("Alice");
    await election.addVoter(voter1.address);

    await expect(election.connect(voter1).castVote(2)).to.be.revertedWith("Invalid candidate. Please enter a valid candidate ID");
  });
});
