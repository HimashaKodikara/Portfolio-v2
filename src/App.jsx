import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Router basename="/Portfolio-v2">
      <Routes>
        <Route
          path="/"
          element={<HomePage isDark={isDark} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/gallery"
          element={<GalleryPage isDark={isDark} toggleTheme={toggleTheme} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
