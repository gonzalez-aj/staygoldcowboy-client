# Stay Gold, Cowboy

## Server-Side: Python Django
* ### *[server side code](https://github.com/AngieMGonzalez/staygoldcowboy-server)*

## Topics
- [Overview](#overview)
- [Get Started](#get-started)
- [MVP Features](#mvp-features)
- [Video Walkthrough of MVP](#video-walkthrough-of-mvp)
- [Relevant Links](#relevant-links)
- [Code Snippet](#code-snippet)
- [Project Screenshots](#project-screenshots)
- [Tech and Frameworks Used](#tech-and-frameworks-used)
- [Google Auth](#Google-Auth)
- [Contributors](#contributors)
___
## Overview
- The ideal user for Stay Gold, Cowboy is a fan of Sonatore
- Fans can sign in with Google authentication and upload their favorite image URLs of Sonatore's art
- Fans can organize the artwork by tags

## Get Started
1. Create a Firebase project and set up authentication. Use [these videos](https://vimeo.com/showcase/codetracker-firebase) as a refresher if needed.
1. Clone Stay Gold, Cowboy to your local server
```
git@github.com:AngieMGonzalez/staygoldcowboy-client.git
```
1. Create a [Firebase](https://firebase.google.com/) project and set up authentication.
1. Create a `.env` file at the root of the project
1. Copy/Paste the contents of the `.env.sample` file to your newly created `.env` file.
1. Copy the environmental variables from Firebase and paste them as the properties of the keys found in your newly created `.env` file
1. Clone and set up the [server side code](https://github.com/AngieMGonzalez/staygoldcowboy-server) to your local machine
1. Open the `package.json` file and change the `name` property to the name of your application, and `author` to  your name.
1. From your command line, be in the root directory and run `npm install` OR `npm i` for short.
1. Next, run `npm run prepare`. This command sets up husky to track eslint errors on commit that will make your deploy fail on Netlify
1. To start *Stay Golden, Cowboy*, run `npm run dev` to run your development server
1. Open [http://localhost:3000](http://localhost:3000) with your browser

## MVP Features
- Fans of Sonatore sign in with Firebase Google authentication
- Fans can browse all the art and all the tags
- Fans can create, read, update and delete art and tags
- Fans can create read update and delete their own snippet ideas
- Art has information regarding creation date, tags, and image url
- Fans can filter art by tags

## Video Walkthrough of MVP

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

### Tech and Frameworks Used
<div align="center">  
<a href="https://reactjs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="50" /></a>  
<a href="https://getbootstrap.com/docs/3.4/javascript/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" alt="Bootstrap" height="50" /></a>  
<a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>  
<a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a>  
<a href="https://www.electronjs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/electron-original.svg" alt="Electron" height="50" /></a>  
<a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a>  
<a href="https://nextjs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nextjs.png" alt="NextJS" height="50" /></a>  
<a href="https://www.figma.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/figma-icon.svg" alt="Figma" height="50" /></a>  
<a href="https://www.tailwindcss.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/tailwindcss.svg" alt="Tailwind CSS" height="50" /></a>  
</div>


### Linters
<div align="center">  
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
</div>

### Google Auth
<div align="center">  
<a href="https://firebase.google.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/firebase.png" alt="Firebase" height="50" /></a>  
</div>

## Contributors
- [Angie Gonzalez](https://github.com/AngieMGonzalez)
- Badges from [Alexandre Sanlim](https://github.com/alexandresanlim/Badges4-README.md-Profile#see-more-repositories) and [Profilnator]([https://github.com/alexandresanlim/Badges4-README.md-Profile#see-more-repositories](https://profilinator.rishav.dev/))
- React/Next.js Django Auth [template from Nashville Software School](https://github.com/codetracker-learning/TEMPLATE-nextjs-withauth-django)
