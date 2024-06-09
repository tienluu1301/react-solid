import "./App.css";

import { SRP_ADVANCED } from "./advanced/SRP";
import { OCP_ADVANCED } from "./advanced/OCP";
import { LSP_ADVANCED } from "./advanced/LSP";
import { ISP_ADVANCED } from "./advanced/ISP";
import { DIP_ADVANCED } from "./advanced/DIP";

function App() {
  return (

    <div className="flex min-w-full h-full justify-center items-center p-8">
      {/* <SRP_ADVANCED /> */}
      {/* <OCP_ADVANCED /> */}
      {/* <LSP_ADVANCED /> */}
      {/* <ISP_ADVANCED /> */}
      <DIP_ADVANCED />
    </div>
  );
}

export default App;
