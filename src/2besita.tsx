import Header from './components/head/Header';
import Intro from './pages/Intro';
import Projects from './pages/Projects';
// import About from './pages/About';

import { Routes, Route } from 'react-router-dom';

import './2besita.css';

export default function App() {
    return (
        <div className="container">
            <div className="header">
                <Header />
            </div>
            <div className="page">
                <Routes>
                    <Route path="/" element={<Intro />} />
                    <Route path="/projects" element={<Projects />} />
                    {/* <Route path="/about" element={<About />} /> */}
                </Routes>
            </div>
        </div>
    );
}
