CREATE SCHEMA IF NOT EXISTS StudentDiscountsMap;
-- DO NOT RUN THIS CODE IF THE DATABASE IS POPULATED
-- THIS CODE WILL RESET THE DATABASE
USE StudentDiscountsMap;

DROP TABLE IF EXISTS Comments;
DROP TABLE IF EXISTS Submissions;
DROP TABLE IF EXISTS Login;

CREATE TABLE Login (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    UserType ENUM('User', 'Moderator', 'Admin') NOT NULL
);

CREATE TABLE Submissions (
    SubmissionID INT PRIMARY KEY AUTO_INCREMENT,
    Title VARCHAR(100) NOT NULL,
    Description TEXT NOT NULL,
    Location VARCHAR(1000) NOT NULL, -- GPS location
    Type VARCHAR(50) NOT NULL, -- Type of discount (e.g., restaurant, clothing, electronics)
    LastUpdated DATE NOT NULL,
    ValidUntil DATE NOT NULL,
    Rating DECIMAL(3, 1) DEFAULT 0, -- Rating out of 5
    SubmitterID INT NOT NULL, -- Foreign key referencing UserID from Login table
    FOREIGN KEY (SubmitterID) REFERENCES Login(UserID)
);

CREATE TABLE Comments (
    CommentID INT PRIMARY KEY AUTO_INCREMENT,
    SubmissionID INT NOT NULL, -- Foreign key referencing SubmissionID from Submissions table
    Comment TEXT NOT NULL,
    CommenterID INT NOT NULL, -- Foreign key referencing UserID from Login table
    CommentDate DATETIME NOT NULL,
    FOREIGN KEY (SubmissionID) REFERENCES Submissions(SubmissionID),
    FOREIGN KEY (CommenterID) REFERENCES Login(UserID)
);