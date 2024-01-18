import {
  ConnectWallet,
  metamaskWallet,
  useAddress,
  useAuth,
  useConnect,
  useConnectionStatus,
  useDisconnect,
  useLogout,
  useMetamask,
  useUser,
} from "@thirdweb-dev/react";
import { useEffect } from "react";

const Inner = () => {
  const thirdwebAuth = useAuth();
  const address = useAddress();
  const metamaskConfig = metamaskWallet();
  const connectionStatus = useConnectionStatus();
  const connect = useConnect();
  const { logout } = useLogout();
  const disconnect = useDisconnect();
  const { user, isLoggedIn } = useUser();

  const connectToMetamaskHandle = async () => {
    try {
      await connect(metamaskConfig);
    } catch (error) {
      disconnect;
    }
  };

  const signIn = async () => {
    const payload = {
      address: "0x33d8ef084BCe3c4E766dEe674bF4A2383C829e67",
      chainId: "1",
    };

    try {
      await fetch("http://localhost:3000/api/auth/payload", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error(error);
      disconnect;
    }
  };

  useEffect(() => {
    if (connectionStatus === "connected") {
      signIn();
    }
  }, [connectionStatus]);
  return (
    <div>
      <ConnectWallet />
      {isLoggedIn ? (
        <button onClick={() => logout()}>Logout</button>
      ) : address ? (
        <button onClick={signIn}>Login</button>
      ) : (
        <button onClick={() => connectToMetamaskHandle()}>Connect</button>
      )}
    </div>
  );
};

export default Inner;
