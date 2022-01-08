# WigeDev Website

## Summary

The site is composed of two projects: this project, which represents the frontend UI written in Angular, and [this project](https://github.com/garywige/wige-dev-site-api), which represents the backend API written in Express.js.

## NPM Scripts

- `npm run start`: runs the site at http://localhost:5000 in development mode
- `npm run build`: builds the project
- `npm run build:prod`: build the project for production
- `npm run test`: runs jasmine unit tests
- `npm run test:nowatch`: runs tests with the --watch=false flag. This is primarily for CI/CD
- `npm run style`: runs import-sort & prettier to keep code easy to read
- `npm run style:fix`: automatically addresses style violations
- `npm run lint`: lint:ts & lint:tsc, helps keep the code clean
- `npm run lint:fix`: automatically addresses lint violations

## Site Layout

The site is composed of 3 pages:

- [Home](src/app/home)
- [Downloads](src/app/downloads)
- [Contact Us](src/app/contact-us)

The main SPA "wrapper" component is the [app component](src/app), which contains the template for the header and footer.

## CI/CD

CircleCI is utilized for CI/CD and you will find the configuration for that in the [.circleci](.circleci) directory in YAML format. When git pushes are made, the repository is staged at [staging.wige-dev.com](https://staging.wige-dev.com) on Vercel. Once code is merged with the main branch, it is automatically pushed to Google Cloud Build to create a new image. As of right now, images need to be manually deployed to production from the Google Cloud Run interface. The current production site can be found [here](https://wige-dev.com).
