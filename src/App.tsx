import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Prize from './pages/Prize';
import Merch from './pages/Merch';
import Contestants from "./pages/Contestants.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/prize" element={<Prize />} />
                <Route path="/merch" element={<Merch />} />
                <Route path="/contestants" element={<Contestants />} />
            </Routes>
        </Router>
    );
}

export default App;