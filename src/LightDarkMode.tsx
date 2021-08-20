import React from 'react';

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

    const toggleMode = React.useCallback(() => {

    }, []);

    return (
        <button onClick={toggleMode}>toggle light/dark mode</button>
    );

}



