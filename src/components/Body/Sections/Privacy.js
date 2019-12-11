
import React, { useState } from "react";
import styled, {keyframes}  from 'styled-components';

const InputPassword = styled.input.attrs({ type: 'password' })`
    width: 100%;
    padding: 12px 20px;
    margin: 0px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size:12px; 
`;
const Wrapper = styled.section`   
`;
const Content = styled.div`
    padding: 20px 0px 20px 40px;
    color: #212020;
    font-size: 18px;
    font-weight: bold; 
    
`;
const Heading = styled.div`
    padding: 20px 0px 20px 40px;
    background-color: #27b5d8;
    color: white;   
    font-size: 14px;
    font-weight: bold;
    border-radius: 10px 10px 0px 0px;
`;
const SubHeading = styled.p`margin-top:20px;`;
const InputGroup = styled.div`font-size:12px;margin-top:10px;padding: 0px 30px 0px 0px;`;
const Label = styled.p`font-size:12px;margin-top:20px;`;

const Button = styled.button`
    background-color: #bfbbbb;
    color:white;
    font-size: 12px;
    font-weight:bold;
    margin: 2.5em 0 2.5em 0;
    padding: 1em 5em;     
    border: 2px solid #bfbbbb;
    border-radius: 3px;
`;

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;
const DotWrapper = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    display: flex;
    align-items: flex-end;
`;
const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;


const Privacy = ({ }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [currPassword, setCurrPassword] = useState('');
    const [loader, setLoader] = useState(false);


    const handleSubmit = async () => {
        setLoader(true);
        console.log('button clicked', newPassword, confirmPassword)
        //Check if passwords match.
        if (newPassword !== confirmPassword) {
            setLoader(false);
            alert("Passwords do not match.");
            return;
        }
        //Check if pwd length > 10
        if (newPassword.length < 10) {
            setLoader(false);
            alert("Passwords length must be more than atleast 10 characters.");
            return;
        }
        //Check if it contains special charcters.
        let specialChrRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!specialChrRegex.test(newPassword)) {
            setLoader(false);
            alert("Password must contain Upper Letters, Lower Letters, Numbers and special characters.");
            return;
        }

        //Making an fake ajax call
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let responseJson = await response.json();
        console.log(responseJson, 'json');
        setLoader(false);
        alert("Changes saved successfully.");
    }

    return (
        <Wrapper >
            <Heading>
                Privacy & Security
            </Heading>
            <Content>
                {loader && <DotWrapper>
                    <Dot delay="0s" />
                    <Dot delay=".1s" />
                    <Dot delay=".2s" />
                </DotWrapper>}
                <SubHeading>Password</SubHeading>
                <InputGroup>
                    <Label>Current Password</Label>
                    <InputPassword key={1} value={currPassword} onChange={(e) => setCurrPassword(e.target.value)}></InputPassword>
                </InputGroup>
                <InputGroup>
                    <Label>New Password</Label>
                    <InputPassword key={2} value={newPassword} onChange={(e) => setNewPassword(e.target.value)}></InputPassword>
                </InputGroup>
                <InputGroup>
                    <Label>Confirm Password</Label>
                    <InputPassword key={3} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></InputPassword>
                </InputGroup>
                <Button onClick={handleSubmit} primary="#bfbbbb">Update</Button>
            </Content>
        </Wrapper>
    );

};

export default Privacy;
