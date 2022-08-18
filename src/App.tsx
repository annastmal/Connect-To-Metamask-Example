import { useEtherBalance, useEthers } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

function App() {
  const { account, deactivate, activateBrowserWallet } = useEthers();
  const etherBalance = useEtherBalance(account);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!account && (
        <button onClick={() => activateBrowserWallet()}>Connect</button>
      )}
      {account && <button onClick={() => deactivate()}>Disconnect</button>}
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
