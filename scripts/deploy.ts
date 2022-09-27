import { ethers } from "hardhat";
import { Market, MIDI } from "../typechain-types";

async function main() {
  const MIDI = await ethers.getContractFactory("MIDI");
  const midi = (await MIDI.deploy()) as MIDI;
  await midi.deployed();

  console.log("address is: ", midi.address);

  const Market = await ethers.getContractFactory("Market");
  const market = (await Market.deploy(midi.address)) as Market;
  await market.deployed();

  console.log("market address is: ", market.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x32CF292cD6ebE04158745befFfDf774758E57EB5

// 0x48F5Ec0732c00054BbDcF95D78EE1e6b353665E2
