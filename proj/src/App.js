import "./App.css";
import Message from "./Message";
import RowsCols from './RowsCols';

function App() {
  return (
    <div className="App">
      <Message
        title="Matrix Row Reducer"
        instruction=""
      />
      <RowsCols/>
    </div>
  );
}

export default App;
