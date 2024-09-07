-----------------
-----Part 2:-----
-----------------
1. Create a new school database

CREATE DATABASE Db_School;

/*Create table Class: with the columns: id, name, begins (date), ends (date)*/

create table Class (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    begins DATE,
    ends date
);

/*Create table Student: with the columns: id, name, email, phone, class_id (foreign key)*/

create table Student (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(25) NOT NULL UNIQUE,
    class_id INT,
    Foreign Key (class_id) REFERENCES Class (id)
);

/*Create an index on the name column of the student table*/
create INDEX indx_name on Student (name);

/*Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).*/

alter table Class
ADD COLUMN status ENUM(
    'not-started',
    'ongoing',
    'finished'
) NOT NULL DEFAULT 'not-started';