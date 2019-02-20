import React, { useState } from "react";
import { styled, Input } from "reakit";

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
    const [value, setValue] = useState("");
    return (
        <TextArea
            as="textarea"
            value={value}
            onChange={e => {
                setValue(e.target.value);
            }}
        />
    );
};

export default ThreadInput;
