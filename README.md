# Object-Relational Mapping (ORM): E-Commerce Back End

## Table of Contents

1. Description
2. Badges
3. Visuals
4. Installation
5. Usage
6. Support
7. Contributing 
8. Authors and acknowledgment
9. License
10. Project status

## 2. Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

## 3. Visuals

Link to video demo of app:

https://drive.google.com/file/d/15PPt4-SlKyVD8vsvZBR_J16PFBeR8vTc/view?usp=sharing

## 4. Installation

CODE EDITOR TERMINAL:

- Enter your mysql password into the .env file
- npm install i
- mysql -u root –p
- SOURCE db/schema.sql
- Exit;
- npm run seed
- npm run watch

INSOMNIA:

<u>Categories: </u>
- GET / POST categories: http://localhost:3001/api/categories
- GET category by id / PUT / DELETE: http://localhost:3001/api/categories/[id]

<u>Products: </u>
- GET / POST products: http://localhost:3001/api/products
- GET product by id / PUT / DELETE: http://localhost:3001/api/products/[id]

<u>Tags: </u>
- GET / POST tags: http://localhost:3001/api/tags
- GET tag by id / PUT / DELETE: http://localhost:3001/api/tag/[id]

## 5. Usage

This is an API and back end code that can be used for a e-commerce site. It runs on an express server using Sequelize models that interact with a MySQL2 database.

The user can make GET, PUT, POST, and DELETE calls in Insomnia or other API testing program. Calls can be made to retrieve and view the database items, by category, product or tag. Categories, products, and tags can be viewed, updated, added or deleted.

## 6. Support

For support, users can contact tydamon@hotmail.com.

## 8. Contributing

Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". 
1.	Fork the Project
2.	Create your Feature Branch (git checkout -b feature/NewFeature)
3.	Commit your Changes (git commit -m 'Add some NewFeature')
4.	Push to the Branch (git push origin feature/NewFeature)
5.	Open a Pull Request

## 9. Authors and acknowledgment

The author acknowledges and credits those who have contributed to this project, including:

-	Provided Starter Code
-	https://git.bootcampcontent.com/Monash-University/MONU-VIRT-FSF-PT-11-2023-U-LOLC
-	Chee Ho Tai
-	Pranita Shrestha
-	Phil Loy 

## 10. License

Distributed under the MIT License. See LICENSE.txt for more information.
 
## 11. Project status

This project is completed.
