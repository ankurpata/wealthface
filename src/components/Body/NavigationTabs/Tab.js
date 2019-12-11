import React, { useState } from "react";
import styled from 'styled-components'; 


const Tab = ({ label, onClick, activeTab }) => {

    const onClickTab = () => {
        onClick(label);
    }
    const TabListActive = styled.li`
        display: block;
        list-style: none;
        border: none;
        cursor:pointer;
        margin-bottom: 10px;
        padding: 0.5rem 0.75rem;
        background-color: white;
        color: #27b5d8;
        cursor: pointer;
    `;

    const TabListItem = styled.li`
        display: block;
        list-style: none;
        cursor:pointer;
        border: none;
        margin-bottom: 10px;
        padding: 0.5rem 0.75rem;
    `;

    return (
        (activeTab === label) ?
            <TabListActive
                onClick={onClickTab} >
                {label}
            </TabListActive> :
            <TabListItem
                onClick={onClickTab} >
                {label}
            </TabListItem> 
        );
}


export default Tab;