import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Blog from "./pages/Blog";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
