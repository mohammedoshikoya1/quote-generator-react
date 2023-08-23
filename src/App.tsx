import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    // This runs after the component mounts and on every render
    fetchAdvice();
  }, []); // Empty dependency array means it only runs on mount and unmount

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        const { advice } = data.slip;
        console.log(advice);
        setQuote(advice);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{quote}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
