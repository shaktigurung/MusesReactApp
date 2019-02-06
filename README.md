<!-- ASSIGNMENT DOCUMENTATION -->
# MERN Application - MusesCodeJS Website

1. Link to published app 
2. Link to [Back End repo](https://github.com/DanielTeale/muses-api)
3. Link to [Front End repo](https://github.com/shaktigurung/MusesReactApp)

## Problem definition / Purpose

Web application designed, built, deployed and presented for a real world customer.
The customer is a non-profit organisation called MusesCodeJS, which has the purpose of run free coding meetups and workshops to include women, non-binary and trans folk around Australia into Tech area.

The project purpose is remake the organisation's website to improve its performance and userinterface using technologies as React and Redux so that target people can explore and have a better understanding about the organisation according to their interests.

## Functionality / Features

### User Section

- Landing page designed to include the organisation's logo; available chapters; description and testimonials from people that attended to workshops.
- About Us page designed to include more details about the organisation and the organisation teams by chapter.
- Events page designed to include the Upcoming Events and Past Events so that the user can explore and look for events of its interest.
- News page designed to show posts by organisers with the purpose to inform users about what's going on MusesCodeJS.
- Resources page designed to show all resources and articles added by organisers with the purpose to help and spread knowledge to any user that is interested.
- Sponsors page designed to show all sponsors that help MusesCodeJS in some way, such as sponsoring events and workshops as well 
- Contact Us page designed to show e-mail and social media links available to contact the MusesCodeJS organisers. It also includes links to access Mentor's form and Sponsor's form in case any user wants to apply to become a mentor or sponsor.
- Header including logo and menubar with links to redirect to Home, About Us, Events, News, Resources, Sponsors and Contact Us.
- Footer including e-mail information and social media icons.

### Admin User Section

- Register page to become a new admin user.
- Login page so that admin can log in and manage the website's content through dashboards.
- Logout button on the top of the page so that admin can logout from any page.
- Profile page showing admin's information and buttons to redirect for each dashboard by section (Events, News, Post, Chapters, Sponsors and Resources)
- For each these dashboards you can create, update or delete content.

## Screenshots

Website screenshots

## Tech Stack

- HTML
- CSS
- JavaScript
- Express
- MongoDB/Mongoose
- React.js
- Node.js
- Redux
- Heroku
- AWS
- Reactstrap
- 

## Instructions
Instructions on how to setup, configure, deploy and use your App.

You can access the deployed version clicking on this link: 

If you want to run this app in your computer follow the instructions below:

## Design process

### User stories

- As an admin user I want to be able to register, log in and having a profile page where I can manage the website's content by section.
- As an admin user I want to be able to create and delete chapters so that it's possible to show the available chapters for workshops and events.
- As an admin user I want to be able to create, update and delete events on Events page, so that website's users can track upcoming events and also check past events.
- As an admin user I want to be able to create, update and delete resources on the Resources page, so that I can share interesting documents and sources with website's users and spread coding knowledge with people interested in learning.
- As an admin user I want to be able to create, update and delete posts and news on the News page, so that I can share with website's users latest news about MusesCodeJS and related topics.
- As an admin user I want to be able to share the MusesCodeJS purpose and work on About Us page, so that people who are interested in knowing what we do can access the necessary information about our work and also check our team by chapter.
- As an admin user I want to be able to add and remove organisers for each chapter so that is possible to show the team/organisers on About Us page.
- As an admin user I want to be able to create, update and delete sponsors on Sponsors page, so that website's users can check which companies/organisations support our work.
- As an admin user I want to be able to show our email and social media links on Contact page, so that website's users can contact us when necessary.
- As an admin user I want to be able to provide a mentor's form on Contact page, so that interested people in become a mentor can apply using the form.
- As an admin user I want to be able to provide a sponsor's form on Contact page, so that interested companies/organisations in become a sponsor can apply using the form.

### A workflow diagram of the user journey/s.

### Wireframes

#### Mobile

![Mobile_wireframes] (https://github.com/shaktigurung/MusesReactApp/tree/master/docs/MobileScreenshots1.png)

![Mobile_wireframes] (https://github.com/shaktigurung/MusesReactApp/tree/master/docs/MobileScreenshots2.png)

#### Mobile Admin

![Mobile_Admin] (https://github.com/shaktigurung/MusesReactApp/tree/master/docs/AdminMobileScreenshots1.png)

![Mobile_Admin] (https://github.com/shaktigurung/MusesReactApp/tree/master/docs/AdminMobileScreenshots2.png)

#### Browser

![Home_page] (https://github.com/shaktigurung/MusesReactApp/tree/master/docs/HomeScreenshot.png)

![About_Us_page] (https://github.com/shaktigurung/MusesReactApp/tree/master/docs/AboutUsScreenshot.png)

![Events_page] (https://github.com/shaktigurung/MusesReactApp/tree/master/docs/EventsScreenshot.png)

![News_page] (https://github.com/shaktigurung/MusesReactApp/tree/master/docs/NewsScreenshot.png)

![Resources_page] (https://github.com/shaktigurung/MusesReactApp/tree/master/docs/ResourcesScreenshot.png)

![Sponsors_page] (https://github.com/shaktigurung/MusesReactApp/tree/master/docs/SponsorsScreenshot.png)

![Contact_page] (https://github.com/shaktigurung/MusesReactApp/tree/master/docs/ContactScreenshot.png)

### Database Entity Relationship Diagrams

### Data Flow Diagram

### OO design documentation

### Project plan & timeline

### Client communications

- By text messages
- By Slack
- Meeting by phone

### Screenshots of Trello board(s)



## Answers to the Short Answer questions (Section 2.2)
### What are the most important aspects of quality software?
Quality software is reasonably bug or defect free, delivered on time and within budget, meets requirements and/or expectations, and is maintainable. Key aspects of quality for the customer 
include:
- Good design – looks and style
- Good functionality – it does the job well
- Reliable – acceptable level of breakdowns or failure
- Consistency
- Durable – lasts as long as it should
- Good after sales service
- Value for money

### What libraries are being used in the app and why?
- create-react-app - it helps to create React Application and sets up development environment
- Redux - It helps to maintain state in react
- Redux Form - helps to create/submit forms 
- ReactStrap - Reactstrap assist on styling the react components
- Font-Awesome - it helps to integrate small icons for various links

### A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?
- In order to build a website for a small business, a team needs to have knowledge on Web Application development. They need to know the design process of Web development and what technology they will be using to create it. They should following the following design process:

- Goal identification
- Scope definition
- Sitemap and wireframe creation
- Content creation
- Visual elements
- Testing
- Deploy

A team needs to know HTML, CSS and JavaScript for a static website. However, if they want to build dynamic website then they need know server side programming languages such as ruby, php and javascript. Also, they need to have knowledge about various database for data storage. It will be great help if they know a full stack of any technology such as MERN ( MongoDB, Express, React and Node)
or MEAN(MongoDB, Express, Angular and Node) etc.

### Within your own project what knowledge or skills were required to complete your project, and overcome challenges?
- For our project, we need to have knowledge about whole web architecture design. We used MERN stack as our technology to build the project, so we needed knowledge about Mongodb/Mongoose, Express.js, React.js and Node.js. Also we need to know about HTML,CSS and Bootstrap framework.

There were a lot of challenges while building our project, from setting up the server locally to deploying it globally. Some of the major challenges were 
- setting up API for backend and connecting it to the React Application 
- Authentication 
- Form validation
- Redux forms
- React Component styling
- Deployment
- Git conflicts

### Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?
The amount of knowledge we had was just enough to start this project. We learned a lot while building it. As we came across various challenges to integrate features into our project, we had to research on that particular topic and find our ways to incorporate it into our project. For example, we had to style our website, so custom css was challenging for us since it was very hard to style React Components. So we found "reactstrap" npm package which helped us to use our Bootstrap knowledge into React Application. In this way we learned new package and integrated it.

In future, for similar nature of projects, we do not have to struggle to setup the basic structure. We will do things more systematically and try to analyse various possible ways and techs to be used. Moreover, we will overcome the problems that we had to face in this project.


<!--  ASSIGNMENT DOCUMENTATION END -->
