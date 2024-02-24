import {IStudent, ITeacher} from "./adminSlice.type";


export const adminInitialState = {
    teachersData: [{
        id: 1,
        firstName: 'Иван',
        lastName: 'Иванов',
        university: 1,
        email: 'ivan.ivanov@example.com',
        gitHandler: 'gitHubUsername',
        password: 'password'
    },
        {
            id: 2,
            firstName: 'Анна',
            lastName: 'Петрова',
            university: 2,
            email: 'anna.petrova@example.com',
            gitHandler: 'gitHubUsername',
            password: 'password'
        },
        {
            id: 3,
            firstName: 'Сергей',
            lastName: 'Сидоров',
            university: 3,
            email: 'sergey.sidorov@example.com',
            gitHandler: 'gitHubUsername',
            password: 'password'
        },
        {
            id: 4,
            firstName: 'Мария',
            lastName: 'Иванова',
            university: 4,
            email: 'maria.ivanova@example.com',
            gitHandler: 'gitHubUsername',
            password: 'password'
        },
        {
            id: 5,
            firstName: 'Алексей',
            lastName: 'Смирнов',
            university: 5,
            email: 'alexey.smirnov@example.com',
            gitHandler: 'gitHubUsername',
            password: 'password'
        },
        {
            id: 6,
            firstName: 'Елена',
            lastName: 'Степанова',
            university: 6,
            email: 'elena.stepanova@example.com',
            gitHandler: 'gitHubUsername',
            password: 'password'
        },
        {
            id: 7,
            firstName: 'Николай',
            lastName: 'Соколов',
            university: 7,
            email: 'nikolay.sokolov@example.com',
            gitHandler: 'gitHubUsername',
            password: 'password'
        },
        {
            id: 8,
            firstName: 'Ольга',
            lastName: 'Кузнецова',
            university: 8,
            email: 'olga.kuznetsova@example.com',
            gitHandler: 'gitHubUsername',
            password: 'password'
        },
        {
            id: 9,
            firstName: 'Владимир',
            lastName: 'Белов',
            university: 9,
            email: 'vladimir.belov@example.com',
            gitHandler: 'gitHubUsername',
            password: 'password'
        },
        {
            id: 10,
            firstName: 'Татьяна',
            lastName: 'Михайлова',
            university: 10,
            email: 'tatiana.mihailova@example.com',
            gitHandler: 'gitHubUsername',
            password: 'password'
        }] as ITeacher[],

    studentsData: [{
        id: 1,
        firstName: 'Иван',
        lastName: 'Иванов',
        department: 'Информатика',
        group: 1,
        email: 'ivan.ivanov@example.com',
        gitHandle: 'gitHubUsername',
        password: 'password',
        university: 1
    },
        {
            id: 2,
            firstName: 'Анна',
            lastName: 'Петрова',
            department: 'Математика',
            group: 2,
            email: 'anna.petrova@example.com',
            gitHandle: 'gitHubUsername',
            password: 'password',
            university: 2
        },
        {
            id: 3,
            firstName: 'Сергей',
            lastName: 'Сидоров',
            department: 'Физика',
            group: 3,
            email: 'sergey.sidorov@example.com',
            gitHandle: 'gitHubUsername',
            password: 'password',
            university: 3
        },
        {
            id: 4,
            firstName: 'Мария',
            lastName: 'Иванова',
            department: 'Химия',
            group: 4,
            email: 'maria.ivanova@example.com',
            gitHandle: 'gitHubUsername',
            password: 'password',
            university: 4
        },
        {
            id: 5,
            firstName: 'Алексей',
            lastName: 'Смирнов',
            department: 'Биология',
            group: 5,
            email: 'alexey.smirnov@example.com',
            gitHandle: 'gitHubUsername',
            password: 'password',
            university: 5
        },
        {
            id: 6,
            firstName: 'Елена',
            lastName: 'Степанова',
            department: 'История',
            group: 6,
            email: 'elena.stepanova@example.com',
            gitHandle: 'gitHubUsername',
            password: 'password',
            university: 6
        },
        {
            id: 7,
            firstName: 'Николай',
            lastName: 'Соколов',
            department: 'Философия',
            group: 7,
            email: 'nikolay.sokolov@example.com',
            gitHandle: 'gitHubUsername',
            password: 'password',
            university: 7
        },
        {
            id: 8,
            firstName: 'Ольга',
            lastName: 'Кузнецова',
            department: 'Экономика',
            group: 8,
            email: 'olga.kuznetsova@example.com',
            gitHandle: 'gitHubUsername',
            password: 'password',
            university: 8
        },
        {
            id: 9,
            firstName: 'Владимир',
            lastName: 'Белов',
            department: 'Психология',
            group: 9,
            email: 'vladimir.belov@example.com',
            gitHandle: 'gitHubUsername',
            password: 'password',
            university: 9
        },
        {
            id: 10,
            firstName: 'Татьяна',
            lastName: 'Михайлова',
            department: 'Юриспруденция',
            group: 10,
            email: 'tatiana.mihailova@example.com',
            gitHandle: 'gitHubUsername',
            password: 'password',
            university: 10
        }] as IStudent[],
    coursesData: [
        {
            id: 1,
            name: 'Основы программирования',
            description: 'Курс для начинающих программистов',
            password: 'password',
            repository: 'https://github.com/course-repo',
            teachers: [1, 2]
        },
        {
            id: 2,
            name: 'Алгоритмы и структуры данных',
            description: 'Курс по изучению алгоритмов и структур данных',
            password: 'password',
            repository: 'https://github.com/course-repo',
            teachers: [3, 4]
        },
        {
            id: 3,
            name: 'Введение в веб-разработку',
            description: 'Курс по изучению основ веб-разработки',
            password: 'password',
            repository: 'https://github.com/course-repo',
            teachers: [5, 6]
        },
        {
            id: 4,
            name: 'Математический анализ',
            description: 'Курс по изучению основ математического анализа',
            password: 'password',
            repository: 'https://github.com/course-repo',
            teachers: [7, 8]
        },
        {
            id: 5,
            name: 'Теория вероятностей',
            description: 'Курс по изучению основ теории вероятностей',
            password: 'password',
            repository: 'https://github.com/course-repo',
            teachers: [9, 10]
        },
        {
            id: 6,
            name: 'Физика',
            description: 'Курс по изучению основ физики',
            password: 'password',
            repository: 'https://github.com/course-repo',
            teachers: [1, 2]
        },
        {
            id: 7,
            name: 'Химия',
            description: 'Курс по изучению основ химии',
            password: 'password',
            repository: 'https://github.com/course-repo',
            teachers: [3, 4]
        },
        {
            id: 8,
            name: 'Биология',
            description: 'Курс по изучению основ биологии',
            password: 'password',
            repository: 'https://github.com/course-repo',
            teachers: [5, 6]
        },
        {
            id: 9,
            name: 'История',
            description: 'Курс по изучению основ истории',
            password: 'password',
            repository: 'https://github.com/course-repo',
            teachers: [7, 8]
        },
        {
            id: 10,
            name: 'Философия',
            description: 'Курс по изучению основ философии',
            password: 'password',
            repository: 'https://github.com/course-repo',
            teachers: [9, 10]
        }
    ]
}