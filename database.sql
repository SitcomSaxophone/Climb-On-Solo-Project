CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);

INSERT INTO workout("name")
VALUES('4x4');

INSERT INTO workout("name", "on_time", "rest_time")
VALUES('Minimum Edge', 12, 300);

INSERT INTO workout("name", "on_time", "off_time", "rest_time")
VALUES('7 Second Hangs', 7, 3, 180)
('10 Second Hangs', 10, 5, 300);

INSERT INTO workout("name", "on_time", "rest_time")
VALUES('Campus Board', 30, 90);





