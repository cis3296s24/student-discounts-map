# Student Discount Map

This document proposes a web application where users are able to share locations regarding specific discounts given to students. The user will be able to both provide entries and also browse entries. The entries made on to the application will be displayed on to a map, where users can then click the entry based on geographical location and read more regarding the specific entry. Each user would then be able to review the entry based on usefulness, correct any incorrect information, etc.

# Vision Statement

FOR students looking for up-to-date information on student discounts and community-sourced information on deals, discounts, and locations, THE Student Discounts Map is an interactive web application THAT provides a platform for users to share, discover, and review student discounts and other deals based on geographical locations, in a community setting.

UNLIKE existing discount websites, which often lack community engagement and interactive mapping features, OUR product encourages users themselves to contribute, rate submissions, and explore discounts conveniently on an interactive map, enhancing the overall user experience, as well as allowing for a self-sustaining environment for active users.

# Personas 1:

Emily Zhang, a 20-year-old biology student, is looking for a user-friendly app to quickly find reliable and clearly described local discounts on food, textbooks, and hiking gear to manage her tight budget alongside her studies and part-time job.

# Personas 2:

Marcus Johnson, a 22-year-old MBA student, seeks an advanced digital platform where he can efficiently filter for professional attire and electronics discounts, relying heavily on detailed user reviews to ensure the quality and authenticity of deals.

# Personas 3:

Laura Smith, a 24-year-old art history major, wants a mobile-friendly service to discover and share unique, artsy deals and discounts within a community that appreciates local coffee.

# Personas 4:

Alex Torres, a 19-year-old freshman with a keen interest in sports and fitness, is in need of a straightforward, engaging tool to locate and evaluate student discounts on gym memberships, sports apparel, and healthy eating options, influenced by peer reviews and social sharing features.


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