import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Layout, List, Menu, theme} from 'antd';
import {createElement, useEffect, useState} from "react";
import {useAppDispatch} from "../../store/hooks";
import {getCourses} from "../../store/app/requests";
import {useSelector} from "react-redux";
import {selectCourses} from "../../store/app/selectors";
import { Link } from 'react-router-dom';

const {Header, Content, Footer, Sider} = Layout;

const items1: MenuProps['items'] = [
    {
        key: 'all',
        label: 'Все курсы'
    },
    {
        key: 'my',
        label: 'Мои курсы',
    }
];

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);

export function PageMain() {

    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    const dispatch = useAppDispatch()
    const coursesData = useSelector(selectCourses)

    const [page, setPage] = useState<'all' | 'my'>('all');

    useEffect(() => {
        if (page === 'all'){
            dispatch(getCourses())
        }
    }, [page]);


    return <Layout style={{minHeight: '100vh', height: '100%'}}>
        <Header style={{display: 'flex', alignItems: 'center'}}>
            <div className="demo-logo"/>
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[page]}
                onSelect={({key})=> setPage(key as 'all' | 'my')}
                items={items1}
                style={{flex: 1, minWidth: 0}}
            />
        </Header>
        <Content style={{padding: '0 48px'}}>

            <Layout
                style={{padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG, height: '100%'}}
            >
                {/*<Sider style={{background: colorBgContainer}} width={200}>*/}
                {/*    <Menu*/}
                {/*        mode="inline"*/}
                {/*        defaultSelectedKeys={['1']}*/}
                {/*        defaultOpenKeys={['sub1']}*/}
                {/*        style={{height: '100%'}}*/}
                {/*        items={items2}*/}
                {/*    />*/}
                {/*</Sider>*/}
                <Content style={{padding: '0 24px', minHeight: 280}}>
                    <List
                        itemLayout="horizontal"
                        dataSource={coursesData}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<Link to={`/courses/${item.id}`}>{item.name}</Link>}
                                    description={item.description}
                                />
                            </List.Item>
                        )}
                    />
                </Content>
            </Layout>
        </Content>

    </Layout>
}