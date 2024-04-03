# Student Discount Map

This document proposes a web application where users are able to share locations regarding specific discounts given to students. The user will be able to both provide entries and also browse entries. The entries made on to the application will be displayed on to a map, where users can then click the entry based on geographical location and read more regarding the specific entry. Each user would then be able to review the entry based on usefulness, correct any incorrect information, etc.

# Vision Statement

FOR students looking for up-to-date information on student discounts and community-sourced information on deals, discounts, and locations, THE Student Discounts Map is an interactive web application THAT provides a platform for users to share, discover, and review student discounts and other deals based on geographical locations, in a community setting.

UNLIKE existing discount websites, which often lack community engagement and interactive mapping features, OUR product encourages users themselves to contribute, rate submissions, and explore discounts conveniently on an interactive map, enhancing the overall user experience, as well as allowing for a self-sustaining environment for active users.

# Personas

## Persona 1:
Emily Zhang, an 18-year-old biology student Freshman at the College of Science and Technology in Temple University, recently came to Philadelphia from her hometown in Scranton, Pennsylvania. She is unfamiliar with the landscape in Philadelphia and does not know of the local restaurants in her new area. As a student, she frequently struggles balancing eating outside with budgeting her limited finances. She actively browses different websites to look for student discounts, but often finds misleading, expired, or inaccurate information on those discounts. Upon finding the Students Discounts Map, she is able to access student discounts without struggle and get up to date community verified information.

## Persona 2:
Marcus Johnson is a 26-year-old MBA student at the Fox School of Business in Temple University. He's originally from Chicago and moved to Philadelphia for his graduate studies. Marcus is a meticulous planner, always looking for ways to optimize his time and resources. With a busy schedule filled with classes, internships, and networking events, Marcus values efficiency and reliability in the tools he uses. He's particularly interested in finding discounts on professional attire and electronics, as he wants to maintain a polished appearance without breaking the bank. Marcus relies heavily on user reviews to ensure the quality and authenticity of deals, as he believes in making informed decisions. He is tech-savvy and appreciates advanced digital platforms that offer practical visual representations of the information he is looking for.

## Persona 3:
Laura Smith is a 51-year-old single parent living in Philadelphia. Her son, Michael, is currently enrolled as a student at the Community College of Philadelphia. Laura works as a receptionist at a local law firm, where she strives to make ends meet and provide for her family. As a single parent working full-time, Laura's schedule is often busy and hectic. She juggles multiple responsibilities, from managing household expenses to supporting her son's academic endeavors. Finding the time to search for student discounts and deals can be challenging, especially when faced with competing priorities. The convenience of the Student Discounts Map allowed Laura to rely on the application as a valuable resource for helping her son navigate the financial challenges of college life.

## Persona 4:
Thandiwe Mbeki is a 21-year-old female international student from South Africa pursuing her undergraduate degree in Computer Science at the University of Pennsylvania. Having grown up in Johannesburg, South Africa, Thandiwe faces unique challenges related to adjusting to life in a new country. She may encounter language barriers, cultural differences, and unfamiliar academic systems that require her to adapt and learn quickly. Thandiwe discovers the Student Discounts Map as a helpful tool for navigating life in Philadelphia on a student budget. She appreciates the platform's user-friendly interface and comprehensive database of discounts and deals available in the area. Thandiwe uses the application to find discounts on everyday essentials such as groceries, transportation, and dining options, allowing her to save money while exploring the city. She also enjoys connecting with other students through the platform's community features, where she can share tips and recommendations with her peers.

## Persona 5:
Jamal Patel is a 16-year-old high school student attending Preparatory Charter High School in Philadelphia. He is a lifelong resident of the city, growing up in the vibrant and diverse neighborhoods of West Philadelphia. Jamal works part-time as a babysitter for his neighbor, and has a very limited spending budget each month. Jamal discovered the Student Discounts Map as a helpful tool for saving money and exploring his city on a budget. He appreciates the platform's user-friendly interface and comprehensive database of discounts and deals available to students in Philadelphia. Jamal uses the application to find discounts on school supplies, clothing, and entertainment options, allowing him to stretch his limited resources further. Jamal also discovered an interest for the arts through the website, now having an interest in attending museums and theaters.

# Initial List of User Features

1. User Registration: Users can create an account to access the platform's features and functionalities.
2. User Login: Registered users can log in to their accounts to access personalized content and settings.
3. Submit Discount: Users can submit new discounts and deals to the platform, including details such as location, description, and validity.
4. Browse Discounts: Users can browse and search for discounts and deals based on categories, locations, and keywords.
5. Interactive Map: Users can view discounts and deals on an interactive map, allowing for visual exploration and navigation.
6. View Discount Details: Users can view detailed information about each discount, including descriptions, terms, and user reviews. 
7. Rate Discounts: Users can rate and review discounts based on their experience, usefulness, and accuracy.
8. Edit Discounts: Users can edit and update discount information to ensure accuracy and relevance.

# How to run
Navigate to the root directory of the project
```bash
cd student-discounts-map
```

## Establishing Database:
1. Install MySQL
2. Create a database called `StudentDiscountsMap`
3. Navigate to the `database/` directory
```bash
cd database
```
4. Run the setup.sql script located in `database/setup.sql/` to create the necessary tables and populate the database.
5. Return to the root directory of the project
```bash
cd ..
```

## Running the Backend:
1. Navigate to the `backend/` directory
```bash
cd backend
```
2. Run the main.py script located in `api/main.py/` to start the backend server.
```bash
python api/main.py
```
3. Return to the root directory of the project
```bash
cd ..
```

## Running the Frontend:
1. Navigate to the `frontend/` directory
```bash
cd frontend
```
2. Run the following command to install the necessary dependencies
```bash
npm install
```
3. Run the following command to start the frontend server
```bash
npm start
```
4. Open a web browser and navigate to `http://localhost:3000/` to view the application.

### Risk Table

| Risk                       | Category | Probability | Impact |               RMMM               |
| -------------------------- | :------: | :---------: | :----: | :------------------------------: |
| VPC rental exceeds budget. |    CU    |     %30     |   3    | Turning off VPC when not in use. |
| Google Cloud SQL exceeds budget. |    CU    |     %30     |   3    | Switching to local file storage. |
| Security certificates exceed budget. |    CU    |     %90     |   4    | Not purchasing certificates. |
| Domain name exceeds budget. |    CU    |     %90     |   4    | Not purchasing domain name. |
|Poor communication from disparate use of communication platforms| ST | %80 | 3 | Assigning a communication officer to update the team.|
| Late submissions on assigned tasks. | ST | %40 | 1 | Use of effective time management skills. |
| Poor integration of separate teams' codebases. | ST | %30| 2 | Assigning extra time during integration phase. |
| Inexperience with React.js | ST | %10 | 4 | Teaching team members React.js. |
| Performance issues with VPC. |   PS  | %20  | 2 | Switching to Amazon cloud. |
| Difficulties working with map API. | ST | %30 | 3 | Switching to Google Maps. | 
|Scope of features exceeds allotted time. | PS | %40 | 2 | Removing unnecessary features. |
| Difficulties implementing customer login. | PS | %20 | 3 | Changing to anonymous submissions.|
| Security concerns regarding customer login data. | PS | %20 | 3 | Changing to anonymous submissions.|
|Fraudulent submissions are entered by users. | PS | %90 | 3 | Implement a vetting system.|
|Duplicate submissions are entered by users. | PS | %90 | 4 | Combining duplicate submissions into one.|
|Map pins persist past sale duration. | DE | %30 | 4 | Implementing a timeout system on pins.| 
|User traffic exceeds expectations. | PS | %5 | 3 | Using a Cloud auto scaler.|


## Impact values
- 1 - Catastrophic
- 2 - Severe
- 3 - Marginal
- 4 - Negligible