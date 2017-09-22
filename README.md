# KeystoneV3 Angular 4

Author: Graham J Land

Date: 01/04/2017

Twitter: @allthingsclowd

Github: https://github.com/allthingscloud

Blog: https://allthingscloud.eu

# Overview
How to configure Angular 4 to use Fujitsu K5's IaaS Authentity Service, OpenStack Keystone v3.0,
as the backend authentication service provider in an SPA.

This repo has been put together to demonstrate how to work-around the CORS authentication challenges when building an Angular 4 SPA (Single Page Application) for OpenStack Keystone v3 & Fujitsu's K5 platform.

## Challenge
They key challenge is that Fujitsu K5 does not currently support CORS which results in the following error:

"XMLHttpRequest cannot load https://identity.uk-1.cloud.global.fujitsu.com/v3/auth/tokens. Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. The response had HTTP status code 404."


## Solution
Use a CORS proxy server to accept your browser requests and forward them on as server requests thus by-passing the CORS (browser) issues.

# Caution:
I've only hacked the authentication.service.ts file and the login.component.html to facilitate making the HTTP request to K5...there's a lot more to do for a full SPA but this should be enough to get folks passed the initial authentication hurdles.....the only restriction now is your imagination.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


A big thanks to Jason Watmore for his templates that I've leveraged - 

Angular 2 User Registration and Login Example & Tutorial

To see a demo and further details go to http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial
This version of the example uses SystemJS as the module loader.

