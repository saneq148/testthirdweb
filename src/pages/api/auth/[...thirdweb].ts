import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  domain: "htpp://localhost:3001",
  wallet: new PrivateKeyWallet(
    "eeb7ec43e6b13bff10c6016693b0a121fcad8caaa4e9d1d666a90706669cc1b2"
  ),
});

export default ThirdwebAuthHandler();
