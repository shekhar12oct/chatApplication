import React from 'react';
import {useState} from 'react';
import axios from 'axios';

const LoginForm=()=>
{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const handleSubmit= async (e)=>
    {
       e.preventDefault();
       //username and password ==> chatEngine to give --> messages
       // works out ---logged in
       // not works --- error then message try with new credentials.

       const authObject={'Project-ID': "bb09b46d-a654-48d3-ba32-629c976a3b22",
    
                            'User-Name':username,
                            'User-Secret':password  
                       }
      try{
          await  axios.get('https://api.chatengine.io/chats',
          {headers:authObject}
          )
          localStorage.setItem('username',username);
          localStorage.setItem('password',password);

          window.location.reload();
      }
      catch(error)
      {
          setError('Oops , incorrect credentials..')

      }

    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="input" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                    <input type="password" className="input" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <div align="center">
                    <button type="submit" className="button">
                        <span> Start Chatting</span>
                    </button>
                </div>
                <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );
}

    
export default LoginForm;