import React, { useState, useEffect } from 'react';
import { WrapperContentProfile } from './style'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Upload,
} from 'antd';

const ProfilePage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [fullname, setFullname] = useState('');
  const handleOnChangesEmail = () => {

  };
  const handleOnChangesUsername = () => {

  };
  const handleOnChangesFullname = () => {

  };
  const handleOnChangesPassword = () => {

  };
  const handleOnChangesPhone = () => {

  };
  const handleOnChangesAddress= () => {

  };
  const handleUpdate = () => {

  }
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <div style={{ width:'100%', margin: '0 auto', height: '500px' }}>
        Thông tin người dùng
        <WrapperContentProfile>
            <Form.Item label="Họ và tên">
                <Input value={fullname} onChange={handleOnChangesFullname}/>
            </Form.Item>

            <Form.Item label="Username">
                <Input value={username} onChange={handleOnChangesUsername}/>
            </Form.Item>

            <Form.Item label="Email">
                <Input value={email} onChange={handleOnChangesEmail}/>
            </Form.Item>

            <Form.Item label="Mật khẩu">
                <Input value={password} onChange={handleOnChangesPassword}/>
            </Form.Item>

            <Form.Item label="Số điện thoại">
                <Input value={phone} onChange={handleOnChangesPhone}/>
            </Form.Item>

            <Form.Item label="Địa chỉ">
                <Input value={address} onChange={handleOnChangesAddress}/>
            </Form.Item>

            <Form.Item label="Ảnh đại diện" valuePropName="fileList" getValueFromEvent={normFile}>
                <Upload action="/upload.do" listType="picture-card">
                    <button style={{ border: 0, background: 'none' }} type="button">
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                    </button>
                </Upload>
            </Form.Item>

            <Form.Item>
                <ButtonComponent 
                    onClick={handleUpdate} 
                    border={false}
                    size={40}
                    styleButton={{
                        background: '#1890ff',
                        height: '48px',
                        border: 'none',
                        borderRadius: '4px',
                        margin: '26px 0 0'
                    }}
                    textButton={'Cập nhật'}
                    styleTextButton={{color:'#fff', fontSize: '15px', fontWeight: '700'}}
                ></ButtonComponent>
            </Form.Item>
        </WrapperContentProfile>

    </div>
  )
}

export default ProfilePage
