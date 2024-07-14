CREATE DATABASE cafe_project;

USE cafe_project;


-- >>>>>>>>>>>>>>>>>>>> Employee Table <<<<<<<<<<<<<<<<<<<<<<<<<<

CREATE TABLE Employee (
Emp_ID INT PRIMARY KEY,
Emp_Name VARCHAR(50),
Designation VARCHAR(50),
Dept VARCHAR(50)
);

INSERT INTO Employee (Emp_ID, Emp_Name, Designation, Dept) VALUES (1, 'Muhammad Zohaib', 'AI Engineer', 'IT');
INSERT INTO Employee (Emp_ID, Emp_Name, Designation, Dept) VALUES (6, 'Daniyal Faraz', 'Software Engineer', 'IT');
INSERT INTO Employee (Emp_ID, Emp_Name, Designation, Dept) VALUES (7, 'Umm e Kulsoom', 'Software Engineer', 'IT');
INSERT INTO Employee (Emp_ID, Emp_Name, Designation, Dept) VALUES (2, 'Muhammad Bilal', 'Data Scientist', 'IT');
INSERT INTO Employee (Emp_ID, Emp_Name, Designation, Dept) VALUES (3, 'Huzaifa Rizwan', 'Product Manager', 'Marketing');
INSERT INTO Employee (Emp_ID, Emp_Name, Designation, Dept) VALUES (4, 'Bob Brown', 'HR Manager', 'Human Resources');
INSERT INTO Employee (Emp_ID, Emp_Name, Designation, Dept) VALUES (5, 'Charlie Davis', 'Accountant', 'Finance');
INSERT INTO Employee (Emp_ID, Emp_Name, Designation, Dept) VALUES (8, 'Fiona Clark', 'Office Manager', 'Administration');
INSERT INTO Employee (Emp_ID, Emp_Name, Designation, Dept) VALUES (9, 'Hashir Waqas', 'Network Engineer', 'IT');
INSERT INTO Employee (Emp_ID, Emp_Name, Designation, Dept) VALUES (10, 'Hannah Scott', 'Content Writer', 'Marketing');
INSERT INTO Employee (Emp_ID, Emp_Name, Designation, Dept) VALUES (11, 'Ian Turner', 'Sales Manager', 'Sales');
INSERT INTO Employee (Emp_ID, Emp_Name, Designation, Dept) VALUES (12, 'Jessica Walker', 'Recruiter', 'Human Resources');
INSERT INTO Employee (Emp_ID, Emp_Name, Designation, Dept) VALUES (13, 'Kyle Parker', 'Financial Analyst', 'Finance');
INSERT INTO Employee (Emp_ID, Emp_Name, Designation, Dept) VALUES (14, 'Saad Tahir', 'Software Tester', 'IT');
INSERT INTO Employee (Emp_ID, Emp_Name, Designation, Dept) VALUES (15, 'Mia Martinez', 'Operations Manager', 'Operations');

SELECT * FROM Employee;
-- >>>>>>>>>>>>>>>>>>>> Meal Record Table <<<<<<<<<<<<<<<<<<<<<<<<<<

CREATE TABLE meal_record (
Emp_ID INT,
meal_pref VARCHAR(10),
meal_time TIME ,
meal_date DATE,
city VARCHAR(15),
FOREIGN KEY (Emp_ID) REFERENCES Employee(Emp_ID),
PRIMARY KEY(Emp_ID, meal_date)
);

-- DROP TABLE meal_record;

DELIMITER //
CREATE TRIGGER date_time
BEFORE INSERT
ON meal_record FOR EACH ROW
BEGIN
	SET NEW.meal_time = CURRENT_TIME();
    SET NEW.meal_date = CURRENT_DATE();
END //
DELIMITER ;

-- DROP TRIGGER date_time;

-- Insert records for Islamabad
INSERT INTO meal_record (Emp_ID, meal_pref, meal_time, meal_date, city) VALUES 
(1, 'Normal', '12:30:00', '2024-01-01', 'Islamabad'),
(2, 'Normal', '13:00:00', '2024-01-02', 'Islamabad'),
(3, 'Diet', '12:45:00', '2024-01-03', 'Islamabad'),
(4, 'Normal', '13:15:00', '2024-01-04', 'Islamabad'),
(5, 'Normal', '12:50:00', '2024-01-05', 'Islamabad'),
(6, 'Normal', '13:10:00', '2024-02-01', 'Islamabad'),
(7, 'Diet', '12:35:00', '2024-02-02', 'Islamabad'),
(8, 'Normal', '13:25:00', '2024-02-03', 'Islamabad'),
(9, 'Normal', '12:40:00', '2024-02-04', 'Islamabad'),
(10, 'Normal', '13:20:00', '2024-02-05', 'Islamabad'),
(11, 'Normal', '12:30:00', '2024-03-01', 'Islamabad'),
(12, 'Diet', '13:00:00', '2024-03-02', 'Islamabad'),
(13, 'Normal', '12:45:00', '2024-03-03', 'Islamabad'),
(14, 'Normal', '13:15:00', '2024-03-04', 'Islamabad'),
(15, 'Normal', '12:50:00', '2024-03-05', 'Islamabad'),
(1, 'Normal', '13:10:00', '2024-04-01', 'Islamabad'),
(2, 'Diet', '12:35:00', '2024-04-02', 'Islamabad'),
(3, 'Normal', '13:25:00', '2024-04-03', 'Islamabad'),
(4, 'Normal', '12:40:00', '2024-04-04', 'Islamabad'),
(5, 'Normal', '13:20:00', '2024-04-05', 'Islamabad'),
(6, 'Normal', '12:30:00', '2024-05-01', 'Islamabad'),
(7, 'Diet', '13:00:00', '2024-05-02', 'Islamabad'),
(8, 'Normal', '12:45:00', '2024-05-03', 'Islamabad'),
(9, 'Normal', '13:15:00', '2024-05-04', 'Islamabad'),
(10, 'Normal', '12:50:00', '2024-05-05', 'Islamabad'),
(11, 'Normal', '13:10:00', '2024-06-01', 'Islamabad'),
(12, 'Diet', '12:35:00', '2024-06-02', 'Islamabad'),
(13, 'Normal', '13:25:00', '2024-06-03', 'Islamabad'),
(14, 'Normal', '12:40:00', '2024-06-04', 'Islamabad'),
(15, 'Normal', '13:20:00', '2024-06-05', 'Islamabad');

-- Insert records for Karachi
INSERT INTO meal_record (Emp_ID, meal_pref, meal_time, meal_date, city) VALUES 
(15, 'Normal', '12:30:00', '2024-01-01', 'Karachi'),
(14, 'Normal', '13:00:00', '2024-01-02', 'Karachi'),
(13, 'Diet', '12:45:00', '2024-01-03', 'Karachi'),
(12, 'Normal', '13:15:00', '2024-01-04', 'Karachi'),
(11, 'Normal', '12:50:00', '2024-01-05', 'Karachi'),
(10, 'Normal', '13:10:00', '2024-02-01', 'Karachi'),
(9, 'Diet', '12:35:00', '2024-02-02', 'Karachi'),
(7, 'Normal', '13:25:00', '2024-02-03', 'Karachi'),
(8, 'Normal', '12:40:00', '2024-02-04', 'Karachi'),
(6, 'Normal', '13:20:00', '2024-02-05', 'Karachi'),
(5, 'Normal', '12:30:00', '2024-03-01', 'Karachi'),
(4, 'Diet', '13:00:00', '2024-03-02', 'Karachi'),
(3, 'Normal', '12:45:00', '2024-03-03', 'Karachi'),
(2, 'Normal', '13:15:00', '2024-03-04', 'Karachi'),
(1, 'Normal', '12:50:00', '2024-03-05', 'Karachi'),
(15, 'Normal', '13:10:00', '2024-04-01', 'Karachi'),
(14, 'Diet', '12:35:00', '2024-04-02', 'Karachi'),
(13, 'Normal', '13:25:00', '2024-04-03', 'Karachi'),
(12, 'Normal', '12:40:00', '2024-04-04', 'Karachi'),
(11, 'Normal', '13:20:00', '2024-04-05', 'Karachi'),
(10, 'Normal', '12:30:00', '2024-05-01', 'Karachi'),
(8, 'Diet', '13:00:00', '2024-05-02', 'Karachi'),
(9, 'Normal', '12:45:00', '2024-05-03', 'Karachi'),
(7, 'Normal', '13:15:00', '2024-05-04', 'Karachi'),
(6, 'Normal', '12:50:00', '2024-05-05', 'Karachi'),
(5, 'Normal', '13:10:00', '2024-06-01', 'Karachi'),
(4, 'Diet', '12:35:00', '2024-06-02', 'Karachi'),
(3, 'Normal', '13:25:00', '2024-06-03', 'Karachi'),
(2, 'Normal', '12:40:00', '2024-06-04', 'Karachi'),
(1, 'Normal', '13:20:00', '2024-06-05', 'Karachi');

-- Insert records for Lahore
INSERT INTO meal_record (Emp_ID, meal_pref, meal_time, meal_date, city) VALUES 
(13, 'Normal', '12:30:00', '2024-01-25', 'Lahore'),
(6, 'Normal', '13:00:00', '2024-01-25', 'Lahore'),
(8, 'Diet', '12:45:00', '2024-01-26', 'Lahore'),
(9, 'Normal', '13:15:00', '2024-01-27', 'Lahore'),
(10, 'Normal', '12:50:00', '2024-01-28', 'Lahore'),
(1, 'Normal', '13:10:00', '2024-02-20', 'Lahore'),
(2, 'Diet', '12:35:00', '2024-02-21', 'Lahore'),
(3, 'Normal', '13:25:00', '2024-02-22', 'Lahore'),
(4, 'Normal', '12:40:00', '2024-02-23', 'Lahore'),
(5, 'Normal', '13:20:00', '2024-02-23', 'Lahore'),
(1, 'Normal', '12:30:00', '2024-03-24', 'Lahore'),
(13, 'Diet', '13:00:00', '2024-03-25', 'Lahore'),
(12, 'Normal', '12:45:00', '2024-03-25', 'Lahore'),
(15, 'Normal', '13:15:00', '2024-03-26', 'Lahore'),
(14, 'Normal', '12:50:00', '2024-03-27', 'Lahore'),
(15, 'Normal', '13:10:00', '2024-04-06', 'Lahore'),
(13, 'Diet', '12:35:00', '2024-04-07', 'Lahore'),
(14, 'Normal', '13:25:00', '2024-04-07', 'Lahore'),
(5, 'Normal', '12:40:00', '2024-04-07', 'Lahore'),
(4, 'Normal', '13:20:00', '2024-04-08', 'Lahore'),
(10, 'Normal', '12:30:00', '2024-05-09', 'Lahore'),
(2, 'Diet', '13:00:00', '2024-05-09', 'Lahore'),
(11, 'Normal', '12:45:00', '2024-05-03', 'Lahore'),
(2, 'Normal', '13:15:00', '2024-05-04', 'Lahore'),
(1, 'Normal', '12:50:00', '2024-05-05', 'Lahore'),
(3, 'Normal', '13:10:00', '2024-06-01', 'Lahore'),
(6, 'Diet', '12:35:00', '2024-06-02', 'Lahore'),
(8, 'Normal', '13:25:00', '2024-06-03', 'Lahore'),
(9, 'Normal', '12:40:00', '2024-06-04', 'Lahore'),
(12, 'Normal', '13:20:00', '2024-06-05', 'Lahore');

SELECT * FROM meal_record;

-- Query for Reports Page
SELECT m.Emp_ID, e.Emp_Name, m.meal_pref, m.meal_time, m.meal_date, m.city
FROM meal_record m
JOIN Employee e
ON m.Emp_ID = e.Emp_ID
WHERE city = "Islamabad"
ORDER BY meal_date ASC, meal_time;

-- >>>>>>>>>>>>>>>>>>>> Admin Table <<<<<<<<<<<<<<<<<<<<<<<<<<

CREATE TABLE admin_info(
User_id VARCHAR(20),
admin_password Varchar(20),
city VARCHAR(15)
);

INSERT INTO admin_info(User_id, admin_password, city)
VALUES  ("Admin.Isb", "Isb123", "Islamabad"),
		("Admin.KHI", "KHI123", "Karachi"),
		("Admin.LHR", "LHR123", "Lahore");

SELECT * FROM admin_info;


