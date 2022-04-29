import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Matrix row reducer:</h1>
      <h2>Enter # of rows and cols:</h2>
      <form action="matrix" method="post">
        rows:{" "}
        <input
          type="number"
          name="rows"
          value=""
          autofocus="autofocus"
          required
        ></input>
        <br></br>
        cols:{" "}
        <input type="number" name="cols" value="" tabindex="0" required></input>
        <br></br>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}

export default App;
