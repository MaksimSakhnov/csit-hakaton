import {useState} from "react";
import {Button, Layout, Menu,} from "antd";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";
import TeachersTableContainer from "../../containers/TeachersTableContainer";
import {PageAdminContentEnum} from "./PageAdmin.type";
import {CreateTeacherModalContainer} from "../../containers/CreateTeacherModalContainer/CreateTeacherModalContainer";
import styles from './PageAdmin.module.scss'
import {PlusOutlined} from "@ant-design/icons";
import StudentsTableContainer from "../../containers/StudentsTableContainer";
import CreateStudentModalContainer from "../../containers/CreateStudentModalContainer";
import {CoursesTableContainer} from "../../containers/CoursesTableContainer/CoursesTableContainer";
import {CreateCourseModalContainer} from "../../containers/CreateCourseModalContainer/CreateCourseModalContainer";
import {useSelector} from "react-redux";
import {selectAdminData} from "../../store/admin/selectors";
import {useAppDispatch} from "../../store/hooks";
import {adminActions} from "../../store/admin/actions";
import {useNavigate} from "react-router-dom";


export function PageAdmin() {

    const dispatch = useAppDispatch()
    const adminData = useSelector(selectAdminData)

    const [currentTab, setCurrentTab] = useState<PageAdminContentEnum>(PageAdminContentEnum.TEACHERS)
    const [isModalOpen, setIsModalOpen] = useState<PageAdminContentEnum | null>(null)

    const closeWindow = () => {
        setIsModalOpen(null)
    }

    const exitFromAdmin = ()=>{
        dispatch(adminActions.setAdminData(null));
        localStorage.removeItem('adminData');


    }

    return (
        <Layout>
            <Sider theme={"light"} trigger={null}>
                <div className={styles.profile}>
                    <label>{adminData && (adminData.firstName + ' ' + adminData.lastName)}</label>
                    <Button onClick={exitFromAdmin}>Выйти</Button>
                </div>
                <Menu
                    theme="light"
                    mode="inline"
                    selectedKeys={[currentTab]}
                    onSelect={({key}) => {
                        setCurrentTab(key as PageAdminContentEnum)
                    }}
                    items={[
                        {
                            key: PageAdminContentEnum.TEACHERS,
                            label: 'Преподаватели',
                        },
                        {
                            key: PageAdminContentEnum.STUDENTS,
                            label: 'Студенты',
                        },
                        {
                            key: PageAdminContentEnum.COURSES,
                            label: 'Курсы',

                        },

                    ]}
                />
                {/*{adminData && (*/}

                {/*    <div className={styles.exit_block}>*/}
                {/*        <label>{adminData.firstName + ' ' + adminData.lastName}</label>*/}
                {/*        <Button>Выход</Button>*/}
                {/*    </div>*/}

                {/*)}*/}

            </Sider>
            <Layout className="site-layout">
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: '100vw',
                    }}
                >
                    <div className={styles.actions}>
                        <Button type="primary" shape="circle" icon={<PlusOutlined/>} size={'middle'}
                                onClick={() => setIsModalOpen(currentTab)}/>
                    </div>
                    {currentTab === PageAdminContentEnum.TEACHERS && <TeachersTableContainer/>}
                    {currentTab === PageAdminContentEnum.STUDENTS && <StudentsTableContainer/>}
                    {currentTab === PageAdminContentEnum.COURSES && <CoursesTableContainer/>}
                </Content>
            </Layout>

            <CreateTeacherModalContainer open={isModalOpen ? isModalOpen === PageAdminContentEnum.TEACHERS : false}
                                         closeWindow={closeWindow}/>

            <CreateStudentModalContainer open={isModalOpen ? isModalOpen === PageAdminContentEnum.STUDENTS : false}
                                         closeWindow={closeWindow}/>
            <CreateCourseModalContainer open={isModalOpen ? isModalOpen === PageAdminContentEnum.COURSES : false}
                                        closeWindow={closeWindow}/>
        </Layout>
    )
}