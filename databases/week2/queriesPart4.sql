-----------------
-----Part 4:-----
-----------------
-- Table for storing job titles
CREATE TABLE JobTitles (
    job_title_id INT AUTO_INCREMENT PRIMARY KEY,
    title_name VARCHAR(100) NOT NULL
);

-- Table for storing office information
CREATE TABLE Offices (
    office_id INT AUTO_INCREMENT PRIMARY KEY,
    office_name VARCHAR(100) NOT NULL,
    location VARCHAR(200) NOT NULL
);

-- Table for storing staff information
CREATE TABLE Staff (
    staff_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    job_title_id INT,
    FOREIGN KEY (job_title_id) REFERENCES JobTitles (job_title_id) ON DELETE SET NULL
);

-- Linking table for many-to-many relationship between staff and offices
CREATE TABLE StaffOffices (
    staff_office_id INT AUTO_INCREMENT PRIMARY KEY,
    staff_id INT,
    office_id INT,
    FOREIGN KEY (staff_id) REFERENCES Staff (staff_id) ON DELETE CASCADE,
    FOREIGN KEY (office_id) REFERENCES Offices (office_id) ON DELETE CASCADE
);