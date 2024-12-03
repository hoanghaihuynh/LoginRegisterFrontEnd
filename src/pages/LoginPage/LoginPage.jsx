import React, { useEffect, useState } from 'react';
import { WrapperContainer } from './style'
import { useNavigate } from 'react-router';
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import * as message from '../../components/Messages/Message';;

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const mutation = useMutationHooks(
    data => UserService.loginUser(data)
  )
  const { data, isPending, isSuccess} = mutation;
  useEffect(() => {
    if (isSuccess) {
      if (data?.status === "ERR") {
        message.error(data?.message || 'Đăng nhập không thành công, vui lòng thử lại.');
      }
      else {
        navigate('/home');
        message.success();
        console.log('data: ', data);
        localStorage.setItem('access_token', data?.access_token);
        localStorage.setItem('username', username);
      }
    }
  }, [isSuccess]);
  
  const handleOnChangesUsername = (value) => {
    setUsername(value);
  }

  const handleOnChangesPassword = (value) => {
    setPassword(value);
  }
  
  const handleRegister = () => {
    navigate('/register');
  }

  const handleLogin = () => {
    mutation.mutate({
      username,
      password
    })
    console.log('Login: ', username, password)
  }

  return (
    <div>
      <WrapperContainer>
          <form action="">
            <h1>Đăng Nhập</h1>
            <InputForm 
              type="text" 
              placeholder='Tên Đăng Nhập' 
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
              onClick={handleLogin} 
              border={false}
              size={40}
              styleButton={{
                background: '#1890ff',
                height: '48px',
                border: 'none',
                borderRadius: '4px',
                margin: '26px 0 0'
              }}
              textButton={'Đăng nhập'}
              styleTextButton={{color:'#fff', fontSize: '15px', fontWeight: '700'}}
              ></ButtonComponent>
            </LoadingComponent>
            <br />
            <p>Chưa có tài khoản <a href="#" onClick={handleRegister}> Đăng ký</a></p>
          </form>
      </WrapperContainer>
    </div>
  )
}

export default LoginPage
