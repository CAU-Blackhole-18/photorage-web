import { Routes, Route } from "react-router-dom";
import { Header } from "./components/organisms/layout/Header";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
    </Routes>
  );
}

export default App;
