# PlayCation

Plans for this application:

Develop a full stack (MERN) application that allows users to sign up, create profiles, and upload images of locations they have visited
- Front end will be developed in React as a Single Page Application
- Followed by building a REST API using NodeJS and Express
- Then connecting MongoDB to the back end to store individual user login information.
- Authentication and Authorization will be handled with encryption (bcrypt) and JSON Web Tokens (jsonwebtoken)

# 5/24/2021
- Scaffolding the front end using create-react-app 
- basic folder structure so far is: 
- places-->components + pages
- shared-->components
- user-->components + pages
- After installing react-router-dom some basic routes were routes were established and everything was working ~~fine~~ WHY DON'T MY ROUTES WORK PROPERLY????
![enterSwitch](https://user-images.githubusercontent.com/32680255/119415321-5e315980-bcbf-11eb-8da6-2c00f34bfa9b.png)
- Including the <Redirect> component from react router is useful for redirecting traffic to a specific URL if an incorrect path is supplied, however, as the file is read top to bottom the <NewPlace> component is evaluated, but also the components thereafter, which is good for rendering persistent components such as a navbar or footer.
- We can address this by adding Switch to the list of imported react-router-dom components
-  ![switch](https://user-images.githubusercontent.com/32680255/119416288-4a86f280-bcc1-11eb-85f4-575c2df53351.png)
- And then wrapping our Routes with it
- ![switchWrapSupreme](https://user-images.githubusercontent.com/32680255/119416393-802bdb80-bcc1-11eb-9dde-79fbeec0480e.png)
- Doing so allows the Router to evaluate a valid route and will not execute the <Redirect> component
-  In the words of Nelson Mandela:
-    > Read the docs, y'all!
