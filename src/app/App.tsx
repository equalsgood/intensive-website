import React from 'react';
import { BrowserRouter } from "react-router";
import { AppRouter } from "./providers/AppRouter";
import './styles/index.css';
import { Footer, Header } from "widgets";
import { ContextProvider } from "app/providers/ContextProvider";

const App = () => {
    return (
        <BrowserRouter>
            <ContextProvider>
                <div className="app light">
                    <Header/>
                    <AppRouter/>
                    <Footer/>
                </div>
            </ContextProvider>
        </BrowserRouter>
    );
};

export default App;