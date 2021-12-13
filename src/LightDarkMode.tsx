import React from 'react';

/**
 *
 * Build a simple app that allows the user to toggle light and dark mode as a react hook.
 *
 * Components will need a useMode() hook either 'light' or 'dark' so that they can change
 * their internal CSS.
 *
 * There should also be a way to useModeToggler() which returns a function that can be used
 * to toggle light or dark mode.
 *
 * The idea is that you have a way to globally mark the theme for the entire
 * app, then a hook that can be used to change the theme.
 *
 */
export const App = () => {

    return (
        <Main/>
    );

}

export type Theme = 'light' | 'dark';

export type UseThemeToggler = (theme: Theme) => void;

export type UseTheme = () => Theme;

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



