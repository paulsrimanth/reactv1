import "./App.css";
import LoginForm from "./LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PowerPage from "./PowerPage";
function App() {
  return (
    <div>
      {/* <LoginForm></LoginForm> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginForm />} />
          <Route path="pp" element={<PowerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
