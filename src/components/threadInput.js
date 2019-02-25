import React, { useState, useContext } from "react";
import { styled, Input } from "reakit";

import { ThreadInputContainer } from "../state";

const TextArea = styled(Input)`
    width: 100%;
    min-height: 400px;
    background: #f7f7f7;
    color: #1f1f1f;
    font-family: monospace;
    font-size: 1.4em;
    padding: 0.5;
`;

const ThreadInput = () => {
    const { update, value } = useContext(ThreadInputContainer.Context);
    return <TextArea as="textarea" value={value} onChange={update} />;
};

export default ThreadInput;
