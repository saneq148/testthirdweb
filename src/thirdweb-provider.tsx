"use-client";
import {
  ThirdwebProvider,
  coinbaseWallet,
  metamaskWallet,
  trustWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import { PropsWithChildren } from "react";

export const settings = {
  env: {
    PUBLIC_THIRDWEB_CLIENT_ID: "8ad5cc70482bcd8413d014514b78903",

    PORT: "3001",
    REACT_APP_ENV: "development",
    PUBLIC_ENVIRONMENT_TYPE: "development",
    PUBLIC_URL: "http://localhost:3001",
    PUBLIC_API_URL: "http://localhost:3000",
  },
};

const Component = (props: PropsWithChildren) => {
  return (
    <ThirdwebProvider // Required configuration for the provider, but doesn't affect Auth.
      activeChain="mumbai"
      clientId={settings.env.PUBLIC_THIRDWEB_CLIENT_ID}
      authConfig={{
        // Set this to your domain to prevent phishing attacks
        domain: settings.env.PUBLIC_API_URL,
        // The URL of your Auth API
        authUrl: new URL("/api/auth", settings.env.PUBLIC_API_URL).toString(),
      }}
      supportedWallets={[
        metamaskWallet({
          recommended: true,
        }),
        coinbaseWallet(),
        trustWallet(),
        walletConnect(),
      ]}
      {...props}
    />
  );
};

export { Component as ThirdwebProvider };
