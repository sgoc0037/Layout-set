import React, { useState } from "react"

export function useInput() {

    const [value, setValue] = useState<string>('');

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    return { value, changeHandler };
}