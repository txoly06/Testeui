import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import './bootstrap';

// Configuração do CSS
import '../css/app.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);