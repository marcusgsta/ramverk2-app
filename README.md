# React & Express Chat

<a href="http://chat-bth.space">
<img alt="main" src="/public/img/react-chat.png" />
</a>

[![Build Status](https://travis-ci.org/marcusgsta/ramverk2-app.svg?branch=master)](https://travis-ci.org/marcusgsta/ramverk2-app)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/marcusgsta/ramverk2-app/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/marcusgsta/ramverk2-app/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/marcusgsta/ramverk2-app/badges/build.png?b=master)](https://scrutinizer-ci.com/g/marcusgsta/ramverk2-app/build-status/master)
[![Code Coverage](https://scrutinizer-ci.com/g/marcusgsta/ramverk2-app/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/marcusgsta/ramverk2-app/?branch=master)

# Chat server
This repo is dependent on the repo for the chat client: https://github.com/marcusgsta/react-client.git

made with sockets.io, Node, Express and Mongodb

# Table of Contents
- [Setup](#setup)
  - [Clone projects](#clone-projects)
  - [Install Mongodb / Docker](#install-mongodb-or-docker)
- [Install](#install-and-build-server-and-client)
  - [Start Docker](#start-docker)
  - [Start Application](#start-application)
  - [Set port](#set-port)
  - [Reset Database](#reset-database)
  - [Test](#test)
- [Developer Mode](#developer-mode)


## Setup

### Clone projects

Clone server:

```
git clone https://github.com/marcusgsta/ramverk2-app.git
```

Clone client repo in directory 'client':

```
cd ramverk2-app
git clone https://github.com/marcusgsta/react-client.git client
```

### Install Mongodb or Docker

Choose either to install Docker or Mongodb.

Install Docker according to your operating system:
[Docker Installation pages](https://docs.docker.com/engine/installation/)

Alternatively you can install Mongodb:
```
sudo apt-get install -y mongodb
```

## Install and build server and client

Install the server.
```
npm install
```

Install and build the client.
```
cd client && npm install && npm run build
```

## Start Docker

Start Docker container to run Mongodb database, and run in detached mode:

```
npm run start-docker
```

Alternatively start your Mongodb installation.


## Start Application:

```
npm start
```
Runs the app in production mode.

## Set port
Default: 1337
```
DBWEBB_PORT=PORT_NUMBER
```

## Set DSN
Default: mongodb://localhost:27017/math

Points to your Mongodb database.
To start with an empty database try mongodb://localhost:27017/test
```
DBWEBB_DSN=YOUR_DSN_ADRESS
```

## Reset Database

To reset database – erase all and fill with default users:
```
npm run reset-database
```

After exiting you might want to remove the Docker container:

```
npm run stop-docker
```

## Test

Test repos with
```
npm test # for backend tests
cd client && npm test # for client tests
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

## Developer Mode

### Start developer mode
```
npm run start-dev
```


The following text is in Swedish.

# Innehållsförteckning
- [Kravbild](#kravbild-för-projekt)
  - [Grund](#grund)
  - [Admin](#admin)
- [Verktyg för enhetstester](#verktyg-för-enhetstester)
  - [Jest](#jest)
  - [Supertest](#supertest)



# Kravbild för projekt

## Grund
En chatt där man kan skapa en egen användare, med namn, nick, email och lösenord. Från epostadressen genereras en gravatar från https://sv.gravatar.com/. Om man inte har konto där så visas ändå upp en genererad unik bild för varje användare.

Startsidan är en chatt. Om man inte är inloggad skickas man till inloggninssidan för att skriva in sina uppgifter. Om de är korrekta sänds man tillbaka till startsidan, eller sidan man ville visa.

Appen innehåller en om-sida med kort information om projektet.

Applikationen har ett snygg och tydligt gränssnitt som är lätt att använda och interagera med. När en användare skriver något, visas ett meddelande 'x skriver ett meddelande'. Alla användares bilder visas på startsidan, och med hjälp av en snygg tooltip-funktion kan man genom att hovra över dem visa deras uppgifter.

Enkla ikoner utgör de olika menyvalen.

I chatten så är input-fältet alltid aktivt, vilket gör att man inte behöver aktivera det, något som gör att appen blir lättare att använda. Det besparar antal klick och interaktioner.

Det ska fungera på nyare mobiler och andra enheter.

Projektet fungerar antingen med en Mongodb-installation eller med Mongodb som Docker-image.

Den ska fungera responsivt i de vanligaste enheterna, datorer, surfplattor och mobiler.

Chatfönstret ska rullas upp efterhand så att de senaste meddelandena alltid är synliga, och man inte behöver scrolla.


## Admin

Appen innehåller också administrationssidor. En administratör kan logga in. Vid reset av databas finns en förinställd administratör som har användarnamn 'admin' och lösenord 'admin', för testning. Administratören kan uppdatera och ta bort användare.

Finns att testa på chat-bth.space.


# Verktyg för enhetstester

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

Delar av applikationen täcks inte av tester. Mongodb, inloggning, socket.io - chat.


## Continuous Integration

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


# Realtidsapplikation

Realtidsapplikationen är en chatt. Teknikerna jag har använt är modulen socket.io. Denna erbjuder en klient och en server, vilka man sedan jobbar emot och kopplar upp sig med hjälp av.

Socket.io är en wrapper, det vill säga den omsluter realtidsfunktionaliteten och använder den metod den finner bäst för ändamålet. Socket.io är på så sätt ett flexibelt sätt att införliva realtid i en app.

# Databas

Dokumentdatabasen Mongodb är en NoSQL-dokument-databas som fungerar i JSON och Javascript.
Det är en dokumentdatabas där data lagras i JSON-filer. För att få det att fungera behöver man installera Mongodb enligt anvisningar på deras sida. I paketet ingår en klient, med vilken man kan koppla upp sig och interagera med databasen. För applikationen jag har byggt behövs en Nodejs-driver, det vill säga en klient vilken jag har installerat på server-sidan. Användaren kan interagera med React-klientens formulär. Formuläret sänder förfrågningar om CRUD-operationer till servern, och alltså till databas-klienten, vilken i sin tur kopplar upp sig mot appens databasinstans.

# Docker
För att lägga på ännu ett lager finns möjligheten att köra Mongodb via Docker. Det vill säga det finns en Docker-image med en version av Nodejs, vilken kan starta och köra appen. Det finns också möjlighet att med hjälp av olika Docker-containrar testa applikationen, så som beskrivet ovan.



# NPM-modul

Modulen mongodb-api är ett litet api med standard CRUD-funktioner, det vill säga Create, Read, Update och Delete, riktat mot en Mongodb-databas. Man laddar ner det från npm, och skapar ett objekt.

Länk:
[mongodb-api på npm](https://www.npmjs.com/package/@marcusgsta/mongodb-api)



# Driftssättning

Jag har laddat upp på digital ocean, och där använt Apache-server och Virtual Hosts. Jag behövde använde Virtual
Hosts eftersom jag redan har ett php-projekt där. Jag behövde också en modul, mod_proxy, för att kunna driva en nodejs-app. Med hjälp av modulen kan jag använda en reverse-proxy vilken skickar inkommande anrop till chat-bth.space på port 80 till porten som min Express-app körs på, 1337.

# Artikel: Inloggning med JSON

För autentificering används Passport och JWT – JSON Web Token.
Passport


# Artikel: React.js

Reactjs är ett bibliotekt/ramverk som används för att bygga dynamiska user interfaces (användargränssnitt). Man säger att det är V:et i MVC, alltså vyn. Det är frikopplat från en eventuell serverdel, och därför kompatibelt med olika typ av servrar.

Although some would argue that all projects need React, I think it’s uncontroversial to say that React would be a great fit for web apps where you need to keep a complex, interactive UI in sync with frequent changes in the underlying data model.
https://www.sitepoint.com/react-fast-interactive-user-interfaces/
Lots of state management and DOM manipulation. That is, enabling and disabling buttons, making links active, changing input values, closing and expanding menus, etc. In this kind of project, React makes managing stateful components faster and easier. As Michael Jackson, co-author of React Router, aptly put it in a Tweet:
Point is, React takes care of the hard part of figuring out what changes actually need to happen to the DOM, not me. That’s *invaluable*

Fighting spaghetti. Keeping track of complex state by directly modifying the DOM could lead to spaghetti code, at least if extra attention isn’t paid to code organization and structure.

bridge the gap between web apps and native apps: users expect web apps to feel smooth and seamless like native apps.

Så vad är då fördelen? React ska vara snabbare? Istället för att manipulera DOM-trädet så manipuleras man Virtual DOM. Det resulterar i färre omladdningar av sidan.


## Komponenter

## Virtual DOM
Reactjs använder Virtual DOM. Det abstraherar DOM och skapar en kopia. Denna kopia jämförs med originalet och vid en omladdning av någon komponents state behöver inte hela sidan laddas om. Det är enbart ändringarna som laddas igen, något som gör att gränssnittet känns snabbt och smidigt.

## Nackdelar
Reactjs är fortfarande relativt nytt, och förändringstakten är därför hög. Exempelvis när det gäller React Router, en separat modul men som rekommenderas av React, så har man nyligen uppdaterat sin kod, vilket gör det mer komplicerat att hitta rätt information. Mycket av frågor och svar på StackOverflow, till exempel, blir snabbt föråldrad, och det är lätt att trampa fel och bli tvungen att göra om.


# Bastekniker och ramverk
Jag använder mig av Express.js för servern och React.js för klienten.

Express erbjuder ett smidigt sätt för att snabbt skapa en server att utgå ifrån.

React kräver lite mer att sätta sig in i, men fungerar bra och snabbt när man kommit in i det. Något som kan göra det lite mer komplicerat är att man behöver hålla reda på olika versioner, och hålla sig till en.

React Router behövs för att kunna länka dit man vill.



# ES6
async await
pilfunktioner

# Utvärdering:
Express är jag väldigt nöjd med.
React kan jag ställa mig mer tvivlande till. Det är

En tanke är att världen för ramverk i Javascript är snabbt föränderlig, och blir därför lätt förvirrande. Det är lätt att förirra sig i olika versioner. Något annat är att det existerar mängder av moduler, på gott och på ont. Jag tror att folk använder mer moduler än vad de behöver, och då är det lätt att mista översikten över vad man håller på med. Om en kodbas använder tjugo olika moduler, så blir det ett slags hopplock, och är det då egentligen programmering man håller på med? Vad händer med säkerheten när man inte känner koden man använder?

Det kan kännas som om mycket av det man lägger tid på är att ha koll på sina moduler och deras versioner, och att de fungerar tillsammans med andra moduler. Detta finns ju normalt som dependencies i modulens package.json-fil.


En utvärdering av Reactjs. En annan grundtanke är att man ska kunna använda komponenter för att bygga sina sidor. De som förespråkar detta menar att det är detta som är framtiden. Komponenter är testbara. De är också återanvändbara. React bryter mot och argumenterar mot en gammal regel inom webdesign, nämligen att skilja mellan html och javascript. JSX.
