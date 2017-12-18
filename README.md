[![Build Status](https://travis-ci.org/marcusgsta/ramverk2-app.svg?branch=master)](https://travis-ci.org/marcusgsta/ramverk2-app)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/marcusgsta/ramverk2-app/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/marcusgsta/ramverk2-app/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/marcusgsta/ramverk2-app/badges/build.png?b=master)](https://scrutinizer-ci.com/g/marcusgsta/ramverk2-app/build-status/master)
[![Code Coverage](https://scrutinizer-ci.com/g/marcusgsta/ramverk2-app/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/marcusgsta/ramverk2-app/?branch=master)
# Ramverk2-app – with react-frontend and express-backend

Clone this repo with

```
git clone https://github.com/marcusgsta/ramverk2-app.git
```

Start Docker Container to run Mongodb database, and run in detached mode:

```
docker-compose up -d mongodb
```

Start with
```
npm install && npm start
```

Test repos with
```
npm test
```

Test repos in different node environments like this:
```
npm run test1 # for node 7
npm run test2 # for node 8
npm run test3 # for node 9
```
This will take some time. When the unit tests are done you will need to press 'Q' to leave the Jest CLI and proceed with code coverage as a last step.

Optional: Set port (default: 1337)
```
DBWEBB_PORT=PORT_NUMBER
```

To reset database – erase all and fill with default data:
```
npm run reset-database
```
