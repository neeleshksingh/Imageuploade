import { BrowserRouter, Route, Routes } from "react-router-dom";
import Uplaod from "./components/upload";
import Display from "./components/display";



function App() {

  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Uplaod/>} />
        <Route path="/display" element={<Display/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
