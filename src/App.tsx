import { useContractFunction, useEtherBalance, useEthers } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import contract from "./contract";
import { parseEther } from "ethers/lib/utils";
import { useState } from "react";

function App() {
  const { account, deactivate, activateBrowserWallet } = useEthers();
  const { send } = useContractFunction(contract, "transfer");
  const etherBalance = useEtherBalance(account);
  const address = "0x165CD37b4C644C2921454429E7F9358d18A45e14";
  const [transferAmount, setTransferAmount] = useState("10");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        marginTop: "50px",
      }}
    >
      {!account && (
        <button onClick={() => activateBrowserWallet()}>Connect</button>
      )}
      {account && <button onClick={() => deactivate()}>Disconnect</button>}
      {account && (
        <button onClick={() => send(address, parseEther(transferAmount))}>
          Donate to Ukraine
        </button>
      )}
      {account && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "25%",
          }}
        >
          <input
            placeholder="Enter the amount you want to donate"
            onChange={(e) => setTransferAmount(e.target.value)}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
            }}
          />
        </div>
      )}
      {etherBalance && (
        <div className="balance">
          <br />
          Balance:
          <p className="bold">{formatEther(etherBalance)}</p>
        </div>
      )}
    </div>
  );
}
export default App;
