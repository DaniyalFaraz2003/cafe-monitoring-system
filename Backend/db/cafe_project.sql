CREATE DATABASE cafe_project;

USE cafe_project;

CREATE TABLE meal_record (
Emp_ID INT PRIMARY KEY,
Emp_Name VARCHAR(50),
meal_time TIME ,
meal_date DATE
);

DELIMITER //
CREATE TRIGGER date_time
BEFORE INSERT
ON meal_record FOR EACH ROW
BEGIN
	SET NEW.meal_time = CURRENT_TIME();
    SET NEW.meal_date = CURRENT_DATE();
END //
DELIMITER ;

INSERT INTO meal_record(Emp_ID, Emp_Name)
VALUES (123456, "Zohaib");

SELECT * FROM meal_record;

CREATE TABLE admin_info(
User_id VARCHAR(20),
Password Varchar(20)
);

