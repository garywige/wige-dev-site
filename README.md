# WigeDev Website

## Summary

The site is composed of two projects: this project, which represents the frontend UI written in Angular, and this [project](https://github.com/garywige/wige-dev-site-api), which represents the backend API written in Express.js.

## NPM Scripts

`npm run start`: runs the site at http://localhost:5000 in development mode
`npm run build`: builds the project
`npm run build:prod`: build the project for production
`npm run test`: runs jasmine unit tests
`npm run test:nowatch`: runs tests with the --watch=false flag. This is primarily for CI/CD
`npm run style`: runs import-sort & prettier to keep code easy to read
`npm run style:fix`: automatically addresses style violations
`npm run lint`: lint:ts & lint:tsc, helps keep the code clean
`npm run lint:fix`: automatically addresses lint violations

## Site Layout

The site is composed of 3 pages:

- [Home]("./src/app/home")
- [Downloads]("./src/app/downloads")
- [Contact Us]("./src/app/contact-us")

The main SPA "wrapper" component is the [app component]("./src/app"), which contains the template for the header and footer.
