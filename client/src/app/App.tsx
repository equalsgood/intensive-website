import React from 'react';
import { BrowserRouter } from "react-router";
import { AppRouter } from "./providers/AppRouter";
import './styles/index.css';
import { Footer, Header, ModalHandler } from "widgets";
import { ContextProvider } from "app/providers/ContextProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
    return (
        <BrowserRouter>
            <HelmetProvider>
                <ErrorBoundary>
                    <ContextProvider>
                        <div className="app light">
                            <Header/>
                            <AppRouter/>
                            <Footer/>
                            <ModalHandler/>
                            <div className="tg-block"/>
                        </div>
                    </ContextProvider>
                </ErrorBoundary>
            </HelmetProvider>
        </BrowserRouter>
    );
};

export default App;