// @ts-ignore
import { ethers } from "hardhat";

async function main() {
  let impersonated_accounts = [
    "0x13aec50f5D3c011cd3fed44e2a30C515Bd8a5a06",
    "0x16463c0fdB6BA9618909F5b120ea1581618C1b9E",
    "0x01Ec5e7e03e2835bB2d1aE8D2edDEd298780129c",
    "0xC2C5A77d9f434F424Df3d39de9e90d95A0Df5Aca",
    "0x5d96323D8585F832689D33d407C4c9380DADc0f3",
  ];

  for await (const account of impersonated_accounts) {
    let signer = await ethers.provider.getSigner(account);
    let balance = await signer.getBalance();
    console.log(
      `account: ${account} | ${ethers.utils.formatEther(balance)} ETH`
    );
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
