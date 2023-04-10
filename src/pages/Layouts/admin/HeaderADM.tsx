import React, { useState, useEffect } from "react";
import { MenuOutlined, HomeOutlined, LoginOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Button } from 'antd';
import { useNavigate } from "react-router-dom";

const HeaderADM = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token); // kiểm tra token có tồn tại hay không
    }, []);
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };
    const items: MenuProps['items'] = [
        {
            label: <a style={{ textDecoration: "none", display: 'flex' }} href="/"><HomeOutlined style={{ fontSize: 16, paddingTop: 3.5 }} /><span style={{ paddingLeft: 5 }}>Trang Chủ</span></a>,
            key: '0',
        },
        {
            label: <p style={{ textDecoration: 'none', display: 'flex' }}><LoginOutlined style={{ fontSize: 16, paddingTop: 3.5 }} /><span style={{ paddingLeft: 5 }}>
                {isLoggedIn && ( // hiển thị nút đăng xuất nếu đăng nhập
                    <span onClick={handleLogout}>
                        Đăng xuất
                    </span>
                )}
                {
                    !isLoggedIn && ( // hiển thị nút đăng nhập nếu chưa đăng nhập
                        <span onClick={() => navigate("/login")}>
                            Đăng nhập
                        </span>
                    )
                }
            </span></p>,
            key: '1',
        },
    ];
    return (
        <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    <MenuOutlined />
                </Space>
            </a>
        </Dropdown>
    );
}

export default HeaderADM;