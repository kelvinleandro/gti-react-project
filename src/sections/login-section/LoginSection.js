import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiOutlineClose} from 'react-icons/ai'
import {FaFacebook, FaApple} from 'react-icons/fa'
import './LoginSection.css'

const LoginSection = ({visible, setVisible}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      {visible &&
        <div className='overlay'>
          <div className='login-section flex flex-col justify-center'>

              <div className='flex items-center justify-between'>
                <h3>Seja bem-vindo!</h3>
                <AiOutlineClose size={20} onClick={setVisible} className='hover:cursor-pointer' />
              </div>
            
              <form>
                  <label for='email'>E-MAIL</label>
                  <input type='email' id='email' name='email' 
                    placeholder='nome@email.com' 
                    onChange={e => setEmail(e.target.value)} 
                    value={email} />

                  <label for='email'>SENHA</label>
                  <input type='password' id='senha' name='senha' 
                    placeholder='Insira sua senha' 
                    onChange={e => setPassword(e.target.value)} 
                    value={password} />
              </form>
            
              <p className='login-link text-left mb-3'>esqueceu sua senha?</p>
              <button className='login1-btn'>Iniciar sessão</button>
              <p>ou</p>
            
              <div>
                <button className='login2-btn'><FcGoogle size={20} /> Continue com o Google</button>
                <button className='login2-btn'><FaFacebook size={20} color='#092BC1' /> Continue com o Facebook</button>
                <button className='login2-btn'><FaApple size={20} /> Continue com a conta da Apple</button>
              </div>

              <p>Novo na Casas Acre? <span className='login-link'>Criar uma conta</span></p>
          </div>
        </div>
      }
    </>
  )
}

export default LoginSection