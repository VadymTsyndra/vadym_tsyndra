This project is a React application written in TypeScript and SCSS. It features a "Choose fresh ideas to do" section where cards are loaded from an API server. The user can select one of the cards, which then falls into a slider component. Clicking on a card within the slider adds it to the "challenges" table as a completed task. Additionally, one point is added to the "achievements" section based on the theme of the completed task.

The "achievements" section consists of five circles, each representing a different theme. The number of points allocated to each theme depends on the tasks completed within that theme.

The application also utilizes local storage to store data. The backend part of the project is connected to a MongoDB database. Underneath the table, there are two buttons: "Save Data" and "Get Data". Clicking "Save Data" saves information about the user's achievements to the database. Even if the local storage is cleared, clicking "Get Data" retrieves the saved information from the database.

Overall, this application allows users to select ideas, complete tasks, earn achievements, and store and retrieve data using local storage and a MongoDB database.
