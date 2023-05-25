# Read Me

### Problem and Solution:
UI:  https://wonderful-coast-001950d10.3.azurestaticapps.net/  
Frontend Repo: https://github.com/adyang94/Blueprint-Frontend  
Backend Repo:  https://github.com/adyang94/Blueprint-Backend  

For this problem, I created an API and web UI both hosted on Azure Web Services.  The API is a simple Node/Express application and the web UI is created in React with Chakra UI.

I did also build the UI to handle in the case there may be multiple sections to the questionnaire.  This can be simulated by cloning the repo, uncommenting the "TODO:" comments in the Questionnaire.js file, running `npm i` to install dependencies, and running `npm start`.  The sample json file of questions can be found in sampleQuestions.json on this Frontend Repo.  

The backend follows a basic MVC set up with 2 endpoints. The "/fetch-questions" endpoint is set up to retrieve all questions for the questionnaire and return it in the format mentioned in the task.  The "/score-assessments" endpoint is used to evaluate the answers given from the user, and returns the level-2 assessments based on the mapping criteria given. I've also added additional comparators when used for determining if meeting the threshold of the level 2 criteria (this is found in scoringController.js in the Backend Repo).

### Technical Choices:
For my design, I decided to use React with Chakra UI for the frontend, and NodeJS/Express for the backend.  As far as technical reasoning, React is a very popular framework that allows for good organization and maintanability of the code.  Chakra UI is popular component library that provides consistent design and speeds up the development process with pre-styled components.

Node/Express is commonly used for a lot of web applications using Javascript for the backend.  This allows for reduced learning curve which is an important consideration for engineering resource management.  Node is also great for handling asynchronous tasks, fairly lightweight, and has a vast amount of libraries; Express is unopinionated and well supported within the community.  Having these considerations in mind, Node/Express is great for quickly spinning up an application, such as this coding exam. 

### Deploying this as to a true production environment
There are a variety of considerations that I would ask before deciding to deploy this as a true production app.  A couple of questions that I would want to clarify would include:
- What is the daily active user average?
- Who is are going to be the stakeholders and users of the UI and data?
- What does the traffic volume and pattern look like?
- Is real time analytics needed?
- What types of monitors/alerts should there be when analyzing patient data (warning signs of suicide, mental breakdowns, etc.)?

For deploying this application to production, I would likely use cloud services such as EC2 or Azure Web App with an auto-scaler if there are significant spikes or uneveness in traffic.  Combining this with a load balancer to distribute traffic across multiple instances would allow us to ensure higher availability and scalability.  

Implementing a cache could also help with fast performance when loading the questions, especially if there are some question sets that are much more popular than others and often retrieved.

In regards to security, I would make sure we followed strong security protocols such as OAuth 2 and 2FA for authenticating users. Encrypting the data that is transferred between machines is also very important to make sure PHI is not easily readable and exposed.  I would also suggest creating different levels of access and make sure users are authorized only for the needed privileges that are necessary.  Having a logging system for user events could also make it useful for resolving security issues for backtracking.

There are a couple of ways that I would consider to help make troubleshooting easier.  As mentioned previously, a logging system would be useful for identifying not just security issues, but also other issues related to performance, bugs, etc.  This idea combined with dashboards and alerts would be great to get insights in a timely manner if issues do arise.  I also believe being proactive in finding problems will help with future troubleshooting of problems.  Tests such as performance testing and penetration testing could reveal bottlenecks and vunerabilities that could give insight into what would be most likely to fail and where to look first when troubleshooting.

### Improvement
Some aspects for improvement if given more time would include developing or integrating a more robust authentication and authorization system.  This is key especially for working with sensitive data.  I would also like to add more tests such as unit tests or end-to-end tests to make sure breaking changes are caught sooner and coverage is strong.

I appreciate the time you've taken to review, and please don't hesistate to reach out if there are any questions still!
https://www.linkedin.com/in/andrew-yang-715a07b5/
