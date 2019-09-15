# MasteryChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

## Write-up

While reviewing this [code challenge](https://gist.github.com/rmw/66ba439e6e68846341c98019f31153a6) notes, my initial thought was determining the best way to handle
the application's state after importing the JSON. My other thoughts were determining the individual components to create, the load board design and organization 
of the loads whether by ids or dates. 

My approach is creating 2 components. Load Board component to display the all the loads and Load Info component to display the individually clicked loads in a modal 
view. A Data service to handle the application state based on the data present and using the Observer pattern with the Load Board component.

## How to run app

Run `npm i` or `npm install` from within the root of the application.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

