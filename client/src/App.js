import TextEditor from "./components/TextEditor";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// main componenet
function App() {
  return (
    <div className="App">
      <TextEditor />
    </div>
  );
}

export default App;
