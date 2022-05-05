import "./App.css";
import Message from "./Message";
import Input from "./Input";

function App() {
  return (
    <div className="App">
      {/* message goes here */}
      <Message
        title="Matrix Row Reducer"
        instruction="Enter the number of rows and columns."
      />
      <Input dst='matrix'/>
    </div>
  );
}

export default App;
