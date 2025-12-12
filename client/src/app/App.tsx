import React from 'react';
import { BrowserRouter } from "react-router";
import { AppRouter } from "./providers/AppRouter";
import './styles/index.css';
import { Footer, Header, ModalHandler } from "widgets";
import { ContextProvider } from "app/providers/ContextProvider";

const App = () => {
    return (
        <BrowserRouter>
            <ContextProvider>
                <div className="app light">
                    <Header/>
                    <AppRouter/>
                    <Footer/>
                    <ModalHandler/>
                </div>
            </ContextProvider>
        </BrowserRouter>
    );
};

export default App;