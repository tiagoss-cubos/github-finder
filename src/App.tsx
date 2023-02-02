import { Outlet } from "react-router-dom";
type Props = {};

const App = ({}: Props) => {
  return (
    <div>
      <h1>GitHub Finder</h1>
      <Outlet />
    </div>
  );
};

export default App;
