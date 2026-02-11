 # SereneFocus

## Project Overview 
SereneFocus is a web-based application designed to support students and independent learners who find distraction, cognitive overload and concentration challenging to manage during study sessions. 

The system aims to foster a calm, responsive study environment that adapts to users' attentional and cognitive capacities without placing pressure or overstimulation.

The application employs a low-friction, user-centred design approach that simplifies interaction and minimises visual complexity in order to effectively manage cognitive load. Core functionality supports structure, time-bounded study sessions through set timer controls, including start, pause and reset.

SereneFocus applies simplicity, ease of navigation and structured interaction to support users in sustaining concentration with an uninterrupted, distraction-free environment. 

## User Requirements

### Functional User Requirements
- The user must be able to easily set up a focus session.
- The user must be able to name a focus session with a title of their choice (optional).
- The user must be able to choose a visual theme of their liking from the options provided. 
- The user must be able to pause and resume a session. 
- The user must be notified when a session is complete.
- The user must be able to reflect after completing a session. 
 - The user must be able to skip a reflection without penalty. 

### Non-functional User Requirements
- The interface must be calm and distraction-free.
 - Text must be readable in light and dark modes. 
- Colours must align with accessiblity contrast guidelines.
- The interface must be intuitive without instructions. 
 - The interface must not pressure the user. 

## System Requirements

### Functional System Requirements
- The system must record session duration accurately.
- The system must update the progress bar in real-time.
- The system must respond when a timer reaches zero. 
- The system must trigger a transition screen upon session completion. 
- The system must store user preferences (theme, name).
- The system must support pause and resume actions.

### Non-functional system requirements
- The system must respond to user input within 2 seconds.
- The system must be functional on modern web browsers. 
- The system must comply with WCAG 2.1 accessibility standards.
- The system must sustain consistent behaviour themes.
- The system must be stable if optional inputs are skipped.


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

## Software Tools & Development Techniques

A number of software tools have been used for the purpose of creating the product.
GitHub was used for version control to faciliate incremental, sprint-based development and record documented progression through commit history.  Penpot has been used to design and create visual wireframes to represent the user interface design states for SereneFocus. Draw.io has been used to create system flow diagrams to demonstrate how the system works for users and illustrates the user flow for SereneFocus as an adaptation of conventional Pomodoro timers. Visual Studio (VS) Code has been selected as the software development environment for creating SereneFocus. Browser DevTools is used to conduct system debugging and test the system performance. 

### Programming Languages & Technologies 
The timer uses JavaScript setInterval for local time tracking, duration and session management. State transitions take  place between stages of steup, active, paused and completion states.  Edge cases identified for testing include skipping reflection, repeated reset and session interruption.   

HTML has been chosen to set the foundation for the system's base structure and user flow. 
CSS is used to style the user interface for the user/client side on the browser and design the theme implementations on elements when selected by the user.
JavaScript manages the timer logic, the timer state and DOM updates. LocalStorageAPI is implemented to save session data locally on the browser and local browser preferences chosen by the user at the time of use. 

### Development Techniques Applied

Specific development techniques applied includes modular javascript functions that control local processes on the browser and event-driven programming with user interactions on local browser sessions.
There is client-side state management operating locally on the browser during user-configured sessions. Scrum is chosen to support iterative, incremental development which relates to advance sprint planning of user priorities for segmented sprints with clear outlines of acceptance criteria and definition of done with manual test validation perfomed for each sprint.  

### Project Management Progression

Title: Session setup 	
Sprint: 1
Priority: High
Difficulty:
Story: As a student, I want to set up an independent focus and break structure that is effective and simple. 
Acceptance criteria include:
-	Session duration default options are presented clearly to the user.
-	Controls enable users to increase or decrease duration easily. 
-	Start button is visible and accessible on the go. 
Definition of Done:
Session duration and break setup for users are clear and presentable.
Configurations are simple and quick for users to configure.
User input stores quickly once user moves to focus session screen. 


Title: Start focus session
Sprint: 1 
Priority: High
Difficulty: Medium
 User Story:
-	As a student, I want to start a focus session without friction and study uninterrupted from distractions or excessive visuals.  
-	Acceptance criteria include:
-	  The session starts within 3 seconds after user set up sessions.  
-	Progress updates continuously during focus sessions. 
Definition of Done:
Defaults apply with user configuration kept simple and optional as initial setup. 
No intrusive user interface changes are applied once a session starts. 

Title: Pause/continue session
Sprint: 1
Priority: High
Difficulty: 
Story: As a student, I want to be able to pause and continue a session without losing progress or resetting a new session. 
Acceptance criteria:
-	Pause and start controls are visible and easy to access to pause and stop
-	Progress tracked is saved by default
-	Configurations are stored on the session state text. 
Definition of Done:
The focus session has the pause and start controls readily available to stop and continue where users left off.
Progress bar stays still and saves tracking by default.
Text and progress bar is clear with design cohesion.

Title: Session completion feedback
Sprint: 2
Priority: High
Difficulty:
Story: As a learner, I want to know when sessions are complete and receive visual feedback when complete. 
Acceptance criteria:
-	Clear text confirms session name and complete as still text to user
-	Sizing is large and readable for users with clear contrast.
-	State information is consistent with the designed user interface. 
Definition of Done:
End of screen is tested successfully with session confirmation clear and readable.
User receives clear visual feedback that is simple and understimulating.

Title: End-of-session optional reflection 
Sprint: 2
Priority:
Difficulty:
Story: 
As an independent learner, I want to be able to reflect on sessions and skip without any pressure or penalty.
Acceptance criteria include: 
-	A clear end of session confirmation of completion
-	Option to reflect on a session and skip freely
Definition of Done: 
There is an end of session screen notifying user of session completion.
Optional reflection and skip are displayed when a session ends. 
The screen is successfully tested and simplified visual design is maintained.


Title: Visual themes
Sprint: 3
Priority: High
Difficulty: 
Story:
As a student with additional support needs, I want to customise session backgrounds to manage stimulation and reduce cognitive and visual overload.
Acceptance criteria include:
-	Variety of visual themes for users to choose from.
-	Light and dark mode readable and light on design aspects
-	Consistent across all screens
Definition of Done:
User preferences are applied consistently and design stays readable.
Default theme is applied unless changed by user input.
Main features remain the same with the session screens. 
 

## Testing & Validation

## Project Reflection and Evaluation
