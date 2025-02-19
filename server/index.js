import express from 'express'
import jwt from 'express-jwt'
import cors from 'cors'
import jwks from 'jwks-rsa'

const app = express()
const PORT = 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/courses', (req, res) => {
  let courses = [
    {
      id: 1,
      title: 'Building an App with ReactJS and MeteorJS',
      link: 'https://www.lynda.com/React-js-tutorials/Building-App-React-js-MeteorJS/533228-2.html',
      description:
        "Meteor and React are a powerhouse combination. Meteor gives you a fast, easy-to-use solution for data management across clients and servers, and React gives you a way to structure your app's UI from reusable components. The combination allows you to create your dream apps: dynamic, data driven, and cross-platform.",
    },
    {
      id: 2,
      title: 'Framer for UX design',
      link: 'https://www.lynda.com/FramerJS-tutorials/UX-Design-Tools-Framer/562923-2.html',
      description:
        'You can use Framer to create JavaScript-based app prototypes quickly and easily. UX designers, engineers, interaction designers, and more can get refreshed on UX fundamentals in this course, and then dive into navigating Framer.',
    },
    {
      id: 3,
      title: 'Migrating to TypeScript 2',
      link: 'https://www.lynda.com/JavaScript-tutorials/Migrating-TypeScript-2/585078-2.html',
      description:
        'TypeScript is a newer Microsoft language built on JavaScript that is finding wide adoption in the Microsoft, Google, and Angular communities. Like many things JavaScript these days, TypeScript is changing rapidly as it grows.',
    },
    {
      id: 4,
      title: 'From React to React Native',
      link: 'https://www.lynda.com/React-Native-tutorials/From-React-React-Native/577371-2.html',
      description:
        'With React Native, you can leverage your existing React knowledge to build native iOS and Android apps. In this course, explore the different components that make up a basic React Native application, and learn how to use this platform to build your own native projects.',
    },
    {
      id: 5,
      title: 'React Native Ecosystem and Workflow',
      link: 'https://www.lynda.com/React-Native-tutorials/React-Native-Ecosystem-Workflow/560206-2.html',
      description:
        'React Native makes it easy to develop applications and then deploy them natively to multiple mobile platforms. That said, building a complete app means looking beyond React Native to the different options that can help you customize your workflow.',
    },
    {
      id: 6,
      title: 'Create a CRM mobile application with React Native',
      link: 'https://www.lynda.com/Web-tutorials/Create-CRM-Mobile-Application-React-Native/585274-2.html',
      description:
        'You can develop a mobile CRM application using React Native. Learn how set up a project, code the login, work with Redux, add views, use CRUD operations, and more.',
    },
    {
      id: 7,
      title: 'Prototype a CRM mobile application with Framer',
      link: 'https://www.lynda.com/FramerJS-tutorials/Prototype-Mobile-CRM-Application-Framer/587677-2.html',
      description:
        'You can create a prototype for a mobile CRM application using Framer. Learn how to create assets, build a mockup, simulate interactions with animations, prototype concepts, and more.',
    },
    {
      id: 8,
      title: 'React Ecosystems',
      link: 'https://www.lynda.com/React-js-tutorials/React-Ecosystems/601831-2.html',
      description:
        'React is rarely used by itself. As a result, working effectively with React—especially when developing in a group—means mastering a set of tools. Some of these tools supplement React, while others establish and maintain workflows for efficient development or help React mesh with another set of web-centric tools.',
    },
    {
      id: 9,
      title: 'React: Testing and debugging',
      link: 'https://www.lynda.com/React-js-tutorials/React-Testing-Debugging/592511-2.html',
      description:
        'Tracking down bugs in React and among the many different pieces it communicates with can be a challenge. While basic JavaScript testing and debugging tools certainly work, solutions designed specifically to work with React will save you time and effort.',
    },
    {
      id: 10,
      title: 'InVision Craft for UX design',
      link: 'https://www.lynda.com/Craft-tutorials/InVision-Craft-UX-Design/599634-2.html',
      description:
        'InVision Craft is suite of plugins that equip designers with tools that simplify some of the more tedious tasks in their UX design workflow and, in turn, speed up the entire process.',
    },
    {
      id: 11,
      title: 'InVision for UX Design',
      link: 'https://www.lynda.com/InVision-tutorials/InVision-UX-Design/599633-2.html',
      description:
        'InVision is a platform that provides UX designers with a set of powerful tools for creating interactive prototypes, collaborating with teammates, and managing their UX design workflow.',
    },
    {
      id: 12,
      title: 'GraphQL: Data fetching with Relay',
      link: 'https://www.lynda.com/GraphQL-tutorials/GraphQL-Data-Fetching-Relay/595829-2.html',
      description:
        'Want to build more efficient, data-driven React.js applications? Streamline data retrieval with GraphQL and Relay. You can get exactly the data you need—nothing more, nothing less—and predictable results every time.',
    },
  ]
  res.json(courses)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
