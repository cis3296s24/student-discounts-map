# Student Discount Map

This document proposes a web application where users are able to share locations regarding specific discounts given to students. The user will be able to both provide entries and also browse entries. The entries made on to the application will be displayed on to a map, where users can then click the entry based on geographical location and read more regarding the specific entry. Each user would then be able to review the entry based on usefulness, correct any incorrect information, etc.

# Vision Statement

The Student Discount Map is a valuable resource designed specifically for students eager to uncover substantial savings and attractive discounts within their vicinity. It draws inspiration from popular services such as Honey, facilitating a seamless money-saving experience for its users. This platform sets itself apart from competitors by relying on user-generated content, allowing students to share and review deals they've discovered. This approach not only enriches the database with a diverse range of discounts but also ensures the authenticity and reliability of the information provided, thanks to the real-life experiences and evaluations contributed by users.

# Personas 1:

Emily Zhang, a diligent 18-year-old first-year college student majoring in Biology, is on a quest to maintain her budget while navigating through her new life away from home. Living off-campus in a small apartment, Emily struggles to balance her academics, part-time job at the local library, and her personal hobbies, including photography and hiking. She relies on her smartphone for almost everything - from managing her schedule to keeping in touch with family. Emily seeks a straightforward, efficient app that can help her discover student discounts on essential items like groceries, textbooks, and photography supplies without wasting time she doesn't have.

# Personas 2:

Marcus Johnson, a 35-year-old working professional returning to education to pursue an MBA, is acutely aware of the financial strain of balancing tuition fees, family responsibilities, and maintaining a professional image. With extensive experience in the corporate world and a family to support, Marcus is not the typical student; he is tech-savvy and demands efficiency and reliability from the digital services he uses. He needs a platform where he can quickly filter through deals on professional attire and tech gadgets, read in-depth reviews to assess value, and make informed decisions without compromising his time or budget.

# Personas 3:

Laura Smith, a 28-year-old art history major, immerses herself in the cultural scene of her city while juggling the demands of academic life and a part-time job at a local art museum. Passionate about supporting local art scenes and small businesses, Laura is always on the lookout for discounts and deals that align with her artistic and cultural interests, such as art supplies, gallery events, and unique local eateries. She desires a community-driven app where she can share and discover hidden gems within her city, emphasizing user-generated content and experiences to build a supportive network of like-minded students.

# Personas 4:

Alex Torres, a 23-year-old junior with a major in Sports Science, is passionate about staying fit and leading a healthy lifestyle. As a collegiate athlete, Alex faces the constant challenge of finding affordable options to maintain his fitness regime, including gym memberships, sports gear, and nutritious food. Residing in an apartment near campus with fellow athletes, he seeks a user-friendly platform that not only helps him find relevant deals but also enables him to share discoveries with his teammates. Alex values peer reviews and social sharing features that can help him and his friends make the best choices for their athletic needs while managing their student budgets.

![This is a screenshot.](images.png)

# How to run

Provide here instructions on how to use your application.

- Download the latest binary from the Release section on the right on GitHub.
- On the command line uncompress using

```
tar -xzf
```

- On the command line run with

```
./hello
```

- You will see Hello World! on your terminal.

# How to contribute

Follow this project board to know the latest status of the project: [http://...]([http://...])

### How to build

- Use this github repository: ...
- Specify what branch to use for a more stable release or for cutting edge development.
- Use InteliJ 11
- Specify additional library to download if needed
- What file and target to compile and run.
- What is expected to happen when the app start.

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

