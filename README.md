# React Book Search App 📚

Search, browse, save and reveiw a book of your interest

## Demo

![gif](client/public/newDemo.gif) 

## Functionality

- Once a user fills in the search box and submit it, the app will connect Google Books API and render the search result.
- A user can save a book by clicking the save button. At the back-end, the app will save it to the MongoDB database using mongoose schema. 
- The saved page will get all saved books from the database and render them on the page. The delete button allows a user to delete a book from the database.   
- The app utilizes React lifecycle method to query and display book data on the page. 

- This is a SPA (Single Page Application) where react-router-dom navigates React components without changing the routes in Express.

## Express Routes

``/api/books (post)`` - create data set of a new book (documents) and save in the books collection inside the database.  
``/api/books (get)`` - returns all saved books as JSON from the database.  
``/api/books/:id (get)`` - return a book from the database by id.  
``/api/books/:id (delete)`` - deletes a book from the database by id.  
``* (get)`` - loads the single HTML page in client/build/index.html.  

## Technologies & Resources

- ReactJS: A library created by Facebook. It is used to build UI components that create the user interface of the single page web application.
- Material-UI
- MongoDB: A document-oriented, No-SQL database used to store the application data
-NodeJS: The JavaScript runtime environment. It is used to run JavaScript on a machine rather than in a browser.
-Express.JS: A framework layered on top of NodeJS, used to build the backend of a site using NodeJS functions and structures. Since NodeJS was not developed to make websites but rather run JavaScript on a machine, Express.JS was developed.

- MVC design pattern
The Model-View-Controller (MVC) is an architectural pattern that separates an application into three basic components: 
the model, the view, and the controller. Each of these components are built to handle specific development aspects of an application. 
MVC is one of the most frequently used industry-standard web development framework to create scalable and extensible projects.
-Model:
manages the behavior and the data of the application domain.
responds to requests for information about its state (usually from the view).
responds to instructions for state change (usually from the controller).
In event — driven systems, the model notifies observers (usually views) when the information changes so that they can react.
-View:
renders the model into a form suitable for interaction, typically a user interface element.
Multiple views can exist for a single model for various purposes.
A viewport typically has one to one correspondence with a display surface and knows how to render to it.
-Controller:
receives user input and initiates a response by making calls on model objects.
A controller accepts input from the user and instructs the model and viewport to perform actions based on that input.
Brief Introduction to the MERN Stack
The MERN Stack is a JavaScript Stack that is used for easier and faster deployment of full-stack web applications.

The MERN stack consists of the following technologies:
MongoDB: A document-based open source database.
Express: A web application framework for Node.js.
React: A JavaScript front-end library for building user interfaces.
Node.js: JavaScript run-time environment that executes JavaScript code outside of a browser (such as a server).
It is also common to use Mongoose, which is a simple, schema-based solution to model application data.
MVC and MERN
MERN isn’t an MVC framework in the traditional sense, because it spans both the server and the browser. MVC can also be achieved by sticking to server-side templating in Node, and just sending the HTML to the browser and treating the browser as the View layer i.e. doing things the way things have always been done forever.
Although, when React is combined with a javascript backend, then it is MVC. React serves as the “V” in the MVC
Mongoose’ models defines the data part. This is where we will store all of the crucial data our application needs to function.
Express & Node.js does all the functional programming and will be used to write the Business Logic Tier (controller). This tier represents the Application Server that will act as a bridge of communication for the Client and Database. This tier will serve the React components to the user’s device and accept HTTP requests from the user and follow with the appropriate response.
React serves as the “V” in the MVC. Our Client tier (View) will be written in JavaScript, HTML, and CSS, using ReactJS as the framework. This level of the architecture is what the user will interact with to access the features of our application.
