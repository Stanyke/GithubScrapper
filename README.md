# GithubScrapper

This is a web application used in getting data, most epecially repositories from your Github profile through authorization & authentication.

This is a web application built on NodeJS aand being displayed using module *express-handlebars*, which helps to display the HTML page (serves as the frontend view of the website).

This app was built to help scrap user's Github repositories ones logged in.


**How To Use This App**

1. Clone or download this repo.

2. Goto your Github Account's setting fllowing the clicks, **Settings  => Developer settings => OAuth Apps => New OAuth App** give the app a name, also Homepage URL should be *http://localhost:3000/* and Authorization callback URL should be *http://localhost:3000/login/github/return*... These are the basic things you need, then save the OAuth App to get your **Client ID & Client Secret**.

3.http://localhost:3000/login/github/return is the url i'll be pointing to in my NodeJS to check the login authentication.

4. Now, the **Client ID & Client Secret** we have gotten is needed to replace a few places in the **.env** file in the root directory.
The **Client ID** should replace *YOUR_GITHUB_CLIENT_ID_NUMBER* and **Client Secret** should replace *YOUR_GITHUB_CLIENT_SECRET_NUMBER* (just replace with the numbers gotten after registering the New OAuth App), Finally save.

5. Install module *nodemon* and run *npm start*, better still run *node server.js* since i'm done with the development (thats why i used nodemn).

6. After following any of the steps in the second stage (run *node server.js*, just to waste time), the server would be running on *localhost:3000*
