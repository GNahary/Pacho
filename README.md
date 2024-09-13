# Pacho

## General
This game was created to help my son practice his math skills. There are two modes in the game, one to practice addition and one to practice multiply. The player is then presented with 5 exercises and 30s to solve each. Score starts at 10 points for each exercise, with 1 point deducted every 3s. Once all 5 questions have been answered (or time have elpased), the final score will appear (along with some audio effects).

The game itself was uploaded to AWS S3, using the following procedure:
1. Build the project using "ng build --prod"
2. Create an AWS S3 Bucket to deploy your angular application. Make sure to configure the bucket properties as "Use this bucket to host a website."
3. Set bucket permissions as follows: 
{   "Version": "2012-10-17",
    "Statement": [
      {"Sid": "PublicReadGetObject",
       "Effect": "Allow",
       "Principal": "*",
       "Action": "s3:GetObject",
       "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"}
    ]
}
4. Upload all files under the dist/browser folder in your project to the bucket.
5. Use the "Bucket website endpoint" (under Properties tab) to access your site.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
