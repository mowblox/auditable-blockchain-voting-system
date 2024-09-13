import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ElectionFactoryModule = buildModule("ElectionFactoryModule", (m) => {
  const electionFactory = m.contract("ElectionFactory");

  return { electionFactory };
});

export default ElectionFactoryModule;
