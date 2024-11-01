import { ethers } from "hardhat";
import hre from "hardhat";

async function deploy(networkName: string): Promise<string> {
  console.log(`Deploying to ${networkName}...`);
  const ElectionContract = await ethers.getContractFactory("Election");

  const startDate = 1730030160;
  const endDate = 1730033760;

  const contract = await ElectionContract.deploy(
    "Presidential Election 2024",
    "Vote for your favorite candidate",
    true,
    startDate,
    endDate
  );

  await contract.waitForDeployment();
  const contractAddress = contract.target as string;
  console.log(`Contract deployed on ${networkName}: ${contractAddress}`);

  return contractAddress;
}

async function main() {
  const networkName = hre.network.name;
  const address = await deploy(networkName);
  console.log(`Deployed address on ${networkName}: ${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
