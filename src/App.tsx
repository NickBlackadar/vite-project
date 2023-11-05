import Result from "./components/Result";
import "./App.css";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="bg-white max-w-[375px] text-center md:max-w-[768px] card">
      <Result />
      <Summary />
    </div>
  );
}

export default App;
