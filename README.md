# Todoapp
A locally hosted todoapp built using Postgresql, Express.js, React.js and Node.js. The repository includes code for both the back- and front-end. TypeScript is used.
<img width="1585" height="807" alt="image" src="https://github.com/user-attachments/assets/f245ffe4-d2f2-442e-9e38-3970e4bd576f" />
<img width="1164" height="552" alt="image" src="https://github.com/user-attachments/assets/0ff9b078-0546-4abc-9c29-13d1afa1cf43" />



# Instructions
To test out the application, you need to install and run a postgresql server with the following credentials:

```
const pool = new Pool({
  user: "postgres",
  password: "",
  host: "localhost",
  port: 5432,
  database: "todoapp"
});
```

Create a database in the PostgreSQL terminal with the following lines of code:

```
CREATE DATABASE todoapp;

CREATE TABLE todo(
  tid SERIAL PRIMARY KEY,
  description VARCHAR(255)
);
```

Run the server from the server folder with `node index.ts` and install required dependencies.

Afterwards, cd into the client folder, and run `npm start` to show the React Front-end.

# Back-end
The back-end supports the API Routes Post, Get, Delete, and Put and and can interact with the PostgreSQL database using the basic CRUD operations (Create, Read, Update, Delete).

# Front-end
The front end is made usint React.js using bootstrap 4 table and modal elements. The components are split into 3: one for the list to display the todos, one for creating new toods, and one for editting the task.

The bootstrap 4 elements can be found here: 

https://getbootstrap.com/docs/4.6/getting-started/introduction/

https://getbootstrap.com/docs/4.0/content/tables/

https://getbootstrap.com/docs/4.0/components/modal/
