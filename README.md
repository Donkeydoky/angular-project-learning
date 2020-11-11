# MyFirstAngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


//learning process 


<!-- //commit one: identifying the entrance of the project  -->
#1: ..app/app.component.html for displaying as a single page.
#2: ..app/app.component.ts is the corresponding typeScript file for app.component.html as indicated in its @component injection annatation.  The class AppComponent is the corresponding class definition exporting for using. you can declar any properties, method, constructors inside. access the properties by using {{propertyName}}.

<!-- //commit two: little development on module and its classes, related to display a table of records of sales data. -->
<!-- step 2: -->
#1: using command "ng generate component sales-person-list" to automatically generate module in the app repository.
<!-- step 4: -->
#2: using command "ng generate class sales-person-list/SalesPerson" to automatically generate class file inside module's file path.
<!-- step 5: -->
#3: edit the file sales-person.ts.


<!-- commit three: integrating Angular and Bootstrap CSS:
        step 1: Get links for remote Bootstrap files
        step 2: Add links to index.html
        step 3: Apply Bootstrap CSS styles in component HTML template 
        step 4: Apply Bootstrap CSS styles in component HTML table 
        strp 5: Update TypeScript component file to reference Bootstrap HTML template-->