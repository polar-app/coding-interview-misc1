import React from 'react';
import { useLocalStorageState } from './UseLocalStorage';

export const App = () => {

    return (
        <Main/>
    );

}


export const Main = () => {

    return (
        <div>
            <Settings/>
        </div>
    );

}

export const Settings = () => {

    const [mode, setMode] = useLocalStorageState();
    const toggleMode = React.useCallback(() => {
        setMode('')
    }, []);

    return (
        <button onClick={toggleMode}>toggle light/dark mode</button>
    );

}



