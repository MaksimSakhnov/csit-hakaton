Руководство по запуску проекта.

БЭКЭНД РАЗВЕРНУТЬ НА УДАЛЕННОМ СЕРВЕРЕ

МОЖНО ВЫПОЛНИТЬ ТОЛЬКО ПУКНТ 4


1. Перед запуском проекта убедитесь, что на вашем компьютере установлен node.js. Сделать это можно с помощью терминала и команды "node --version".
Последнюю версию node.js можно установить с официаольного сайта https://nodejs.org.

2. Необходимо клонировать репозиторий в локальную папку.

3. Для запуска базы данных перейдите в папку /components/backend/ и воспользуйтесь командой "docker-compose up -d --build". Для использования данной команды необходимо, чтобы на вашем компьютере был установлен Docker.
Установить Docker можно с официального сайта https://www.docker.com.

4. Запуск клиента (frontend):

   4.1. Перейдите в папку /components/frontend

   4.2. Установите необходимые библиотеки с помощью команды в терминале "yarn install"

   4.3. Воспользуйтесь командой "yarn vite", чтобы запустить frontend на локальном сервере localhost:5173

   4.4. Откройте в браузере страницу http://localhost:5173/

5. Запуск сервера (backend):

   5.1. Перейдите в папку /components/backend

   5.2. Установите необходимые библиотеки с помощью команды в терминале "npm install"

   5.3. Воспользуйтесь командой "npm run start:dev", чтобы запустить backend на локальном сервере localhost:3000

   5.4. После появления в консоли записи "Nest application successfully started" сервер будет считаться успешно запущенным, после чего можно пользоваться приложением.

6. После запуска сервера можно авторизоваться через фронтенд как администратор по пути "/admin".
   
   Логин: spychy@ya.ru
   
   Пароль: password
7. Креды для авторизации на основном сайте по пути '':
   Студент: danko@example.com "password"
   Преподаватель: mamonovsv@example.com "password"
   
