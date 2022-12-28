# Welcome to Flight Service

##Project Setup

- clone the project on your local
  - git clone `https://github.com/S-a-k-s-h-i/FlightandSearchService.git`
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

- Once you have added your db config as listed above, go to the src folder from your terminal and execute command `npx sequelize db:create`

##DB Design

- Airplane Table
- Flight Table
- Airport Table
- City Table

- A flight belongs to an aeroplane but one airplane can be used in multiple flights.
- A city has many airports but one airport belongs to a city.
- One airport can have many flights but one flight belongs to one airport.
