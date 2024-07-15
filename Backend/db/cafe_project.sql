CREATE DATABASE cafe_project;

USE cafe_project;


-- >>>>>>>>>>>>>>>>>>>> Employee Table <<<<<<<<<<<<<<<<<<<<<<<<<<

CREATE TABLE Employee (
Emp_ID INT PRIMARY KEY,
Emp_Name VARCHAR(50),
Designation VARCHAR(50),
Dept VARCHAR(50),
Age INT,
City VARCHAR(50)
);

INSERT INTO Employee (Emp_ID, Emp_Name, Designation, Dept, Age, City) VALUES
(1, 'John Doe', 'Manager', 'Sales', 45, 'New York'),
(2, 'Jane Smith', 'Developer', 'IT', 30, 'San Francisco'),
(3, 'Emily Davis', 'Designer', 'Marketing', 27, 'Los Angeles'),
(4, 'Michael Brown', 'Analyst', 'Finance', 40, 'Chicago'),
(5, 'Jessica Johnson', 'HR', 'Human Resources', 35, 'Houston');


SELECT * FROM Employee;
-- >>>>>>>>>>>>>>>>>>>> Meal Record Table <<<<<<<<<<<<<<<<<<<<<<<<<<

CREATE TABLE meal_record (
Emp_ID INT,
meal_pref VARCHAR(10),
meal_time TIME ,
meal_date DATE,
city VARCHAR(15),
FOREIGN KEY (Emp_ID) REFERENCES Employee(Emp_ID),
PRIMARY KEY(Emp_ID, meal_time, meal_date)
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
(4, 'Normal', '13:15:00', '2024-01-04', 'Islamabad')
;
-- Insert records for Karachi
INSERT INTO meal_record (Emp_ID, meal_pref, meal_time, meal_date, city) VALUES 
(1, 'Normal', '13:20:00', '2024-06-05', 'Karachi');


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
city VARCHAR(15),
PRIMARY KEY (User_id)
);

INSERT INTO admin_info(User_id, admin_password, city)
VALUES  ("Admin.Isb", "Isb123", "Islamabad"),
		("Admin.KHI", "KHI123", "Karachi"),
		("Admin.LHR", "LHR123", "Lahore");

SELECT * FROM admin_info;
