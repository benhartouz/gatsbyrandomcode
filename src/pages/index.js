import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import ThreadInput from "../components/ThreadInput";
import ThreadRender from "../components/ThreadRender";
import { ThreadInputContainer } from "../state";

const TowColumn = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-grap: 10px;
`;

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Write your best twitter thread</h1>
        <p>herr's how its work.</p>
        <ol>
            <li>write markdown</li>
            <li>
                sperate twitte with <code>--</code>
            </li>
            <li>preview your twitte</li>
            <li>click post</li>
        </ol>
        <ThreadInputContainer.Provider>
            <TowColumn>
                <div>
                    <div>Write markdown here:</div>
                    <ThreadInput />
                </div>
                <div>
                    <div>Your twitter thread:</div>
                    <ThreadRender />
                </div>
            </TowColumn>
        </ThreadInputContainer.Provider>
    </Layout>
);

export default IndexPage;
