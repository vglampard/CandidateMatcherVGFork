import "./App.css";
import CandidateDisplay from "./components/CandidateDisplay/CandidateDisplay";
import Input from "./components/Input/Input";
export function App() {
  return <div className="bg-red-100 w-full h-100vh" >
    <Input/>
    <CandidateDisplay/>
  </div>;
}

export default App;
