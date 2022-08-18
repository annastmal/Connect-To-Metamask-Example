import { utils } from "ethers";
import { Contract } from "@usedapp/core/node_modules/@ethersproject/contracts";
import { IERC20 } from "./abis/index";

const wethInterface = new utils.Interface(IERC20);
const wethContractAddress = "0x5711aCCC813db3E27091acD1cae9Cc483721717C";
const contract = new Contract(wethContractAddress, wethInterface);

export default contract;
