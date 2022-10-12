
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { About } from "./pages/About";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
