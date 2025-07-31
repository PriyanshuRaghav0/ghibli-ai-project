// src/components/Navbar.jsx
import React from 'react';

function Navbar() {
    return (
        <div className="d-flex justify-content-center">
            <nav
                className="navbar navbar-expand-lg navbar-light shadow-sm rounded-pill w-75 mt-3 border border-dark"
                style={{ backgroundColor: '#F3E2D4' }}
            >
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#">Ghibli.ai</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link fw-bolder" href="#">Tools</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bolder" href="#">Resources</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bolder" href="#">API</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bolder" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
