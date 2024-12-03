import React, { useEffect, useState } from 'react'
import { WrapperContainer } from './style'
import { useNavigate } from 'react-router';
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import * as message from '../../components/Messages/Message';

const SigninPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const mutation = useMutationHooks(
    data => UserService.signinUser(data)
  )
  const { data, isPending, isSuccess, isError } = mutation;
  useEffect(() => {
    if (isSuccess) {
      message.success('Đăng ký thành công!');
      handleLogin();
    }
    else if (isError) {
      message.error('Đăng ký thất bại!');
    }
  }, [isSuccess, isError]);

  const handleOnChangesUsername = (value) => {
      setUsername(value);
  }

  const handleOnChangesPassword = (value) => {
    setPassword(value);
  }

  const handleRegister = (value) => {
    mutation.mutate({
      username,
      password
    })
    console.log('register: ', username, password)
  }
  
  const handleLogin = () => {
    navigate('/login');
  }
  return (
    <div>
      <WrapperContainer>
          <form action="">
            <h1>Đăng Ký</h1>
            <InputForm 
              type="text" 
              placeholder='Tên Đăng Ký' 
              value={username}
              handleOnChange={handleOnChangesUsername}
              required
            />
            <br />

            <InputForm 
              type="password" 
              placeholder='Mật khẩu' 
              value={password}
              handleOnChange={handleOnChangesPassword}
              required
            />
            <br />

            {data?.status === "ERR" && <span className="error-message">{data?.message}</span>}
            <LoadingComponent isLoading={isPending}>
              <ButtonComponent
              disabled={!username.length || !password.length}
              onClick={handleRegister} 
              border={false}
              size={40}
              styleButton={{
                background: 'rgb(255,57,69)',
                height: '48px',
                border: 'none',
                borderRadius: '4px',
                margin: '26px 0 0'
              }}
              textButton={'Đăng ký'}
              styleTextButton={{color:'#fff', fontSize: '15px', fontWeight: '700'}}
             ></ButtonComponent>
             </LoadingComponent>
            <p>Đã có tài khoản <a href="#" onClick={handleLogin}> Đăng nhập</a></p>
          </form>
      </WrapperContainer>
    </div>
  )
}

export default SigninPage