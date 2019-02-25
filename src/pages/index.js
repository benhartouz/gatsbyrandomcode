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

const Container = styled.div`
    margin: 10px;
`;

const H1 = styled.h1`
    font-size: 20px;
    display: block;
    font-weight: 700;
    font-family: monospace;
    text-transform: uppercase;
    margin: 0px 10px 10px 0px;
    text-decoration: underline;
    line-height: 10px;
    padding: 10px;
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
                <Container>
                    <H1>Write markdown here:</H1>
                    <ThreadInput />
                </Container>
                <Container>
                    <H1>Your twitter thread:</H1>
                    <ThreadRender />
                </Container>
            </TowColumn>
        </ThreadInputContainer.Provider>
    </Layout>
);

export default IndexPage;
