// @ts-ignore
import { ethers } from "hardhat";
import getRootHash from "../dist/actions/getMerkleRoot";

async function main() {
  let RollupContract = await ethers.getContractFactory("Rollup");
  let rollupAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  let rollup = RollupContract.attach(rollupAddress);

  // get root hash from rollup contract
  let rootL1 = await rollup.rootL1();

  // get root has from Layer 2 commander
  let rootL2 = await getRootHash();

  console.log(`merkle root on L1 = ${rootL1}`);
  console.log(`merkle root on L2 = ${rootL2}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
