import React, { useContext } from "react";

import { ThreadInputContainer } from "../state";

const ThreadRender = () => {
    const { value } = useContext(ThreadInputContainer.Context);
    console.log(value);
    return value;
};
export default ThreadRender;
