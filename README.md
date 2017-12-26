[![Build Status](https://travis-ci.org/marcusgsta/ramverk2-app.svg?branch=master)](https://travis-ci.org/marcusgsta/ramverk2-app)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/marcusgsta/ramverk2-app/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/marcusgsta/ramverk2-app/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/marcusgsta/ramverk2-app/badges/build.png?b=master)](https://scrutinizer-ci.com/g/marcusgsta/ramverk2-app/build-status/master)
[![Code Coverage](https://scrutinizer-ci.com/g/marcusgsta/ramverk2-app/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/marcusgsta/ramverk2-app/?branch=master)
# Ramverk2-app – with react-frontend and express-backend

# INSTALLING

Clone this repo with

```
git clone https://github.com/marcusgsta/ramverk2-app.git
```

Start Docker container to run Mongodb database, and run in detached mode:

```
npm run start-docker
```

Start with
```
npm install && npm start
```

Optional: Set port (default: 1337)
```
DBWEBB_PORT=PORT_NUMBER
```

Optional: Set DSN (default: mongodb://localhost:27017/math)
Points to your mongodb database.
To start with an empty database try mongodb://localhost:27017/test
```
DBWEBB_DSN=YOUR_DSN_ADRESS
```

To reset database – erase all and fill with default data:
```
npm run reset-database
```

After exiting you might want to remove the Docker container:

```
npm run stop-docker
```

# TESTING

Test repos with
```
npm test # for backend tests
npm client/test # for client tests
```

Check code coverage locally (or open file in browser):
```
open /coverage/lcov-report/index.html
open client/coverage/lcov-report/index.html
```

Test repos in different node environments like this:
```
npm run test-docker # for node 7
npm run test-docker1 # for node 8
npm run test-docker2 # for node 9
```
This will take some time. When the unit tests are done you will need to press 'Q' to leave the Jest CLI and proceed with code coverage as a last step.

# TOOLS USED for testing

Jest, supertest

# CI

Travis, Scrutinizer

# Realtime application

# Database

# Module at npm
