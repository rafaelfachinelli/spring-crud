<p align="center">
  <img alt="Spring Boot CRUD" src=".github/banner.svg" width="300px"/>
</p>

<p align="center"> 
  <img alt="Repository Size" src="https://img.shields.io/github/repo-size/rafaelfachinelli/spring-crud?color=3498db&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/rafaelfachinelli/spring-crud?color=3498db&style=for-the-badge">
  <a href="https://github.com/rafaelfachinelli">
    <img alt="Developed by Rafael Fachuinelli" src="https://img.shields.io/badge/Developer-Rafael_Fachinelli-%3498db?color=3498db&style=for-the-badge">
  </a>
  <img alt="Project License" src="https://img.shields.io/github/license/rafaelfachinelli/spring-crud?color=3498db&style=for-the-badge"/>
</p>

<p align="center">
 <a href="#eye_speech_bubble-preview">Preview</a> •
 <a href="#information_source-about">About</a> •
 <a href="#memo-tasks">Tasks</a> •
 <a href="#arrow_forward-run">Run</a> •
 <a href="#hammer_and_wrench-technologies">Technologies</a> •
 <a href="#boy-author">Author</a> •
 <a href="#balance_scale-license">License</a>
</p>

---
## :eye_speech_bubble: **Preview**

<div align="center">

### :desktop_computer: Computer
  
|Desktop|
|:---:|
|<kbd><img src=".github/previews/desktop_preview.gif" alt="Desktop"/></kbd>|

### :iphone: Responsive

|Tablet|
|:---:|
|<kbd><img src=".github/previews/tablet_preview.gif" alt="Tablet"/></kbd>|

</div>
  
---
## :information_source: About

System for data management through API, with the most recent technologies from 2021, front-end with React, back-end with Spring Boot and MySQL database.

---
## :memo: **Tasks**

<div align="center">
<details>
<summary>Click to View</summary>
  
<details>
<summary>:globe_with_meridians: Web</summary>

|State|Task|
|:---:|:---|
|:heavy_check_mark:|React app project structure|
|:heavy_check_mark:|Routes|
|:heavy_check_mark:|CSS Global style|
|:heavy_check_mark:|Navigator component|
|:heavy_check_mark:|Dashboard page|
|:heavy_check_mark:|List all users page|
|:heavy_check_mark:|API service|
|:heavy_check_mark:|UserCard component|
|:heavy_check_mark:|Input component|
|:heavy_check_mark:|Button component |
|:heavy_check_mark:|New user page|
|:x:|Upload photo|
|:heavy_check_mark:|Update user page|
|:heavy_check_mark:|CSS style pages|
|:x:|Full responsive|

</details>

<details>
<summary>:file_cabinet: Server</summary>

|State|Task|
|:---:|:---|
|:heavy_check_mark:|Spring server project structure|
|:heavy_check_mark:|User model|
|:heavy_check_mark:|User controller|
|:heavy_check_mark:|User repository|
|:heavy_check_mark:|Server properties|
|:heavy_check_mark:|Server dependencies|
|:heavy_check_mark:|Database test in MySQL|
|:heavy_check_mark:|MySQL user table|
|:heavy_check_mark:|CORS to localhost:3000|

</details>

</details>
</div>

---
## :arrow_forward: **Run**

To run the **web** project you need to download this repository, have the Node Package Manager ([`NPM`](https://www.npmjs.com/get-npm)) or the YARN Package Manager installed ([`YARN`](https://yarnpkg.com/getting-started)).

### :globe_with_meridians: **Web**

Open the command prompt in the project directory, open the [`web/`](web/) folder and execute the following commands:

<details>
  <summary><i>with <b>npm</b></i></summary>
  
  ```bash
  # Install dependencies
  $ npm install

  # Start development server
  $ npm start
  ```
  
</details>

<details>
  <summary><i>with <b>yarn</b></i></summary>
  
  ```bash
  # Install dependencies
  $ yarn

  # Start development server
  $ yarn start

  ```

</details>

> ⚠️ The development server will start on port:3000 - Access <http://localhost:3000>

### :file_cabinet: **Server**

You can use the IDE [`Spring Boot Tools`](https://spring.io/tools) to run the project, or install [`Maven`](https://maven.apache.org/download.cgi) and open the command prompt in the project directory, open the [`server/`](server/) folder and execute the following commands:

<details>
  <summary><i>with <b>Maven</b></i></summary>
  
  ```bash
  # Install dependencies
  $ mvn install

  # Start development server
  $ mvn spring-boot:run
  ```
  
</details>

> ⚠️ The development server will start on port:8080 - Access <http://localhost:8080>

<details>
<summary>:dizzy: <b>API Routes</b></summary>

<details>
<summary>[POST] <b>Create User</b></summary>
/api/users/create
</details>

<details>
<summary>[PUT] <b>Update User</b></summary>
/api/users/update/:id
</details>

<details>
<summary>[GET] <b>Get User</b></summary>
/api/users/view/:id
</details>
  
<details>
<summary>[GET] <b>Get All Users</b></summary>
/api/users/view
</details>

<details>
<summary>[DEL] <b>Delete User</b></summary>
/api/users/delete/:id
</details>

<details>
<summary>[DEL] <b>Delete All Users</b></summary>
/api/users/delete
</details>

</details>

---
## :hammer_and_wrench: **Technologies**

The following tools is used to build this project:

<div align="center">

|:globe_with_meridians: Web|:file_cabinet: Server|
|:---:|:---:|
|[HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5)|[JAVA](https://www.java.com)|
|[CSS3](https://www.w3schools.com/css/)|[Maven](https://maven.apache.org)|
|[TypeScript](https://www.typescriptlang.org)|[Spring Data JPA](https://spring.io/projects/spring-data-jpa)|
|[React](https://reactjs.org)|[Spring Tool Suite 4](https://spring.io/tools)|
|[React Router DOM](https://reactrouter.com/)|[Spring Boot](https://spring.io)|
|[Styled Components](https://styled-components.com)|[Hibernate](https://hibernate.org)|
|[Axios](https://github.com/axios/axios)||

</div>

---
## :boy: **Author**

<div align="center">

<a href="https://github.com/rafaelfachinelli">
 <img src="https://github.com/rafaelfachinelli.png" width="100px;" alt="Profile Photo Rafael Fachinelli"/>
 <br/>
 <sub><b>Rafael Fachinelli</b></sub>
</a>

Developed with ❤️ by Rafael Fachinelli 👋🏽 Contact me!

[![Linkedin Badge](https://img.shields.io/badge/-Rafael_Fachinelli-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/rafaelfachinelli)
[![Github Badge](https://img.shields.io/badge/-rafaelfachinelli-000?style=flat-square&logo=Github&logoColor=white)](https://github.com/rafaelfachinelli)
[![Outlook Badge](https://img.shields.io/badge/-rafael.fachinelli@fatec.sp.gov.br-0078d4?style=flat-square&logo=microsoft-outlook&logoColor=white)](mailto:rafael.fachinelli@fatec.sp.gov.br)

</div>

---
## :balance_scale: **License**

<div align="center">
  
[![License](https://github.com/rafaelfachinelli/rafaelfachinelli/blob/master/.github/license.svg)](./LICENSE)

</div>
