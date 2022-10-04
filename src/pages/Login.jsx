import React from 'react'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function login() {
  
  return (
    <div className='container'>

      <form>

        <h1>
          Welcome to Hermes
        </h1>

        <label for={'username'}>
          Username
        </label>
        <input type={'text'} placeholder={'Enter username'} name={'username'}>

        </input>

        <label for={'password'}>
          Password
        </label>
        <input type={'password'} placeholder={'Enter password'} name={'password'}>

        </input>

        <div className='flex'>
          <button>
            Login
          </button>

        </div>


      </form>
      <div className='chatbutton'>
        <button  style={{ width: '70px', height:'40px' }} onClick = {console.log('tesdd')}><ChatBubbleIcon style={{fontSize:'30px'}}/></button>
      </div>
    </div>

  )
}

export default login