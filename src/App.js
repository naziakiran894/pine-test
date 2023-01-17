import { Provider } from "react-redux";
import "./App.css";
import Routing from "./component/Routes/Routing";
import { store } from "./Store/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routing />
      </div>
    </Provider>
  );
}

export default App;
