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

Install:
```
npm install
cd client && npm install && npm run build
```

Start with
```
npm npm start
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


The following text is in Swedish.

# Verktyg använda för enhetstester

## Jest
Klienten är scaffoldad fram med hjälp av modulen create-react-app, vilken skapar en utgångspunkt för en React-app.

Jest är på förhand inkluderat i create-react-app.

Jest är ett allround testverktyg men även bra för den specifika uppgiften att testa komponenter skrivna i React.js. Jest har inbyggda mockfunktioner, så att man kan sända mock-callbacks för att testa delar av en funktion.

Jag använder Jest både för klienten och för backend.

## Supertest
Supertest tar hand om HTTP assertions. Med hjälp av denna testrunner kan jag testa att routerna i backend fungerar som de ska.

En fördel med Supertests enhetstester är att de är komprimerade och lättlästa. Ett exempel:
```
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app).get('/').expect(200);
    });
});
```


# CI

De båda repona är integrerade med Continuous Integration. För varje uppladdning på Github så byggs och testas repona i Travis och Scrutinizer.
I filen .env.development definieras NODE_ENV=development. Detta utnyttjar jag för att veta vilken config.js jag använder mig av, något som är aktuellt för JWT och autentificering. På så vis behöver jag inte göra den skyddade config-filen offentlig.

För produktion skulle config-filen dock behöva krypteras.

## Travis CI
För build har jag använt Travis. Travis är en Continuous Integration Service, som installerar och bygger projektet och meddelar om något är fel.

Travis högkvarter ligger i Berlin, men de har utvecklare över hela världen. Open Source-projekt kan testas gratis, och privata repon mot en avgift.

Travis erbjuder en badge vilken visar om repot har byggts utan fel. Om något är fel så blir badgen röd, det finns inget antingen eller för Travis. Eftersom man vill ha en grön badge så blir det viktigt att fixa varje fel.

I sin config-filen .travis.yml har jag bestämt att projektet ska byggas i Node 8 och 9, de två senaste versionerna.

## Scrutinizer CI
Scrutinizer är en kodgranskare används för men inkluderar också kodanalys och -täckning. Man får badges vilka på ett tydligt sätt kommunicerar kodens kvalitet i en rating där 10 är det högsta betyget.

I Scrutinizer kan man se minor och major issues, bugs och antal procent kodtäckning. Det gör det lätt att upptäcka brister och förbättra sina projekts kodkvalitet.


# Realtime application

Realtidsapplikationen är en chatt. Teknikerna jag har använt är modulen socket.io. Denna erbjuder en klient och en server, vilka man sedan jobbar emot och kopplar upp sig med hjälp av.

Socket.io är en wrapper, det vill säga den omsluter realtidsfunktionaliteten och använder den metod den finner bäst för ändamålet. Socket.io är på så sätt ett flexibelt sätt att införliva realtid i en app.

# Database

Dokumentdatabasen Mongodb är en noSQL-dokument-databas som fungerar i JSON och Javascript.



# Module at npm

Modulen mongodb-api är ett litet api med standard Create-Read-Update-Delete-funktioner. Man laddar ner det från npm, och skapar ett objekt.

Länk:

# Kravbild

Projektet innebär en chatt
med server och klient.
Det ska gå att skapa en egen användare och att logga in.
Man kan även redigera sin egen profil.

# Bastekniker och ramverk
Jag använder mig av Express.js för servern och React.js för klienten.

För autentificering används Passport och JWT – JSON Web Token.

Express erbjuder ett smidigt sätt för att snabbt skapa en server att utgå ifrån.

React kräver lite mer att sätta sig in i, men fungerar bra och snabbt när man kommit in i det. Något som kan göra det lite mer komplicerat är att man behöver hålla reda på olika versioner, och hålla sig till en.

React Router behövs för att kunna länka dit man vill.

# Utvärdering:
Express är jag väldigt nöjd med.
React kan jag ställa mig mer tvivlande till. Det är

En tanke är att världen för ramverk i Javascript är snabbt föränderlig, och blir därför lätt förvirrande. Det är lätt att förirra sig i olika versioner. Något annat är att det existerar mängder av moduler, på gott och på ont. Jag tror att folk använder mer moduler än vad de behöver, och då är det lätt att mista översikten över vad man håller på med. Om en kodbas använder tjugo olika moduler, så blir det ett slags hopplock, och är det då egentligen programmering man håller på med? Vad händer med säkerheten när man inte känner koden man använder?

Det kan kännas som om mycket av det man lägger tid på är att ha koll på sina moduler och deras versioner, och att de fungerar tillsammans med andra moduler. Detta finns ju normalt som dependencies i modulens package.json-fil.

ES6
