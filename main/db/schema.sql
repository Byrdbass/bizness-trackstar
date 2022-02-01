DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE departments (
    department_id INT NOT NULL AUTO_INCREMENT;
    department_name VARCHAR(100) NOT NULL;
)