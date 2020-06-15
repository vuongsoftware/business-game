# BusinessGame

# Overview
    The project is solely based on Angular and no backend technologies are used while running this project, the state management has been done usin cookies to remove the server overhead and efficient and fast results.

# Problems Faced while designing the project:
    1. Concurrent tasks manipulation.
    2. State Management
    3. Design Architecture
    4. UI Design

# Solutions
    1. Used RxJs for asynchronous programming. Observables were highly used for the concurrent tasks manipulation.
    2. State Management is done using cookies, set/get cookies while logging out and in respectively.
    3. Followed the MVC architecture of Angular and usage of components for minimal design and effort. Could have used Redux but MVC provides the two way flow which was solely requried for parent/child component interaction.
    4. Minimalistic approach to design the game.

# How to run the code
    1. Unzip the file.
    2. Go to the folder using command line and run any http server of your choice.
    3. We can use python to run the server from the command line very easily.
    4. Depending upon the version of python you have run the following command:
        a. Python 2 —> python -m SimpleHTTPServer 8000
        b. Python 3 —> python -m http.server 8000
    5. Go to Chrome http://localhost:8000

# Trade Offs
    1. Full e2e flow or testing could not have been done, inspite of giving the required results, there is a possibility of bugs.
    2. The UI is not responsive to mobile phones.
    3. Effeciency of the concurrent tasks could be improved from smooth results.
    4. Investor component could have been added and Buy Max functionality could have been added.
    5. Implement algorithm to find the best possible path to generate the maximum profit in the shortest time.
    6. Added the analytics of the player's profile.
