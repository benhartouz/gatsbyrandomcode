import React, { useContext, useEffect, useState } from "react";
import { ThreadInputContainer } from "../state";
import utf8 from "remark-utf8";
import remark from "remark";
import styled from "styled-components";

const TweetStyle = styled.div`
    font-size: 24px;
`;

const CharCountStyle = styled.div`
    font-size: 17px;
    text-align: center;
`;

const CharCount = ({ value }) => {
    return <CharCountStyle>{value.length}</CharCountStyle>;
};

const Tweet = ({ value }) => {
    const [rendered, setRendered] = useState("");
    useEffect(() => {
        remark()
            .use(utf8)
            .process(value, (err, output) => {
                if (err) {
                    console.log(err);
                } else {
                    setRendered(output.contents);
                }
            });
    }, [value]);
    return (
        <TweetStyle>
            {rendered}
            <CharCount value={rendered} />
        </TweetStyle>
    );
};

const ThreadRender = () => {
    const { value } = useContext(ThreadInputContainer.Context);
    return (
        <>
            {value.split("---").map(tweet => {
                return <Tweet value={tweet} />;
            })}
        </>
    );
};

export default ThreadRender;
