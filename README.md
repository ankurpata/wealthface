# Wealthface

React Developer Assessment

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
 

### Installing &  Running
 
 
```
npm install
```

&&

```
npm start
```

 
## Explaination

As requested in the required assignment doc, this contains the source code with the following requirements:
 ```
 -  Used react-router and created HashRoutes to create static routes with #
 -  Has a settings page with all the sub sections 
    which is entirely based on functional components with styled components and uses React Hooks.
 -  Follows the es6 standards and used dumb functional components with Hooks through out the app.
 -  Use React hooks to manage the Settings page component state as well as Change password form.
 -  Has all the input password validations, hits a dummy Api on validation and alerts with a success message.
    Throws error in case of any errors. 
 ```

### Code Structure

```
 /src/assets  -  Contains static files - images/fonts/css
 /src/components/  - React components.
 /src/components/Body  - React components for the Body section. 
                        Contains functional components for Navigation tabs in settings section and
                        components for Sub sections.(Privacy, Profile, Account Information, etc.)
 /src/components/Header & /Footer  - Contains Header & Footer components.
 /src/App.js   - Entry component which contains HashRouter to manage 2 pages (Home & Setttings) and uses hash-based url
 
```

## Built With

* [Create react app](https://github.com/facebook/create-react-app) 
 

 

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Ankur Patankar** - *Initial work* - [ankurpata](https://github.com/ankurpata)

 
