// @ts-ignore
import { ethers } from "hardhat";

async function main() {
  let [owner, ...others] = await ethers.getSigners();

  let RollupContract = await ethers.getContractFactory("Rollup");
  let rollupAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  let rollup = RollupContract.attach(rollupAddress);

  await rollup
    .connect(owner)
    .applyTransactions(
      [
        "0x000000000000000000000000000000000000000000000000000000000000001cf3c2c204585cb7ddce26febf369cbbf5b127b01ac11d70f50df0b8e08b407a9673940f4604d29619c228e1c966b99a2c0327b29cfe23d9723308c7a6f85d912900000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002a0cebb707851d6109e2c8d02ecec78059552f2e08da243968ebf0793cea1d372e000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000444b9c93353c7379dfd80a18717a60fe42a028322a19a6476afe722055efb3335ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5b4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d3021ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba850000000000000000000000000000000000000000000000000000000000000004b6ac770f6865fe0a29a6cc9d40e33c321d826f98c712d4492df83774de9dbad5ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5b4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d3021ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba85",
      ],
      [
        "0x44b9c93353c7379dfd80a18717a60fe42a028322a19a6476afe722055efb333500000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000444b9c93353c7379dfd80a18717a60fe42a028322a19a6476afe722055efb3335ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5b4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d3021ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba85",
        "0x44b9c93353c7379dfd80a18717a60fe42a028322a19a6476afe722055efb333500000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000444b9c93353c7379dfd80a18717a60fe42a028322a19a6476afe722055efb3335ad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5b4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d3021ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba85",
      ]
    );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
