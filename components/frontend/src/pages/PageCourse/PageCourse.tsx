import {Button, Divider, Input, Layout, List, Menu, MenuProps, Modal, theme, Typography} from "antd";
import {
    ClockCircleTwoTone,
    EditOutlined,
    EyeOutlined,
    FileOutlined,
    LaptopOutlined,
    LockOutlined,
    NotificationOutlined,
    UserOutlined,
    WarningTwoTone
} from "@ant-design/icons";
import {createElement, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Content, Header} from "antd/es/layout/layout";
import {useAppDispatch} from "../../store/hooks";
import {checkCollaborator, getCurrentCourse, getStudentsForCourse, getTasksForCourse} from "../../store/app/requests";
import {useSelector} from "react-redux";
import {
    selectCurrentCourse,
    selectIsCorrectCollaborator,
    selectIsLoading,
    selectRole,
    selectStudentsForCourse,
    selectTasksForCourse,
    selectUserData
} from "../../store/app/selectors";
import styles from './PageCourse.module.scss'
import Sider from "antd/es/layout/Sider";
import {appActions} from "../../store/app/actions";
import {appRole, ITask} from "../../store/app/appSlice.type";
import TextArea from "antd/es/input/TextArea";

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


const patch = 'From 376a2c49f43a66d28bd576249ef7cbb7a92e1d07 Mon Sep 17 00:00:00 2001\n' +
    'From: testHakathon <161166494+testHakathon@users.noreply.github.com>\n' +
    'Date: Sun, 25 Feb 2024 09:50:47 +0300\n' +
    'Subject: [PATCH 1/3] changeLesson2\n' +
    '\n' +
    '---\n' +
    ' file.txt | 1 +\n' +
    ' 1 file changed, 1 insertion(+)\n' +
    '\n' +
    'diff --git a/file.txt b/file.txt\n' +
    'index f73f309..d8688a3 100644\n' +
    '--- a/file.txt\n' +
    '+++ b/file.txt\n' +
    '@@ -1 +1,2 @@\n' +
    ' file\n' +
    '+change lesson 2\n' +
    '\n' +
    'From fa9c8d0b3fdef7a156a05bfd82c2f84a7614338b Mon Sep 17 00:00:00 2001\n' +
    'From: testHakathon <161166494+testHakathon@users.noreply.github.com>\n' +
    'Date: Sun, 25 Feb 2024 10:42:12 +0300\n' +
    'Subject: [PATCH 2/3] Update file.txt\n' +
    '\n' +
    '---\n' +
    ' file.txt | 1 +\n' +
    ' 1 file changed, 1 insertion(+)\n' +
    '\n' +
    'diff --git a/file.txt b/file.txt\n' +
    'index d8688a3..a6fb1d1 100644\n' +
    '--- a/file.txt\n' +
    '+++ b/file.txt\n' +
    '@@ -1,2 +1,3 @@\n' +
    ' file\n' +
    ' change lesson 2\n' +
    '+change 2\n' +
    '\n' +
    'From 51bd71c2f308d76d96e6462cdacf8419bc696cb2 Mon Sep 17 00:00:00 2001\n' +
    'From: testHakathon <161166494+testHakathon@users.noreply.github.com>\n' +
    'Date: Sun, 25 Feb 2024 10:42:24 +0300\n' +
    'Subject: [PATCH 3/3] Update file.txt\n' +
    '\n' +
    '---\n' +
    ' file.txt | 1 +\n' +
    ' 1 file changed, 1 insertion(+)\n' +
    '\n' +
    'diff --git a/file.txt b/file.txt\n' +
    'index a6fb1d1..dccfe3b 100644\n' +
    '--- a/file.txt\n' +
    '+++ b/file.txt\n' +
    '@@ -1,3 +1,4 @@\n' +
    ' file\n' +
    ' change lesson 2\n' +
    ' change 2\n' +
    '+change 3'


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
    const [currentTask, setCurrentTask] = useState<ITask | null>(null)
    const [isOpenAModal, setIsOpenAModal] = useState<boolean>(false)
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

    const checkColaborator = () => {
        if (userData && id)
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
            label: <Text onClick={() => setIsOpenAModal(true)}>Попытки</Text>
        }
    ]

    const items1 = [
        {
            key: 'all',
            label: (<Link to={'/'} onClick={() => dispatch(appActions.setCourse(null))}>Назад</Link>),

        },

    ];

    const getUserId = (): number | undefined => {
        if (userData) {
            return userData.id
        }
        return undefined
    }


    useEffect(() => {
        if (id) {
            dispatch(getCurrentCourse({
                courseId: Number(id),
                userId: getUserId(),
                role: userRole === appRole.STUDENT ? 's' : 't'
            }))
            dispatch(getTasksForCourse(Number(id)))
        }
    }, [id]);


    return <Layout style={{minHeight: '100vh', height: '100%'}}>

        <Modal title="Попытки" open={isOpenAModal} onOk={() => setIsOpenAModal(false)}
               onCancel={() => setIsOpenAModal(false)}>
            <List
                itemLayout="horizontal"
                dataSource={[{id: 2, name: 'Исправил ошибки в задании', haash: 'Hnfw23'}, {
                    id: 1,
                    name: 'init',
                    haash: 'Kel798Sc'
                }]}
                renderItem={(item, index) => (
                    <List.Item actions={[index === 0 && <Button>Посмотреть различия</Button>]}>
                        <List.Item.Meta
                            title={item.name}
                            description={item.haash}

                        />
                    </List.Item>
                )}
            />
        </Modal>

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
        ]}>
            <div className={styles.register_modal}>
                <div className={styles.item}>
                    <Input placeholder={'Пароль от курса'} onChange={(e) => setCoursePassword((e.target.value))}
                           value={coursePassword}></Input>

                </div>
                <div className={styles.item}>
                    <Button loading={isLoading} danger={!isCorrectCollaborator} disabled={isCorrectCollaborator}
                            onClick={checkColaborator}>{isCorrectCollaborator ? 'OK' : 'Проверить контрибьютора'}</Button>
                </div>
            </div>
        </Modal>

        {currentTask && (
            <Modal title={currentTask.name} open={Boolean(currentTask)} onCancel={() => setCurrentTask(null)} footer={[
                <Button onClick={() => setCurrentTask(null)}>Закрыть</Button>
            ]} width={'50vw'}>
                <div className={styles.modal_task}>
                    <Text>Максимум баллов: {currentTask.max_points}</Text><br/>
                    <Text>Дата сдачи: {new Date(currentTask.due_date).toLocaleString()}</Text><br/>
                    <Text>{currentTask.description}</Text>
                    {userRole === appRole.STUDENT && (

                        <>
                            <Divider>История попыток</Divider>
                            <div className={styles.attemp}>
                                <div className={styles.status}>
                                    <label>Попытка №</label>
                                    <p>2</p>
                                </div>
                                <div className={styles.status}>
                                    <label>Статус</label>
                                    <p>Открыто <ClockCircleTwoTone twoToneColor={'green'}/></p>
                                </div>
                                <div className={styles.actions}>
                                    <Text type="secondary">Нажмите "Отправить", когда загрузите новую версию на
                                        гит</Text>
                                    <Button>Отправить</Button>
                                </div>
                            </div>

                            <Divider></Divider>

                            <div className={styles.attemp}>
                                <div className={styles.status}>
                                    <label>Попытка №</label>
                                    <p>1</p>
                                </div>
                                <div className={styles.status}>
                                    <label>Статус</label>
                                    <p>Переоткрыто <WarningTwoTone twoToneColor={'yellow'}/></p>
                                </div>
                                <TextArea disabled={true} rows={5} value={'Не работает'}/>
                            </div>
                        </>

                    )}

                </div>
            </Modal>

        )}


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
                                    <Button type="primary" size={"small"} shape={'round'}
                                            onClick={() => setIsOpenRegisterModal(true)}>Записаться</Button>
                                </div>
                            )
                        }

                        <div className={styles.content}>
                            <Title>{courseData.name}</Title>
                            <Divider/>
                            <Text>{courseData.description}</Text><br/>
                            <Text>Пароль: {courseData.description}</Text><br/>
                            <Text>Репозиторий: {courseData.repository}</Text><br/>
                            <Divider>
                                <>
                                    Задания
                                    {userRole === appRole.STUDENT && !courseData.isMy && <LockOutlined/>}
                                </>
                            </Divider>

                            <List
                                itemLayout="horizontal"
                                dataSource={(userRole === appRole.STUDENT && !courseData.isMy) ? undefined : (tasks ?? undefined)}
                                renderItem={(item) => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<FileOutlined/>}
                                            title={<div
                                                onClick={() => setCurrentTask(item)}>{item.name + ' ' + item.max_points + ' баллов'}</div>}
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