import React, { useState } from "react";
import styled from 'styled-components'; 
import Tab from "./Tab";

const Tabs = ({ children }) => {
    // React Hooks
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const onClickTabItem = tab => {
        setActiveTab(tab);
    };
    const TabbedContent = styled.section` 
       
        display: inline-block;
        min-height: 300px; 
        vertical-align:top
        text-align:left;
        width: 60%; 
        margin:0px 0 0 20px;
        background-color:white;
        border-radius:8px; 
    `;
    const TabListDiv = styled.section`
        display: inline-block;
        background-color: white;
        border-radius:8px;
        width: 25%;
        font-weight: bold;
        text-align: left;
        padding: 10px 0px 5px 20px;
        font-size: 12px;
        color: #737272;
    `;

    return (
        <div className="tabs">
            <TabListDiv>
                <ol className="tab-list">
                    {children.map(child => {
                        const { label } = child.props; 
                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>
            </TabListDiv>
            <TabbedContent>
                {children.map(child => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
            </TabbedContent>
        </div>
    );
};

export default Tabs;
