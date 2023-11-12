# DEPRECATED - ConstrUp - Exam
#### This repo is old and using `$ npm install` will probably break the packages. If you really wanna run this project, use `$ npm ci` instead of `$ npm install`

<p align="center">
  <img src="https://raw.githubusercontent.com/abehidek/construp-exam/main/public/Home.png" alt="Home" />
</p>

## 💻 About this repository

This repository countais all the requirement for ConstrUp (Brazilian Startup) exam.
It's an application that displays a list of construction materials, you can add a material, delete it and edit it (basic operations of CRUD), all fields of each construction material are editable and is stored in a MySQL database.
It's also responsive and it has a simple layout.

All the functionalities are working.

Also, feel free to copy the code or fork it and pull a request =)

## 🔧 Main tools and tecnologies used in the project

- [Laravel](https://laravel.com/) for php framework
- [TailwindCSS](http://tailwindcss.com/) for css framework
- [Vue.js](https://vuejs.org/) for javascript framework
- [MySQL](https://www.mysql.com/) for database

## How do I run it?

You need to install all dependecies from both api and website, I used NPM (Node Package Manager) to install tailwindcss and other dependencies related to web application, and for API, I used Composer.

- First you need to install MySQL and PHP, I recommend using [XAMPP](https://www.apachefriends.org/index.html) to install then, Be sure to install [Node](https://nodejs.org/en/) as well
- Install both [Node Package Manager](https://www.npmjs.com/) and [Composer](https://getcomposer.org/)
- Clone this repository

### For API
- Use your system console to navigate to [api](https://github.com/abehidek/construp-exam/tree/main/api) folder
- Start MySQL and create new database
- Renamed `.env.example` to `.env` and set up all database information
- Install the dependecies using `$ composer install`
- Run the migrations using `$ php artisan migrate`
- To run it use `$ php artisan serve`

### For Front-End

- Use your system console to navigate to [website](https://github.com/abehidek/construp-exam/tree/main/website) folder
- ~~Install the dependecies using `$ npm install`~~
- Install the dependencies using `$ npm ci` (Upgrading package versions will break.)
- To run it use `$ npm run serve`

