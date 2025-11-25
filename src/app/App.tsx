import React from 'react';
import { BrowserRouter } from "react-router";
import { AppRouter } from "./providers/AppRouter";
import './styles/index.css';
import { Header } from "widgets";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app light">
                {/*<Header/>*/}
                <AppRouter/>
            </div>
        </BrowserRouter>
    );
};

export default App;