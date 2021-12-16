import React from 'react'
import {fireEvent, render, screen, waitFor} from '@testing-library/react'

import {useLocalStorageState} from "./UseLocalStorage";

type ButtonCheckStr = 'off' | 'on';

export const RememberPassword = () => {

    // TODO: change this to use useLocalStorageState
    const [value, setValue] = useLocalStorageState<ButtonCheckStr>('remember-password', 'off');

    return (
        <input type="checkbox"
               value={value}
               onChange={event => setValue(event.currentTarget.checked ? 'on' : 'off')}/>
    );

}

describe("UseLocalStorage", function() {

    it("Test with no localStorage value", async () => {

        render(<RememberPassword/>)

        // fireEvent.click(screen.getByText('Click Me'))
        //
        // await waitFor(() => screen.getByText("The user clicked the button!"))

    });

})
