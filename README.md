# Welcome to Flight Service

##Project Setup

- clone the project on your local
<<<<<<< HEAD
  - git clone `https://github.com/S-a-k-s-h-i/FlightandSearchService.git`
=======
>>>>>>> 1d8af40755ce5963877f36c61b2af736065c3919
- Execute `npm install` on the same as of your root directory of the downloaded project.
- Create a `.env` file in the root directory and add the following environment variables.
  - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}

```
