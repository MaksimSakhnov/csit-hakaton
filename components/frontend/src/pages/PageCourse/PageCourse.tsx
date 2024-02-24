import {Button, Divider, Layout, Menu, MenuProps, theme, Typography} from "antd";
import {EditOutlined, EyeOutlined, LaptopOutlined, NotificationOutlined, UserOutlined} from "@ant-design/icons";
import {createElement, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {Content, Header} from "antd/es/layout/layout";
import {useAppDispatch} from "../../store/hooks";
import {getCurrentCourse} from "../../store/app/requests";
import {useSelector} from "react-redux";
import {selectCurrentCourse} from "../../store/app/selectors";
import styles from './PageCourse.module.scss'
import Sider from "antd/es/layout/Sider";

const {Title, Text} = Typography;


const items1 = [
    {
        key: 'all',
        label: (<Link to={'/'}>Назад</Link>),

    },

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


export function PageCourse() {

    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    const subNavItems = [
        {
            key: 'people',
            icon: <UserOutlined/>,
            label: 'Пользователи'
        },
        {
            key: 'attempts',
            icon: <EyeOutlined/>,
            label: 'Попытки'
        }
    ]

    const dispatch = useAppDispatch()
    const courseData = useSelector(selectCurrentCourse)
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            dispatch(getCurrentCourse(Number(id)))
        }
    }, [id]);

    return <Layout style={{minHeight: '100vh', height: '100%'}}>
        <Header style={{display: 'flex', alignItems: 'center'}}>
            <div className="demo-logo"/>
            <Menu
                theme="dark"
                mode="horizontal"
                items={items1}
                style={{flex: 1, minWidth: 0}}
            />
        </Header>
        <Content style={{padding: '0 48px'}}>

            <Layout
                style={{padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG, height: '100%'}}
            >
                <Sider style={{background: colorBgContainer}} width={200}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%'}}
                        items={subNavItems}
                    />
                </Sider>
                {!courseData && <div>NOT FOUND</div>}
                {courseData &&
                    <div className={styles.course_info}>
                        <div className={styles.actions}>
                            <Button type="primary" size={"small"} shape={'circle'} disabled={true}><EditOutlined/></Button>
                        </div>
                        <div className={styles.content}>
                            <Title>{courseData.name}</Title>
                            <Divider />
                            <Text>{courseData.description}</Text><br/>
                            <Text>Пароль: {courseData.description}</Text><br/>
                            <Text>Репозиторий: {courseData.repository}</Text><br/>
                            <Divider >Задания</Divider>

                        </div>
                    </div>


                }


            </Layout>
        </Content>

    </Layout>
}