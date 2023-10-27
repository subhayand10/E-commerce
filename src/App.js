import Register from "./components/Register";
// eslint-disable-next-line
import ipConfig from "./ipConfig.json";

export const config = {
   endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
};

function App() {
  return (
    <div className="App">
          <Register />
    </div>
  );
}

export default App;
