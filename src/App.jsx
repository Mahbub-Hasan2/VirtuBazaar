import { Outlet } from "react-router";
import Layouts from "./layouts/Layouts";

function App() {
  return (
    <Layouts>
      <Outlet />
    </Layouts>
  );
}

export default App;
