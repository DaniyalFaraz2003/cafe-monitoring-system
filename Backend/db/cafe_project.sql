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
(76341, 'Ali Khan', 'Software Engineer', 'Development', 25, 'Islamabad'),
(28615, 'John Smith', 'Software Engineer', 'Development', 26, 'Islamabad'),
(90432, 'Ayesha Ahmed', 'QA Engineer', 'Testing', 27, 'Islamabad'),
(18790, 'Michael Johnson', 'DevOps Engineer', 'Operations', 28, 'Islamabad'),
(31489, 'Sara Malik', 'HR Manager', 'Human Resources', 29, 'Islamabad'),
(64173, 'Ahmed Ali', 'Software Engineer', 'Development', 25, 'Lahore'),
(52837, 'Emma Brown', 'QA Engineer', 'Testing', 26, 'Lahore'),
(90376, 'Zainab Akhtar', 'DevOps Engineer', 'Operations', 27, 'Lahore'),
(16254, 'David Williams', 'HR Manager', 'Human Resources', 28, 'Lahore'),
(78901, 'Noor Fatima', 'Software Engineer', 'Development', 29, 'Lahore'),
(56234, 'Liam Jones', 'Software Engineer', 'Development', 25, 'Karachi'),
(18392, 'Hina Saeed', 'QA Engineer', 'Testing', 26, 'Karachi'),
(93281, 'Oliver Martin', 'DevOps Engineer', 'Operations', 27, 'Karachi'),
(67423, 'Ayesha Shah', 'HR Manager', 'Human Resources', 28, 'Karachi'),
(24987, 'Ismail Khan', 'Software Engineer', 'Development', 29, 'Karachi'),
(35672, 'Sophia Williams', 'Software Engineer', 'Development', 25, 'Islamabad'),
(92783, 'Hamza Tariq', 'QA Engineer', 'Testing', 26, 'Islamabad'),
(18264, 'Emily Davis', 'DevOps Engineer', 'Operations', 27, 'Islamabad'),
(73421, 'Mariam Khalid', 'HR Manager', 'Human Resources', 28, 'Islamabad'),
(98342, 'William Garcia', 'Software Engineer', 'Development', 29, 'Islamabad'),
(74528, 'Sana Abbas', 'Software Engineer', 'Development', 25, 'Lahore'),
(68273, 'Noah Thompson', 'QA Engineer', 'Testing', 26, 'Lahore'),
(39216, 'Hassan Raza', 'DevOps Engineer', 'Operations', 27, 'Lahore'),
(21789, 'Sophia Wilson', 'HR Manager', 'Human Resources', 28, 'Lahore'),
(13487, 'Zara Iqbal', 'Software Engineer', 'Development', 29, 'Lahore'),
(87432, 'Amir Hussain', 'Software Engineer', 'Development', 25, 'Karachi'),
(56123, 'Ava Martinez', 'QA Engineer', 'Testing', 26, 'Karachi'),
(98234, 'Omar Sheikh', 'DevOps Engineer', 'Operations', 27, 'Karachi'),
(47382, 'Ethan Anderson', 'HR Manager', 'Human Resources', 28, 'Karachi'),
(23781, 'Fatima Yousaf', 'Software Engineer', 'Development', 29, 'Karachi');


SELECT * FROM Employee;

-- DROP TABLE Employee;

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

-- Meal Records
INSERT INTO meal_record (Emp_ID, meal_pref, meal_time, meal_date, city) VALUES
-- Records for July 1
(76341, 'Normal', '13:10:00', '2024-07-01', 'Islamabad'),
(28615, 'Diet', '13:20:00', '2024-07-01', 'Karachi'),
(90432, 'Normal', '13:30:00', '2024-07-01', 'Lahore'),
(18790, 'Normal', '13:40:00', '2024-07-01', 'Islamabad'),
(31489, 'Normal', '13:50:00', '2024-07-01', 'Karachi'),
-- Records for July 2
(64173, 'Normal', '14:00:00', '2024-07-02', 'Lahore'),
(52837, 'Diet', '14:10:00', '2024-07-02', 'Islamabad'),
(90376, 'Normal', '14:20:00', '2024-07-02', 'Karachi'),
(16254, 'Normal', '14:30:00', '2024-07-02', 'Lahore'),
-- Records for July 3
(78901, 'Normal', '14:40:00', '2024-07-03', 'Islamabad'),
(56234, 'Normal', '14:50:00', '2024-07-03', 'Karachi'),
(18392, 'Normal', '15:00:00', '2024-07-03', 'Lahore'),
-- Records for July 4
(93281, 'Normal', '13:10:00', '2024-07-04', 'Islamabad'),
(67423, 'Diet', '13:20:00', '2024-07-04', 'Karachi'),
-- Records for July 5
(24987, 'Normal', '13:30:00', '2024-07-05', 'Lahore'),
(35672, 'Normal', '13:40:00', '2024-07-05', 'Islamabad'),
(92783, 'Normal', '13:50:00', '2024-07-05', 'Karachi'),
-- Records for July 6
(18264, 'Normal', '14:00:00', '2024-07-06', 'Lahore'),
(73421, 'Normal', '14:10:00', '2024-07-06', 'Islamabad'),
(98342, 'Diet', '14:20:00', '2024-07-06', 'Karachi'),
-- Records for July 7
(74528, 'Normal', '14:30:00', '2024-07-07', 'Lahore'),
(68273, 'Normal', '14:40:00', '2024-07-07', 'Islamabad'),
(39216, 'Normal', '14:50:00', '2024-07-07', 'Karachi'),
(21789, 'Normal', '15:00:00', '2024-07-07', 'Lahore'),
-- Records for July 8
(13487, 'Normal', '13:10:00', '2024-07-08', 'Islamabad'),
(87432, 'Diet', '13:20:00', '2024-07-08', 'Karachi'),
(56123, 'Normal', '13:30:00', '2024-07-08', 'Lahore'),
-- Records for July 9
(98234, 'Normal', '13:40:00', '2024-07-09', 'Islamabad'),
(47382, 'Normal', '13:50:00', '2024-07-09', 'Karachi'),
(23781, 'Normal', '14:00:00', '2024-07-09', 'Lahore'),
-- Records for July 10
(76341, 'Normal', '14:10:00', '2024-07-10', 'Islamabad'),
(28615, 'Diet', '14:20:00', '2024-07-10', 'Karachi'),
(90432, 'Normal', '14:30:00', '2024-07-10', 'Lahore'),
-- Records for July 11
(18790, 'Normal', '14:40:00', '2024-07-11', 'Islamabad'),
(31489, 'Normal', '14:50:00', '2024-07-11', 'Karachi'),
(64173, 'Normal', '15:00:00', '2024-07-11', 'Lahore'),
-- Records for July 12
(52837, 'Diet', '13:10:00', '2024-07-12', 'Islamabad'),
(90376, 'Normal', '13:20:00', '2024-07-12', 'Karachi'),
(16254, 'Normal', '13:30:00', '2024-07-12', 'Lahore'),
(78901, 'Normal', '13:40:00', '2024-07-12', 'Islamabad'),
-- Records for July 13
(56234, 'Normal', '13:50:00', '2024-07-13', 'Karachi'),
(18392, 'Normal', '14:00:00', '2024-07-13', 'Lahore'),
(93281, 'Normal', '14:10:00', '2024-07-13', 'Islamabad'),
(67423, 'Diet', '14:20:00', '2024-07-13', 'Karachi'),
-- Records for July 14
(24987, 'Normal', '14:30:00', '2024-07-14', 'Lahore'),
(35672, 'Normal', '14:40:00', '2024-07-14', 'Islamabad'),
(92783, 'Normal', '14:50:00', '2024-07-14', 'Karachi'),
(18264, 'Normal', '15:00:00', '2024-07-14', 'Lahore'),
-- Records for July 15
(73421, 'Normal', '13:10:00', '2024-07-15', 'Islamabad'),
(98342, 'Diet', '13:20:00', '2024-07-15', 'Karachi'),
(74528, 'Normal', '13:30:00', '2024-07-15', 'Lahore'),
-- Records for July 16
(68273, 'Normal', '13:40:00', '2024-07-16', 'Islamabad'),
(39216, 'Normal', '13:50:00', '2024-07-16', 'Karachi'),
-- Records for July 17
(21789, 'Normal', '14:00:00', '2024-07-17', 'Lahore'),
(13487, 'Normal', '14:10:00', '2024-07-17', 'Islamabad'),
-- Records for July 18
(87432, 'Diet', '14:20:00', '2024-07-18', 'Karachi'),
(56123, 'Normal', '14:30:00', '2024-07-18', 'Lahore'),
(98234, 'Normal', '14:40:00', '2024-07-18', 'Islamabad'),
(98342, 'Diet', '13:20:00', '2024-07-18', 'Karachi'),
(47382, 'Normal', '14:50:00', '2024-07-18', 'Karachi'),
-- Records for July 19
(23781, 'Normal', '15:00:00', '2024-07-19', 'Lahore');


-- Meal Records
INSERT INTO meal_record (Emp_ID, meal_pref, meal_time, meal_date, city) VALUES
-- Records for July 17
(73421, 'Normal', '13:10:00', '2024-07-17', 'Islamabad'),
(98342, 'Diet', '13:20:00', '2024-07-17', 'Karachi'),
(74528, 'Normal', '13:30:00', '2024-07-17', 'Lahore'),
(18790, 'Normal', '14:40:00', '2024-07-17', 'Islamabad'),
(31489, 'Normal', '14:50:00', '2024-07-17', 'Karachi'),
(78901, 'Normal', '14:40:00', '2024-07-17', 'Islamabad'),
(56234, 'Normal', '14:50:00', '2024-07-17', 'Karachi'),
(18392, 'Normal', '15:00:00', '2024-07-17', 'Lahore'),
-- Records for July 18
(68273, 'Normal', '13:40:00', '2024-07-18', 'Islamabad'),
(39216, 'Normal', '13:50:00', '2024-07-18', 'Karachi'),
(73421, 'Normal', '13:10:00', '2024-07-18', 'Islamabad'),
(74528, 'Normal', '13:30:00', '2024-07-18', 'Lahore'),
(90376, 'Normal', '13:20:00', '2024-07-18', 'Karachi'),
(16254, 'Normal', '13:30:00', '2024-07-18', 'Lahore'),
(78901, 'Normal', '13:40:00', '2024-07-18', 'Islamabad'),
(76341, 'Diet', '14:10:00', '2024-07-18', 'Islamabad'),
(28615, 'Diet', '14:20:00', '2024-07-18', 'Karachi'),
(90432, 'Diet', '14:30:00', '2024-07-18', 'Lahore'),
(76341, 'Diet', '13:10:00', '2024-07-18', 'Islamabad'),
(28615, 'Diet', '13:20:00', '2024-07-18', 'Karachi'),
(90432, 'Normal', '13:30:00', '2024-07-18', 'Lahore'),
(18790, 'Normal', '13:40:00', '2024-07-18', 'Islamabad');



SELECT * FROM meal_record
WHERE meal_date = '2024-07-18';

-- DROP TABLE meal_record;
 -- *********************************************
