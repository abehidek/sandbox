<h1 align="center">NPS-NLW</h1>

<p align="center">
  <a href="#-Tecnologies">Tecnologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-diagram">Diagram</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-How-do-i-install">How do i install</a>&nbsp;&nbsp;&nbsp;
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=NLW&message=04&color=8257E5&labelColor=000000" alt="NLW 04" />
  <br><br>
  <a href="https://github.com/rocketseat-education/nlw-04-nodejs">Go to Original Repository</a>
</p>
<br>
<p align="center">
  <img alt="Happy" src=".github/preview.png" width="100%">
</p>

## 🔧 Main tools and tecnologies used in the project

- [TypeScript](https://www.typescriptlang.org/)
- [Ethereal-Email](https://ethereal.email/)
- [TypeORM](https://typeorm.io/#/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)
- [Nodemailer](https://nodemailer.com)
- [Handlebars](https://handlebarsjs.com/)
- [Insomnia](https://insomnia.rest/)
- [Beekeeper](https://www.beekeeperstudio.io/)
- [SQLite](https://www.sqlite.org/index.html)

## 💻 About the project

This project is an application that consist in calculating the NPS (Net Promoter Score), We can register users and surveys, send emails for the users to take theses surveys and with that calculate the NPS.

This was developed in NLW#4 (Next Level Week Edition 4) from Rocketseat, in node.js trail. Here is the <strong>General contents of all class of NLW#04:</strong>

<details><summary><b>Day 1</b></summary>

- What is an API
- Introduction to Node.js
- Advantages of typescript
- Initial Code

</details>

<details><summary><b>Day 2</b></summary>

- Database configuration (SQLite)
- Initial Migrations and Models configurations
- First table (user)
- Introduction to business rules
- Creation of UserController.ts
- First endpoint

</details>

<details><summary><b>Day 3</b></summary>

- Introduction to repositories
- Basic concepts of automated tests

</details>

<details><summary><b>Day 4</b></summary>

- Sending emails through Nodemailer
- E-mail templates with Handlebars 
- Handling enviroment variables

</details>

<details><summary><b>Day 5</b></summary>

- Minor corrections and code refactoring
- Validations with yup.js
- Custom Exceptions 
- Middleware introduction 

</details>


## 🔶 Diagram

<img src="public/diagrama.png" alt="Diagrama da aplicação" />

## 🚀 How do i install

- Clone this repo
- Install all dependecies with `$ yarn add` or `$ npm install`
- Run the migrations usind `$ yarn typeorm migration:run`
- Start server with `$ yarn dev` or `$ npm run dev`

The application can be accessed in [`localhost:3333`](http://localhost:3333).
