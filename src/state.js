import React, { useState } from "react";
import createContainer from "constate";

export const updateInput = () => {
    const [value, setValue] = useState("");
    const update = event => { setValue(event.target.value) }
    return { value , update}
};

const ThreadInputContainer = createContainer(updateInput);

export { ThreadInputContainer} ;
