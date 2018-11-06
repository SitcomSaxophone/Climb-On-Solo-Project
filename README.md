# Climb On
Training app allowing registered users to schedule and track rock-climbing specific workouts. Scheduled workouts can be       updated with any added weights, route ratings, notes on the individual session, or deleted. All complete workouts are         archived for user reference.

## Prerequisites
In order to run the development werver you will first need to:
  ```
  npm install
  ```
 ### Prerequisites
 Next you will need to create a database named "climb_on". After that you can create the tables with the following queries:
 ```
 CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);

CREATE TABLE "workout" (
	id SERIAL PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	on_time INTEGER,
	off_time INTEGER,
	rest_time INTEGER
);

CREATE TABLE "schedule" (
	id SERIAL PRIMARY KEY,
	start_date TIMESTAMP NOT NULL,
	end_date TIMESTAMP NOT NULL,
	added_weight INTEGER DEFAULT 0,
	route_rating VARCHAR(12),
	comments TEXT,
	isComplete BOOLEAN DEFAULT false,
	workout_id INTEGER references "workout",
	user_id INTEGER references "user"
);
 ```
 ## Built With
 React
 Redux 
 Redux Saga
 Postgresql
 Node.js
 Express
 Passport
 [Moment.js] (https://momentjs.com/) - Used to format dates and times
 [Material-UI] (https://material-ui.com/) - Used for styling
 
## Authors

* **Samuel Solberg**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
