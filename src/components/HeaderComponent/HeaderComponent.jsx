import React from 'react'
import {Col} from 'antd'
import {WrapperAcount, WrapperCart, WrapperHeader} from './style'
import { AudioOutlined } from '@ant-design/icons';
import {
    // HomeOutlined,
    // LoadingOutlined,
    // SettingFilled,
    // SmileOutlined,
    // SyncOutlined,
    UserOutlined,
    ShoppingCartOutlined
  } from '@ant-design/icons';
import ButtonSearch from '../ButtonSearch/ButtonSearch';


const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1677ff',
      }}
    />
  );

const HeaderComponent = () => {
  return (
    <div>
    <WrapperHeader>
      <Col style={{fontSize:'25px', color: '#fff'}} span={6}><a style={{color:'#fff'}} href="/">Logo</a></Col>
      <Col span={12}>
      <ButtonSearch
        textButton="Tìm"
        placeholder="Tìm kiếm sản phẩm"
        size="large"
        suffix={suffix}
    //   onSearch={onSearch}
    />
      </Col>
      <Col span={6} style={{display: 'flex', gap:'15px'}}>
      <WrapperAcount>
        <a style={{color:'#fff'}} href="/login"><UserOutlined style={{fontSize:'30px'}}/></a>
        <div>
            <span>Đăng nhập</span>
            <div>
            <span>Tài Khoản</span>
            </div>
        </div>
      </WrapperAcount>
      <WrapperCart>
        <ShoppingCartOutlined style={{fontSize:'30px'}} />
        <span>Giỏ hàng</span>
      </WrapperCart>
      
      </Col>
    </WrapperHeader>
    </div>
  )
}
export default HeaderComponent