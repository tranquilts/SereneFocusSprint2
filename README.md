 # SereneFocus

## Project Overview 
SereneFocus is a web-based application designed to support students and independent learners who find distraction, cognitive overload and concentration challenging to manage during study sessions. 

The system aims to foster a calm, responsive study environment that adapts to users' attentional and cognitive capacities without placing pressure or overstimulation.

The application employs a low-friction, user-centred design approach that simplifies interaction and minimises visual complexity in order to effectively manage cognitive load. Core functionality supports structure, time-ordered study sessions through set timer controls, including start, pause and reset.

SereneFocus applies simplicity, ease of navigation and structured interaction to support users in sustaining concentration with an uninterrupted, distraction-free environment. 

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

<img width="856" height="593" alt="image" src="https://github.com/user-attachments/assets/7ddd4c36-8611-4fbb-bb1e-4c704daae33e" />
<img width="856" height="677" alt="image" src="https://github.com/user-attachments/assets/9f9a3ac7-69cc-4ed7-a3a2-cb0c6cbe6ebb" />
<img width="492" height="348" alt="Transition Mode" src="https://github.com/user-attachments/assets/202ff4b9-5323-4397-84fb-f90cb1e8e1a6" />
<img width="856" height="609" alt="image" src="https://github.com/user-attachments/assets/92d5c2e4-6413-45ff-b8ee-6345a4e1fef5" />
<img width="856" height="653" alt="image" src="https://github.com/user-attachments/assets/fde8b276-6eea-4d9b-b783-aacb36ccf386" />

<img width="394" height="279" alt="Light Mode" src="https://github.com/user-attachments/assets/e8d230bc-b575-451d-9c01-71818b94a566" />

<img width="395" height="281" alt="Cool Focus Mode" src="https://github.com/user-attachments/assets/916a3379-a65c-44dd-9de9-5aa6e6893420" />

<img width="397" height="285" alt="Warm Neutral Mode" src="https://github.com/user-attachments/assets/ce71424a-2e46-41f4-8046-f28389d69d95" />

<img width="396" height="281" alt="Mode 4" src="https://github.com/user-attachments/assets/e4c8bbf7-bb34-4b48-bcd0-c3e070a4a49e" />

<img width="398" height="283" alt="Dark Mode" src="https://github.com/user-attachments/assets/e9b311ff-dc00-4134-93f1-33baa27dd088" />

<img width="881" height="1841" alt="SereneFocus drawio" src="https://github.com/user-attachments/assets/f9f47092-3d77-4860-9f4d-825e5ba4bb9d" />

<img width="1191" height="421" alt="SereneFocus Flowchart drawio" src="https://github.com/user-attachments/assets/b110deac-233b-4666-b857-90079bad764e" />



















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
