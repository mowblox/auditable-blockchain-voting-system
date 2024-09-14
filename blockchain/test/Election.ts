import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

describe("Election Contract", function () {
  // Fixture to deploy the contract and set up initial conditions
  async function deployElectionFixture() {
    const [owner, voter1, voter2] = await ethers.getSigners();
    const Election = await ethers.getContractFactory("Election");

    const startTime = Math.floor(Date.now() / 1000);
    const endTime = startTime + 3600; // Election lasts 1 hour

    const election = await Election.deploy(
      "Test Election",
      "An election for testing.",
      true,
      startTime,
      endTime
    );

    // Return the variables needed for the tests
    return { election, owner, voter1, voter2 };
  }

  it("should initialize with correct values", async function () {
    const { election } = await loadFixture(deployElectionFixture);

    expect(await election.title()).to.equal("Test Election");
    expect(await election.description()).to.equal("An election for testing.");
    expect(await election.isPublic()).to.equal(true);
  });

  it("should add a candidate", async function () {
    const { election } = await loadFixture(deployElectionFixture);

    await election.addCandidate("Alice","team1", "image1");
    const candidates = await election.getCandidates();
    expect(candidates.length).to.equal(1);
    expect(candidates[0].name).to.equal("Alice");
  });

  it("should add a voter", async function () {
    const { election, voter1 } = await loadFixture(deployElectionFixture);

    await election.addVoter(voter1.address);
    const [voted, candidateId] = await election.getVoter(voter1.address);
    expect(voted).to.equal(false);
    expect(candidateId).to.equal(0);
  });

  it("should allow a voter to cast a vote", async function () {
    const { election, voter1 } = await loadFixture(deployElectionFixture);

    await election.addCandidate("Alice","team1", "image1");
    await election.addVoter(voter1.address);

    await election.connect(voter1).castVote(1);

    const [voted, candidateId] = await election.getVoter(voter1.address);
    expect(voted).to.equal(true);
    expect(candidateId).to.equal(1);

    const candidates = await election.getCandidates();
    expect(candidates[0].voteCount).to.equal(1);
  });

  it("should emit VoteCast event when a vote is cast", async function () {
    const { election, voter1 } = await loadFixture(deployElectionFixture);

    await election.addCandidate("Alice","team1", "image1");
    await election.addVoter(voter1.address);

    await expect(election.connect(voter1).castVote(1))
      .to.emit(election, "VoteCast")
      .withArgs(voter1.address, 1);
  });

  it("should not allow voting twice", async function () {
    const { election, voter1 } = await loadFixture(deployElectionFixture);

    await election.addCandidate("Alice","team1", "image1");
    await election.addVoter(voter1.address);

    await election.connect(voter1).castVote(1);

    await expect(election.connect(voter1).castVote(1)).to.be.revertedWith("You have already voted.");
  });

  it("should not allow voting for a non-existent candidate", async function () {
    const { election, voter1 } = await loadFixture(deployElectionFixture);

    await election.addCandidate("Alice","team1", "image1");
    await election.addVoter(voter1.address);

    await expect(election.connect(voter1).castVote(2)).to.be.revertedWith("Invalid candidate. Please enter a valid candidate ID");
  });
});
