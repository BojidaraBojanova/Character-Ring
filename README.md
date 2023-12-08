# Game Characters SPA

Welcome to the Game Characters Single Page Application (SPA) repository! This application enables users to create and manage game characters, explore a character catalog, and perform various actions such as user registration, authentication, and CRUD operations. The project structure is built on a local REST service, and automated tests are included.

**Note:** This project is part of a task from [SoftUni](https://softuni.org/).

## Table of Contents
- [Overview](#overview)
- [Technical Details](#technical-details)
- [Application Requirements](#application-requirements)
   - [Navigation Bar](#navigation-bar)
   - [Home Page](#home-page)
   - [Login User](#login-user)
   - [Register User](#register-user)
   - [Logout](#logout)
   - [Dashboard](#dashboard)
   - [Adding a New Character](#adding-a-new-character)
   - [Character Details](#character-details)
   - [Editing a Character](#editing-a-character)
   - [Delete a Character](#delete-a-character)
   - [Like If Is Useful (Bonus)](#like-if-is-useful-bonus)
- [Appendices](#appendices)
   - [Using the Local REST Service](#using-the-local-rest-service)
   - [Running the Test Suite](#running-the-test-suite)

## Overview
The Game Characters SPA is a fully functional Single Page Application (SPA) built using HTML, CSS, and JavaScript. It communicates with a local REST service to handle user authentication, character records CRUD operations, and additional functionalities.

## Technical Details
The project scaffold includes a package.json file with common dependencies. The HTML and CSS files provide the structure and styling for the application. A local REST service is included to handle data and user-related operations.

**Resources:** The project resources, including the project scaffold and local REST service, are provided by [SoftUni](https://softuni.bg/).

## Application Requirements
### Navigation Bar
- Implement a responsive NavBar with dynamic links based on user authentication status.

### Home Page
- Implement a static Home page for the app using the structure provided in the given resources.

### Login User
- Allow existing users to log in using their email and password.
- Use the provided REST service for user authentication.
- Redirect the user to the Home page upon successful login.

### Register User
- Allow users to register with a valid email and password.
- Use the provided REST service for user registration.
- Redirect the user to the Home page upon successful registration.

### Logout
- Allow logged-in users to log out, clearing session information.
- Use the provided REST service for user logout.
- Redirect the user to the Home page upon successful logout.

### Dashboard
- Display a list of characters fetched from the local REST service.
- Each character card has a "More Info" button leading to detailed information.

### Adding a New Character
- Logged-in users can add new characters via a dedicated form.
- Form validation ensures all required fields are filled.
- Use the provided REST service to create a new character record.
- Redirect the user to the Characters page upon successful character creation.

### Character Details
- Users can view detailed information about a selected character.
- For creators of a character record, Edit and Delete buttons are available.

### Editing a Character
- Authors can edit their own character records.
- The Edit page is pre-populated with existing data, and form validation is implemented.
- Use the provided REST service to edit a character record.
- Redirect the user to the Details page upon successful character edit.

### Delete a Character
- Logged-in users can delete their own character records.
- A confirmation dialog is displayed before deletion.
- Use the provided REST service to delete a character record.
- Redirect the user to the Characters page upon successful character deletion.

### Like If Is Useful (Bonus)
- Allow logged-in users to like characters (excluding their own).
- Display a like button and count on each character card.
- Use the provided REST service to handle likes.
- Refresh the UI to update the like count upon a successful like.

## Appendices

### Using the Local REST Service
- For information on using the local REST service, refer to the [documentation](#).

### Running the Test Suite
- For details on running the automated test suite, refer to the [documentation](#).
