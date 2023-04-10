import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
type Props = {}

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
  href?: string,

): MenuItem {
  const itemProps: MenuItem = {
    key,
    icon,
    children,
    label,
    type,
  };
  if (href) {
    itemProps.label = (
      <a style={{textDecoration: 'none'}} href={href}>
        <span>{label}</span>
      </a>
    );
  } else {
    itemProps.label = (
      <>
        <span>{label}</span>
      </>
    );
  }
  return itemProps;
}

const items: MenuItem[] = [
  getItem('Home', '1', <PieChartOutlined />, undefined, undefined, '/admin'),
  getItem('Blog', '2', <DesktopOutlined />),
  getItem('Contact', '3', <ContainerOutlined />),

  getItem('Products', 'sub3', <MailOutlined />, [
    getItem('All Product', '5', null, undefined, undefined, '/admin/products'),
    getItem('Add Product', '6', null, undefined, undefined, '/admin/products/add'),
  ]),

  getItem('Categories', 'sub2', <AppstoreOutlined />, [
    getItem('All Categories', '9', null, undefined, undefined, '/admin/categories'),
    getItem('Add Categories', '10', null, undefined, undefined, '/admin/categories/add'),

    // getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];

const MenuAdmin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ width: 256 }}>
      <Menu
        style={{
          height: 500
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
}



export default MenuAdmin;