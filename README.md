# Ticketing & Notes App
The idea for this web-app came from my uncle, who runs a small phone repair shop. They were using sticky notes to jot down info about services and products on customer devices. Total chaos, right? Notes were getting lost, and nobody knew who wrote what. It was a real mess. So, I took matters into my own hands and created a no-nonsense web-app for centralized ticketing and note-taking.

## Tools Used in this project
I've done multiple frontend and backend projects, and looking to do a full stack project in order to get a clear understanding of how the frontend and backend connect to each other.So I decided to do this project using MERN stack.

We developed a backend rest api in MVC design pattern using `Node.js`, `Express.js`, and `MangoDB` as database. For the frontend, we use `HTML`, `CSS`, `JavaScript`, `React` and `Redux`. We also use `JWT tokens` for autentication and securely transferring data between sever and client. Lastly we use `render.com` to host the website.

## Requirements
The following notes are the requirements we have to satisty for this web-app.

- Update the existing sticky note system
- Incorporate a public-facing page featuring essential contact information
- Integrate an employee login functionality into the notes app
- Introduce a welcoming page post-login
- Ensure user-friendly navigation
- Showcase the current user and their assigned role
- Add a logout option for users
- Enforce a requirement for users to log in at least once per week
- Implement a swift method to revoke employee access if necessary
- Allocate notes to specific employees
- Include a ticket number, title, note body, as well as created and updated dates for each note
- Categorize notes as either OPEN or COMPLETED
- Define user roles as Employees, Managers, or Admins
- Specify that only Managers or Admins possess the authority to delete notes
- Enable anyone to create a note (e.g., during customer check-in)
- Limit employees to viewing and editing only their assigned notes
- Empower Managers and Admins to view, edit, and delete all notes
- Reserve access to User Settings exclusively for Managers and Admins
- Clarify that Managers and Admins alone can create new users
- Highlight desktop mode as the primary focus, with mobile availability as a secondary consideration.
