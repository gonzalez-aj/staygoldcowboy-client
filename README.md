# Stay Gold, Cowboy

## Getting Started
## Server-Side: Python Django
* ### *[server side code](https://github.com/AngieMGonzalez/staygoldcowboy-server)*

## Starting the Project
1. Create a Firebase project and set up authentication. Use [these videos](https://vimeo.com/showcase/codetracker-firebase) as a refresher if needed.
1. Create a `.env` file at the root of the project
1. Copy/Paste the contents of the `.env.sample` file to your newly created `.env` file.
1. Copy over all of your Firebase values into the `.env` file.
1. Open the `package.json` file and change the `name` property to the name of your application, and `author` to  your name.
1. From your command line, be in the root directory and run `npm install` OR `npm i` for short.
1. Next, run `npm run prepare`. This command sets up husky to track eslint errors on commit that will make your deploy fail on Netlify.
1. To start your application, run `npm run dev`. THIS IS THE COMMAND YOU WILL USE TO RUN YOUR DEVELOPMENT SERVER FROM NOW ON.
1. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Topics
- [Overview](#overview)
- [MVP Features](#mvp-features)
- [Video Walkthrough of MVP](#video-walkthrough-of-mvp)
- [Relevant Links](#relevant-links)
- [Code Snippet](#code-snippet)
- [Project Screenshots](#project-screenshots)
- [Get Started](#get-started)
- [Tech and Frameworks Used](#tech-and-frameworks-used)
- [Google Auth](#Google-Auth)
- [Contributors](#contributors)
___
## Overview
- The ideal user for Stay Gold, Cowboy is a fan of Sonatore
- Fans can sign in with Google authentication and upload their favorite image URLs of Sonatore's art
- Fans can organize the artwork by tags

## MVP Features
- Fans of Sonatore sign in with Firebase Google authentication
- Fans can browse all the art and all the tags
- Fans can create, read, update and delete art and tags
- Fans can create read update and delete their own snippet ideas
- Art has information regarding creation date, tags, and image url
- Fans can filter art by tags

## Video Walkthrough

## Relevant Links
- [Figma Wireframes for MVP](https://www.figma.com/file/hOEfUiFeL3cMBTDBOCiQML/Stay-Gold%2C-Cowboy?type=design&node-id=0%3A1&t=ZmzcDnEjDJpCFnqX-1)
- [Project Board](https://github.com/users/AngieMGonzalez/projects/2)

## ERD

- [MVP ERD made with dbdiagrom.io](https://dbdiagram.io/d/64809033722eb77494910894)
<img width="500" alt="Stay Gold, Cowboy MVP ERD" src="https://user-images.githubusercontent.com/114124374/247436507-046a0270-51ee-4d4e-95a8-e74861da2cf6.png">

- Assumption: Art can have many tags, and tags can be associated with many pieces of art. 

## Code Snippet
Set PropTypes
```
ArtForm.propTypes = {
  artObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image_url: PropTypes.string,
    creation_date: PropTypes.string,
    tag: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      medium: PropTypes.string,
    })),
  }),
};
```


## Project Screenshots


## Get Started
1. Create a [Firebase](https://firebase.google.com/) project and set up authentication. 
1. Clone Stay Gold, Cowboy to your local server
```
git@github.com:AngieMGonzalez/staygoldcowboy-client.git
```
1. Create a `.env` file at the root of the project
1. Copy the environmental variables from Firebase and paste them as the properties of the keys found in your newly created `.env` file
1. Import sample data found in `data` folder in to the Realtime Database 
1. From your command line, be in the root directory and `run npm install` OR `npm i` for short
1. Then, run `npm run prepare`
1. To start Stay Golden, Cowboy run `npm run dev`
1. Open [http://localhost:3000](http://localhost:3000) with your browser

### Tech and Frameworks Used
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
TailwindCSS
Daisy UI

### Google Auth
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

## Contributors
- [Angie Gonzalez](https://github.com/AngieMGonzalez)
- Badges from [Alexandre Sanlim](https://github.com/alexandresanlim/Badges4-README.md-Profile#see-more-repositories)
- React/Next.js Django Auth [template from Nashville Software School](https://github.com/codetracker-learning/TEMPLATE-nextjs-withauth-django)
