
import React from 'react';
import styled from 'styled-components';
 

const Home = ({ }) => {
    const Wrapper = styled.section`
        min-height: 500px;
        background: #f3f6f6bd;
        position: relative;
    `;
    return (
        <Wrapper >
            <div>
                Welcome to Home page.
            </div>
        </Wrapper>
    );

};

export default Home;
