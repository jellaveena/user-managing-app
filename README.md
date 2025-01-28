# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/jellaveena/user-managing-app).

## Available Scripts

In the project directory, you can go to the particular project path or directory and you can run:

###`npm install axios react-router-dom`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Design Files:

-components:
  -App.js
  -ErrorBoundary.js
  -UserForm.js
  -UserList.js
-styles:
  -App.css
-utils:
  -api.js
-index.js

Backend Interaction:

Use Json placeholder API
Base_URL: https://jsonplaceholder.typicode.com
Endpoints:
.Fetch users: GET/users
.Add user: POST/users
.Edit user: PUT/users/:id
.Delete user: DELETE/users/:if

Completion Instructions:
Functionality to be added:
-App.js:
The main wrapper for the application 
Holds state for users and error handling 
Integrates UserList and UserForm.

- UserList.js:
Displays a list of users in a table format 
Includes Edit and Delete buttons

-UserForm.js:
A reusable form for adding or editing user details 
Includes client-side validation for fields like email.

-ErrorBoundary.js:
Wraps components to catch runtime errors

All the css styles used for the application is wrapped in css component i.e.,styles(App.css)

API requests:

export const fetchUsers=() => axios.get(Base_URL);
export const addUser=(user)=> axios.post(Base_URL, user);
export const update user=(id, user)=> axios.put(`${Base_URL}/${id}`);
export const deleteUser=(id) => axios.delete(`${Base_URL}/${id}`);

 Bonus Features:

Pagination:
Use state variables for the current page and items per page.
Adjust the displayed users by slicing the array.

Responsive UI:
Use a CSS framework like Bootstrap to ensure a responsive layout.

### Deployment

This section has moved here: [https://github.com/jellaveena/user-managing-app]


