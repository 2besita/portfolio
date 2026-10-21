import About from './pages/About';
import Intro from './pages/Intro';
import Projects from './pages/Projects';

import './2besita.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        </Routes>
        </BrowserRouter>
    );
}
