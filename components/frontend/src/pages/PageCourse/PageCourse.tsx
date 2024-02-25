import {Button, Divider, Input, Layout, List, Menu, MenuProps, Modal, theme, Typography} from "antd";
import {
    EditOutlined,
    EyeOutlined,
    FileOutlined,
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined
} from "@ant-design/icons";
import {createElement, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Content, Header} from "antd/es/layout/layout";
import {useAppDispatch} from "../../store/hooks";
import {checkCollaborator, getCurrentCourse, getStudentsForCourse, getTasksForCourse} from "../../store/app/requests";
import {useSelector} from "react-redux";
import {
    selectCurrentCourse, selectIsCorrectCollaborator, selectIsLoading,
    selectRole,
    selectStudentsForCourse,
    selectTasksForCourse,
    selectUserData
} from "../../store/app/selectors";
import styles from './PageCourse.module.scss'
import Sider from "antd/es/layout/Sider";
import {appActions} from "../../store/app/actions";
import {appRole} from "../../store/app/appSlice.type";

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
    const userData = useSelector(selectUserData)
    const userRole = useSelector(selectRole)
    const [isUsersModalOpen, setIsUsersModalOpen] = useState<boolean>(false)
    const [isOpenRegisterModal, setIsOpenRegisterModal] = useState<boolean>(false)
    const [coursePassword, setCoursePassword] = useState<string>('')
    const isLoading = useSelector(selectIsLoading)
    const isCorrectCollaborator = useSelector(selectIsCorrectCollaborator)


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

    const closeRegisterModal = () => {
        setCoursePassword('')
        setIsOpenRegisterModal(false)
    }

    const checkColaborator = ()=>{
        if(userData && id)
        dispatch(checkCollaborator({userId: userData.id, courseId: Number(id)}))
    }

    const subNavItems = [
        {
            key: 'people',
            icon: <UserOutlined/>,
            label: <Text onClick={openUsersModal}>Студенты</Text>,
        },
        userRole === appRole.TEACHER && {
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

    const getUserId = (): number | undefined => {
        if (userRole === appRole.STUDENT) {
            if (userData) {
                return userData.id
            }
        }
        return undefined
    }


    useEffect(() => {
        if (id) {
            dispatch(getCurrentCourse({courseId: Number(id), userId: getUserId(), role: userRole === appRole.STUDENT ? 's' : 't'}))
            dispatch(getTasksForCourse(Number(id)))
        }
    }, [id]);


    return <Layout style={{minHeight: '100vh', height: '100%'}}>

        <Modal title="Ученики на курсе" open={isUsersModalOpen} onOk={closeUsersModal} onCancel={closeUsersModal}>
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


        <Modal title="Записаться на курс" open={isOpenRegisterModal} onCancel={closeRegisterModal} footer={[
            <Button>Записаться</Button>
        ]} >
            <div className={styles.register_modal}>
                <div className={styles.item}>
                    <Input placeholder={'Пароль от курса'} onChange={(e)=>setCoursePassword((e.target.value))} value={coursePassword}></Input>

                </div>
                <div className={styles.item}>
                    <Button loading={isLoading} danger={!isCorrectCollaborator} disabled={isCorrectCollaborator} onClick={checkColaborator}>{isCorrectCollaborator ? 'OK' : 'Проверить контрибьютора'}</Button>
                </div>
            </div>
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
                        // @ts-ignore
                        items={subNavItems}
                    />
                </Sider>
                {!courseData && <div>NOT FOUND</div>}
                {courseData &&
                    <div className={styles.course_info}>

                        {
                            userRole === appRole.TEACHER && (
                                <div className={styles.actions}>
                                    <Button type="primary" size={"small"} shape={'circle'}
                                            disabled={true}><EditOutlined/></Button>
                                </div>
                            )

                        }

                        {

                            userRole === appRole.STUDENT && !courseData.isMy && (
                                <div className={styles.actions}>
                                    <Button type="primary" size={"small"} shape={'round'} onClick={()=>setIsOpenRegisterModal(true)}>Записаться</Button>
                                </div>
                            )
                        }

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
                                            avatar={<FileOutlined/>}
                                            title={<Link
                                                to={`/tasks/${item.id}`}>{item.name + ' ' + item.max_points + ' баллов'}</Link>}
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