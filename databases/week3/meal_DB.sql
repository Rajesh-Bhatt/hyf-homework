/*Creating database*/
Create DATABASE meal_db;

/*Using meal database*/
USE meal_db;

/*Creating table meal*/
create table meal (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(250) NOT NULL,
    description TEXT(250) NOT NULL,
    location VARCHAR(250) NOT NULL,
    `when` DATETIME,
    max_reservations INT,
    price DECIMAL,
    created_date DATE
);

/*Creating reservation table*/
create table reservation (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    number_of_guests INT NOT NULL,
    meal_id INT NOT NULL,
    created_date DATE,
    contact_phonenumber VARCHAR(250),
    contact_name VARCHAR(250),
    contact_email VARCHAR(250),
    FOREIGN KEY (meal_id) REFERENCES meal (id)
);

/*Creating review table*/
create table review (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(250) NOT NULL,
    description TEXT,
    meal_id INT,
    stars INT,
    created_date DATE,
    FOREIGN KEY (meal_id) REFERENCES meal (id)
);