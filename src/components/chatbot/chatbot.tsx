import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import steps from './chatSteps';
import './chatbot.css'


function MyChatbot() {

    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#fe653b',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#699e45',
        botFontColor: '#fff',
        userBubbleColor: '#044b4c',
        userFontColor: 'white',
        alignItems: "center"
    };

    return (

        <ThemeProvider theme={theme}>
            <ChatBot steps={steps} className="chat" />
        </ThemeProvider>
    )
}

export default MyChatbot;