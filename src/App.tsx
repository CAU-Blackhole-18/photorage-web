import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "./components/organisms/layout/Header";
import Mainpage from "./pages/Mainpage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </>
  );
}

export default App;
