import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { UserProvider } from './context/UserContext';
import { BrowserRouter } from 'react-router-dom';
import { SessionProvider } from './context/SessionContext';
import { ProfileProvider } from './context/ProfileContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <UserProvider >
            <SessionProvider >
                <ProfileProvider>
                    <App />
                </ProfileProvider>
            </SessionProvider>
        </UserProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

