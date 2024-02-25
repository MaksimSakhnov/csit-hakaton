import {Button, Divider, Layout, List, Menu, MenuProps, Modal, theme, Typography} from "antd";
import {EditOutlined, EyeOutlined, FileOutlined, LaptopOutlined, NotificationOutlined, UserOutlined} from "@ant-design/icons";
import {createElement, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Content, Header} from "antd/es/layout/layout";
import {useAppDispatch} from "../../store/hooks";
import {getCurrentCourse, getStudentsForCourse, getTasksForCourse} from "../../store/app/requests";
import {useSelector} from "react-redux";
import {selectCurrentCourse, selectStudentsForCourse, selectTasksForCourse} from "../../store/app/selectors";
import styles from './PageCourse.module.scss'
import Sider from "antd/es/layout/Sider";
import {appActions} from "../../store/app/actions";

const {Title, Text} = Typography;


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

    const dispatch = useAppDispatch()
    const courseData = useSelector(selectCurrentCourse)
    const studentsData = useSelector(selectStudentsForCourse)
    const tasks = useSelector(selectTasksForCourse)
    const {id} = useParams();

    const [isUsersModalOpen, setIsUsersModalOpen] = useState<boolean>(false)

    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    const openUsersModal = () => {
        dispatch(getStudentsForCourse(Number(id)))
        setIsUsersModalOpen(true)
    }

    const closeUsersModal = () => {
        dispatch(appActions.setStudents(null))
        setIsUsersModalOpen(false)
    }

    const subNavItems = [
        {
            key: 'people',
            icon: <UserOutlined/>,
            label: <Text onClick={openUsersModal}>Студенты</Text>,
        },
        {
            key: 'attempts',
            icon: <EyeOutlined/>,
            label: 'Попытки'
        }
    ]

    const items1 = [
        {
            key: 'all',
            label: (<Link to={'/'} onClick={() => dispatch(appActions.setCourse(null))}>Назад</Link>),

        },

    ];


    useEffect(() => {
        if (id) {
            dispatch(getCurrentCourse(Number(id)))
            dispatch(getTasksForCourse(Number(id)))
        }
    }, [id]);

    return <Layout style={{minHeight: '100vh', height: '100%'}}>

        <Modal title="Basic Modal" open={isUsersModalOpen} onOk={closeUsersModal} onCancel={closeUsersModal}>
            <List
                itemLayout="horizontal"
                dataSource={studentsData ?? undefined}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.firstName + ' ' + item.lastName}
                            description={item.department + ' ' + item.group}
                        />
                    </List.Item>
                )}
            />
        </Modal>

        <Header style={{display: 'flex', alignItems: 'center'}}>
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
                            <Button type="primary" size={"small"} shape={'circle'}
                                    disabled={true}><EditOutlined/></Button>
                        </div>
                        <div className={styles.content}>
                            <Title>{courseData.name}</Title>
                            <Divider/>
                            <Text>{courseData.description}</Text><br/>
                            <Text>Пароль: {courseData.description}</Text><br/>
                            <Text>Репозиторий: {courseData.repository}</Text><br/>
                            <Divider>Задания</Divider>

                            <List
                                itemLayout="horizontal"
                                dataSource={tasks ?? undefined}
                                renderItem={(item) => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<FileOutlined />}
                                            title={<Link to={`/tasks/${item.id}`}>{item.name + ' ' + item.max_points + ' баллов'}</Link>}
                                            description={item.description.substring(0, 20) + '...'}
                                        />
                                    </List.Item>
                                )}
                            />

                        </div>
                    </div>


                }


            </Layout>
        </Content>

    </Layout>
}