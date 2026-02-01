# SereneFocus

## Project Overview


## User & System Requirements


## Product Backlog

## System Design
The system consists of timer components as a progress bar, session configuration logic with session and break duration controls, session progress tracking through the progress bar, end-of-session reflection input handling and personalisation (themes and session controls). 

 User interaction flow follows these stages: 
 - user selects session duration
 - the system initialises the timer state. 
 - Timer runs in the background, and the bar tracks session progress.
- User pauses, resets or completes the session.
 - User presents reflection to start or skip.
 - Reflection is written and stored locally via the browser.

This design supports the client-side architecture described earlier for single-user, local session use on the browser. 

Session data is handled by the focus session state, stored from session controls set when the user begins a session.  This is updated through the progress bar and session completion transition when users start a new session or take a break. 
Design choices are stored in the personalisation panel in the focus session state when applied in the browser session upon user input. 
Reflections are stored in the reflection state when the user continues to start a new session from the focus session state, stored after the user exits the prompt. 

Design choices prioritise simplicity for single-user, local sessions, and minimal interactions to support user interactions and reduce cognitive load.
Feedback is delayed to enable users to study productively, without urgency or time pressure cues with end-of-session reflection prompting. 
Personalisation is optional to maintain simplicity and usability for users with sensory or stimulation challenges.




## Architecture & Technology Choices
This project is a web-based application that runs on desktop and laptop devices and is designed for students and independent learners.  
The system follows a client-side architecture, where it is based within the browser and locally executed for users requiring no server to operate. 

There is a modular structure, where components separate based on responsibility and ensure a cleanly structured layout for the user. 
The structure supports efficient maintenance and visual clarity for the users through simplicity and removing complexity. 
Existing responsibilities include time tracking for user sessions, user interaction, session configuration completed by the user, and reflection logging by the user at the end of sessions. 
A client side and modular approach is used to align with the scope of the project, designed for simplicity and implemented to work for solo development. This ensures system maintainability and reduces cognitive load for users of the timer. 

The architecture does not create and store user accounts, including server persistence or cross-device syncing, as it is designed for single-user use, browser-based interactions, not multi-user, cross-device use. 


## Project Management Progression

## Testing & Validation

## Project Reflection and Evaluation
