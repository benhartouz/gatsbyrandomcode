import React, { useContext, useEffect, useState } from "react";
import { ThreadInputContainer } from "../state";
import utf8 from "remark-utf8";
import remark from "remark";

const ThreadRender = () => {
    const { value } = useContext(ThreadInputContainer.Context);
    const [rendered, setRendered] = useState("");

    useEffect(() => {
        remark()
            .use(utf8)
            .process(value, (err, output) => {
                if (err) {
                    console.log(err);
                } else {
                    setRendered(output);
                }
            });
    }, [value]);

    return rendered;
};
export default ThreadRender;
