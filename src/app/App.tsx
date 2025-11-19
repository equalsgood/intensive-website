import React from 'react';
import classes from './App.module.css';
import { BrowserRouter } from "react-router";
import { AppRouter } from "./providers/AppRouter";

const App = () => {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;