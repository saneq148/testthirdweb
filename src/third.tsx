import Inner from "./inner";
import { ThirdwebProvider } from "./thirdweb-provider";

const Third = () => {
  return (
    <ThirdwebProvider>
      <Inner />
    </ThirdwebProvider>
  );
};

export default Third;
