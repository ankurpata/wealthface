
import React from 'react';
import styled from 'styled-components';
import Tabs from './NavigationTabs/Tabs';
import PrivacySection from './Sections/Privacy';

const Settings = ({ }) => {
    const Wrapper = styled.div`
        min-height: 500px;
        background: #f3f6f6bd;
        position: relative; 
    `;
    const HeadingDiv = styled.div`
        font-weight:bold;
        width: 30%;
        margin: 0 0 30px 40px;
        padding: 30px 0 0 0px;
        text-align: left;
    `;
    const StyledP = styled.p`padding:10px;text-align:center;font-weight:bold`;
    return (
        <Wrapper>
            <div>
                <HeadingDiv >
                    Settings
                </HeadingDiv>
                <Tabs>
                    <div label="Profile">
                        <StyledP>Profile Section!</StyledP>
                    </div>
                    <div label="Account Information">
                       <StyledP> Account Information Section!</StyledP>
                    </div>
                    <div label="Privacy & Security">
                        <PrivacySection />
                    </div>
                    <div label="Payment Details">
                       <StyledP> Payment Details Section!</StyledP>
                    </div>
                </Tabs>
            </div>
        </Wrapper>
    );

};

export default Settings;
