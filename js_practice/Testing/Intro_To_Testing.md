# Getting Started With Testing in JavaScript

## Using the Jest Testing Library

In order to start with Jest, you need to make sure it is saved as a dependency in your `package.json` . If your project does not have a `package.json` file already, in your terminal run:

`npm init -y`

This will initialize the `package.json` with the default values.

From here, we are going to add Jest to our `package.json`. In your terminal, write:

`npm i --save-dev jest`

We are going to save it as a dev dependency because we are only using it when we are developing our project.

Now, go inside of that package.json and under `"scripts"`, where it says `"tests"` , write in: `"jest"`.

![ptest](/Users/reinamitchell/personal-projects/algos-practice/imgs/jest.jpg)
