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
- Including the Redirect component from react router is useful for redirecting traffic to a specific URL if an incorrect path is supplied, however, as the file is read top to bottom the <NewPlace> component is evaluated, but also the components thereafter, which is good for rendering persistent components such as a navbar or footer.
- We can address this by adding Switch to the list of imported react-router-dom components
-  ![switch](https://user-images.githubusercontent.com/32680255/119416288-4a86f280-bcc1-11eb-85f4-575c2df53351.png)
- And then wrapping our Routes with it
- ![switchWrapSupreme](https://user-images.githubusercontent.com/32680255/119416393-802bdb80-bcc1-11eb-9dde-79fbeec0480e.png)
- Doing so allows the Router to evaluate a valid route and will not execute the Redirect component
-  In the words of Nelson Mandela:
-    > Read the docs, y'all!
# What now??
- So I want to ultimately access and store information about our users via an object, or rather an array of objects
- ![userObject](https://user-images.githubusercontent.com/32680255/119419545-807ba500-bcc8-11eb-9e76-5882d86fbcc2.png)
- For now the object is hard coded with some dummy information, later I want to fetch and store all user info from the back end API
- Then I pass the array of objects to the UsersList component which can then be accessed as props
- ![userListcomp](https://user-images.githubusercontent.com/32680255/119419889-2202f680-bcc9-11eb-87a4-1330e2313584.png)
- Using the map() method, I am iterating over the array of object(s) and extracting the information I want to see in the DOM
- These props are then handed off to the UserItem component
-![userItemComp](https://user-images.githubusercontent.com/32680255/119420274-1f54d100-bcca-11eb-9b1f-2c4cb971d61b.png)
- Note the ternary expression used on line 15. If the number of places is plural it will return "Places" and vice versa.
-  and rendered to the DOM
- ![pika](https://user-images.githubusercontent.com/32680255/119420438-82defe80-bcca-11eb-96fb-ac77335eec67.png)
- She aint pretty but we're getting there!
# 5/25/2021
- Today I want to add a styled component which will hold the image and information about a user as an Avatar component.
- I will create subfolders in the shared/components folder structure and name them UIElements/Avatar/Avatar.js
- This will hold the users image info
- ![avatar](https://user-images.githubusercontent.com/32680255/119582654-ef253500-bd92-11eb-9cfa-44470d0a46ce.png)
- Now I want to use Link component from react-router-dom to wrap image container and set the path equal to the users id as props
- ![link](https://user-images.githubusercontent.com/32680255/119582800-3e6b6580-bd93-11eb-87d1-5bc2a1d2eb3e.png)
- Next I want the container holding the user image and info to have a card-like style so I will create a Card component in the       UIElements folder which will
  wrap the Link and Avatar components
- ![card](https://user-images.githubusercontent.com/32680255/119582970-a0c46600-bd93-11eb-8c74-3092f5de2c9f.png)
- I added the className "user-item__content" to the Card component because the overlapping styles made it butt ugly
-  ![chu](https://user-images.githubusercontent.com/32680255/119583273-3b24a980-bd94-11eb-87a6-746526491736.png)
- Much better
- ![better](https://user-images.githubusercontent.com/32680255/119583366-71fabf80-bd94-11eb-80dd-36d8739ccf93.png)
- I like to add hover effects to my CSS because they are easy to implement and really adds some much needed sugar to the website
- ![sugar](https://user-images.githubusercontent.com/32680255/119583519-c69e3a80-bd94-11eb-862f-721e029a135b.png)
- This inverses the text color and background for a nice effect
- ![hover](https://user-images.githubusercontent.com/32680255/119584186-2517e880-bd96-11eb-808a-267faed1a76f.png)
- I think thats all for today. Im tired
- Maybe tomorrow I can work on a nav bar or something





