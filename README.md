# fitness-tracker

# describtion: 
The Fitness Tracker App helps users manage their workouts by logging exercises, sets, reps, and weights for push, pull, and leg routines. It allows easy editing or removal of workouts. With secure user accounts and customizable workout templates, the app keeps fitness routines organized and motivates users to reach their goals.

# User Stories: 
1.	As a user, I want to create a new workout so that I can track my exercises for the day.
2.	As a user, I want to view a list of my past workouts so that I can monitor my progress.
3.	As a user, I want to edit a workout so that I can update my exercise details if they change.
4.	As a user, I want to delete a workout so that I can remove old or incorrect entries.
5.	As a user, I want to log my daily meals so I can track my calorie and macronutrient intake.
6. as a user i want to be able to add new exercises  
7. as a user i want to be able to add my previous exercises 

# Technologies Used : 
-	Node.js
-	Express.js
-	React Front-End
-	MongoDB
-	JavaScript
-	CSS for styling


# ERD
<img src="/Planning/Final ERD.png">

# Mock-Ups:
- Home
<img src="/Planning/Home.png">

- all workouts
<img src="/Planning/all-Workout.png">

- adding workout 
<img src="/Planning/addWorkOut.png">

- adding exercise
<img src="/Planning/add-Exercise.png">

   
# Pseudo-code
```
// LANDING PAGE
Display "Welcome to Workout Tracker"
Display navigation bar with "Sign In" and "Sign Up" options

IF user selects "Sign Up":
    Prompt user for registration details (username and password)
    Generate a unique token for the user
    Save user details in the database
    Redirect to Home Page

IF user selects "Sign In":
    Prompt user for email and password
    Authenticate user (token-based authentication)
    IF authentication is successful:
        Redirect to Home Page
    ELSE:
        Display "Invalid credentials" error message

// HOME PAGE
IF user is logged in:
    Display a personalized welcome message
    Display navigation bar with options: "Create Workout", "View Workouts", "Log Meals", "Add Exercise", "Log Out"

// CREATE WORKOUT
IF user selects "Create Workout":
    Prompt user to input:
        - Workout Date
        - Exercises (name, duration, sets, reps)
    Save workout details with user ID as the owner in the database
    Display success message
    Redirect to "View Workouts"

// VIEW WORKOUTS
IF user selects "View Workouts":
    Retrieve workouts created by the user from the database
    Display a list of workouts with options to:
        - View Details
        - Edit
        - Delete
    
    // VIEW WORKOUT DETAILS
    IF user selects a workout:
        Display full workout details

    // EDIT WORKOUT
    IF user selects "Edit":
        Check if logged-in user is the workout owner
        Allow user to update:
            - Exercises
            - Duration
            - Sets and Reps
        Save updates to the database
        Redirect to "View Workouts"

    // DELETE WORKOUT
    IF user selects "Delete":
        Check if logged-in user is the workout owner
        Prompt user for confirmation
        IF confirmed:
            Remove workout from the database
            Display success message

// LOG MEALS
IF user selects "Log Meals":
    Prompt user to input:
        - Meal Details (food name, calories, macronutrient breakdown)
    Save meal details with user ID in the database
    Display success message

// ADD EXERCISE
IF user selects "Add Exercise":
    Prompt user to input:
        - Exercise Name
        - Exercise Type
        - Target Muscle Group
    Save exercise details to the database
    Display success message

// ADD PREVIOUS EXERCISES
IF user selects "Add Previous Exercises":
    Prompt user to input:
        - Exercise Name
        - Workout Date
        - Duration
        - Sets and Reps
    Save previous exercise details in the database
    Display success message

// LOG OUT
IF user selects "Log Out":
    Clear session
    Redirect to Landing Page

ELSE (user is a guest):
    Display general information about the workout tracker
    Prompt guest to "Sign In" or "Sign Up" to access features
```

