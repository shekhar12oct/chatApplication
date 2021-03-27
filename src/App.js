import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App=()=>
{
    if(!localStorage.getItem('username'))
    {
         return <LoginForm />
    }
    return(
    <ChatEngine
     height="100vh"
     projectID="bb09b46d-a654-48d3-ba32-629c976a3b22"
     userName={localStorage.getItem('username')}
     userSecret={localStorage.getItem('password')}
     renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
    );
}



export default App;