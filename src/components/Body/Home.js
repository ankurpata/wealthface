
import React from 'react';
import styled from 'styled-components';
 

const Home = ({ }) => {
    const Wrapper = styled.section`
        min-height: 500px;
        background: #f3f6f6bd;
        position: relative;
    `;
    const Headline = styled.div`
        position: absolute;
        font-weight:bold;
        top: 50%;
        left: 50%;
        margin-top: -50px;
        margin-left: -50px;
    `;
    return (
        <Wrapper >
            <Headline>
                Welcome to Home page.
            </Headline>
        </Wrapper>
    );

};

export default Home;
