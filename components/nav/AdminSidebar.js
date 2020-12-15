import React from 'react';
import { Layout, Menu } from 'antd';
import Link from 'next/link';

function AdminSidebar() {
	return <Layout.Sider className="sidebar" breakpoint={'lg'} theme="light" collapsedWidth={0} trigger={null} />;
}

export default AdminSidebar;
