import React from 'react'
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {assert} from 'chai';
import {useLocalStorageState} from "./UseLocalStorage";

type ButtonCheckStr = 'off' | 'on';

const LOCALSTORAGE_KEY = 'remember-password';

export const RememberPassword = () => {

    // TODO: change this to use useLocalStorageState
    const [value, setValue] = useLocalStorageState<ButtonCheckStr>(LOCALSTORAGE_KEY, 'off');

    return (
        <input type="checkbox"
               data-testid="checkbox"
               checked={value === 'on'}
               onChange={event => setValue(event.currentTarget.checked ? 'on' : 'off')}/>
    );

}

describe("UseLocalStorage", function() {

    afterEach(() => {
        localStorage.removeItem(LOCALSTORAGE_KEY);
    });

    it("Test with no localStorage value", async () => {

        render(<RememberPassword/>)

        const checkbox = screen.getByTestId('checkbox') as HTMLInputElement;

        assert.isFalse(checkbox.checked);

    });

    it("Test with pre-existing localStorage value", async () => {

        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify('on'));

        render(<RememberPassword/>)

        const checkbox = screen.getByTestId('checkbox') as HTMLInputElement;

        assert.isTrue(checkbox.checked);

    });

    it("No value in localStorage, click the button, then see if localStorage changed", async () => {

        assert.isNull(localStorage.getItem(LOCALSTORAGE_KEY));

        render(<RememberPassword/>)

        const checkbox = screen.getByTestId('checkbox') as HTMLInputElement;

        fireEvent.click(checkbox)

        assert.equal(localStorage.getItem(LOCALSTORAGE_KEY), "\"on\"");

    });

})
