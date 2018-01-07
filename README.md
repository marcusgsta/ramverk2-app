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

Main techniques are Nodejs, Expressjs, Mongodb and socket.io. Reactjs for the client.

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

([Part 2](#part-2) is written in Swedish.)

## Setup

### Clone projects

Clone server:

```
git clone https://github.com/marcusgsta/ramverk2-app.git
```

Clone client repo into directory 'client':

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


# Part 2

The following text is in Swedish.

# Innehållsförteckning
- [Kravbild](#kravbild-för-projekt)
  - [Grund](#grund)
  - [Admin](#admin)
- [Verktyg för enhetstester](#verktyg-för-enhetstester)
  - [Jest](#jest)
  - [Supertest](#supertest)
- [Continuous Integration](#continuous-integration)
  - [Travis CI](#travis-ci)
  - [Scrutinizer](#scrutinizer-ci)
- [Realtidsapp](#realtidsapp)
- [Databas](#databas)
- [Docker](#docker)
- [NPM-modul](#npm-modul)
- [Driftssättning](#driftssättning)
- [Artikel: JSON Web Token](#artikel-json-web-token)
- [Artikel: Reactjs](#artikel-reactjs)

# Kravbild för projekt

## Grund
Är en realtids-chatt där man kan skapa en egen användare, med namn, nick, email och lösenord. Från epostadressen genereras en gravatar från https://sv.gravatar.com/. Om man inte har konto där så visas ändå upp en genererad unik bild för varje användare.

Startsidan är en chatt. Om man inte är inloggad skickas man till inloggninssidan för att skriva in sina uppgifter. Om de är korrekta sänds man tillbaka till startsidan, eller sidan man ville visa.

Appen innehåller en om-sida med kort information om projektet.

Applikationen har ett snyggt och tydligt gränssnitt som är lätt att interagera med. När en användare skriver något, visas ett meddelande 'x skriver ett meddelande' i andra inloggade användares chattfönster. Alla användares bilder visas på startsidan, och med hjälp av en  tooltip-funktion kan man genom att hovra över dem visa deras uppgifter.

Enkla ikoner utgör de olika menyvalen för att förbättra navigationen.

Input-fältet där man skriver meddelanden är aktivt när man öppnar startsidan, vilket besparar antal klick och interaktioner.

Projektet fungerar antingen tillsammans med en Mongodb-installation eller med Mongodb som körs i en Docker-container.

Den ska fungera responsivt i de vanligaste enheterna, datorer, surfplattor och mobiler.

Chatfönstret ska rullas upp efterhand så att de senaste meddelandena alltid är synliga, och man inte behöver scrolla.


## Admin

Appen innehåller också administrationssidor. En administratör kan logga in. Vid reset av databas finns en förinställd administratör som har användarnamn 'admin' och lösenord 'admin', för testning. Administratören kan uppdatera och ta bort användare.

Appen finns att testa på chat-bth.space.


# Verktyg för enhetstester

## Jest
Klienten är scaffoldad fram med hjälp av modulen create-react-app, vilken skapar en utgångspunkt för en React-app.

Jest är på förhand inkluderat i create-react-app.

Jest är ett allround testverktyg men även bra för den specifika uppgiften att testa komponenter skrivna i React.js. Jest har inbyggda mockfunktioner, så att man kan sända mock-callbacks för att testa delar av en funktion.

Jest används i tester både för klienten och för backend.

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

Delar av applikationen täcks inte av tester. Detta gäller anrop till Mongodb, inloggning samt chat i socket.io. Detta hade krävt en fördjupning i enhetstester som jag valde att nedprioritera.

## Continuous Integration

De båda repona är integrerade med Continuous Integration. För varje uppladdning på Github så byggs och testas repona i Travis och Scrutinizer.

I filen .env.development definieras NODE_ENV=development. Detta utnyttjar jag för att veta vilken config.js jag använder mig av, något som är aktuellt för JWT och autenticering. På så vis behöver jag inte göra den skyddade config-filen offentlig.

I produktion skulle config-filen dock behöva krypteras.

### Travis CI
För build har jag använt Travis. Travis är en Continuous Integration Service, som installerar och bygger projektet och meddelar om något är fel.

Travis högkvarter ligger i Berlin, men de har utvecklare över hela världen. Open Source-projekt kan testas gratis, och privata repon mot en avgift.

Av Travis kan man få en badge vilken visar om repot har byggts utan fel. Om något är fel så blir badgen röd – det finns inget antingen eller för Travis. Eftersom man vill ha en grön badge så blir det viktigt att fixa varje fel.


### Scrutinizer CI
Scrutinizer är en kodgranskare men inkluderar också kodanalys och -täckning. Man får badges vilka på ett tydligt sätt kommunicerar kodens kvalitet i en rating där 10 är det högsta betyget.

I Scrutinizer kan man se minor och major issues, bugs och antal procent kodtäckning. Detta gör det lätt att upptäcka brister och förbättra sina projekts kodkvalitet.


# Realtidsapp

Realtidsapplikationen är själva chatten. Tekniken jag har använt är modulen socket.io. Denna erbjuder en klient och en server, vilka man sedan jobbar emot och kopplar upp sig med hjälp av.

Socket.io är en wrapper, det vill säga den omsluter realtidsfunktionaliteten och använder den metod den finner bäst för ändamålet. Socket.io är på så sätt ett flexibelt sätt att införliva realtid i en app.

# Databas

Dokumentdatabasen Mongodb är en NoSQL-dokument-databas som fungerar i JSON och Javascript.
Data lagras i JSON-format. För att få det att fungera behöver man installera Mongodb enligt anvisningar på deras sidor. I paketet ingår en klient, med vilken man kan koppla upp sig och interagera med databasen. För applikationen jag har byggt behövs en Nodejs-driver, det vill säga en klient vilken jag har installerat på server-sidan. Användaren kan interagera med React-klientens formulär. Formuläret sänder förfrågningar om CRUD-operationer till servern, och alltså till databas-klienten, vilken i sin tur kopplar upp sig mot appens databasinstans.

# Docker
För att lägga på ännu ett lager finns möjligheten att köra Mongodb via Docker. Det vill säga det finns en Docker-image med en version av Nodejs, vilken kan starta och köra appen. Det finns också möjlighet att med hjälp av olika Docker-containrar testa applikationen, så som beskrivet ovan.

# NPM-modul

Jag byggde i föregående kursmoment modulen @marcusgsta/mongodb-api, ett litet API med standard CRUD-funktioner, det vill säga Create, Read, Update och Delete, riktat mot en Mongodb-databas. Man laddar ner det från npm, och skapar ett objekt.

Länk till modul och instruktioner för hur man använder det:
[mongodb-api på npm](https://www.npmjs.com/package/@marcusgsta/mongodb-api)



# Driftssättning

Jag har laddat upp på digital ocean, och där använt Apache-server och Virtual Hosts. Jag behövde använde Virtual Hosts eftersom jag redan har ett php-projekt där. Jag behövde också en modul, mod_proxy, för att kunna driva en nodejs-app. Med hjälp av modulen kan jag använda reverse-proxy vilken skickar inkommande anrop till chat-bth.space på port 80 till porten som min Express-app körs på, 1337.

Modulen pm2 ser till att servern alltid körs. pm2 startar också om servern om den skulle bli avbruten.


# Artikel: JSON Web Token

För autenticering används Passport och JWT – JSON Web Token. Följande är en kort introduktion.

## Vad är JWT?

<a href="https://jwt.io/">JWT</a> används för att autenticering och för att sända information mellan två parter på ett säkert sätt. Det är en öppen standard, vilket innebär att den kan användas i olika programmeringsspråk, som Python, Javascript etc.

JWT är kompakt och *self-contained*, det vill säga det innehåller allt information det behöver om användaren. Man undviker därför att behöva fråga databasen ännu en gång.

## Hur fungerar JWT?
Man skapar JWT i sin server, krypterar. När klienten loggar in en användare kontrollerar servern att lösenord stämmer. Om det är korrekt så sänds JWT till klienten. Klienten sparar sedan JWT på lämpligt sätt, till exempel i en cookie eller i localStorage. För varje request till servern sänds sedan JWT med i headern för kontroll om användaren har behörighet.

## Tre delar

En JWT token består av tre delar (Det ser ut så här: `xxxxx.yyyyy.zzzzz`):

**Header** : Består vanligtvis av två delar, *typ*, som är JWT, och *alg*, hashalgoritmen som används, till exempel HMAC SHA256 eller RSA.
```
{
  "alg": "HS256",
  "typ": "JWT"
}
```
Headern blir sedan Base64Url-omformad.

**Payload** : består av registered, public och private *claims* eller på svenska krav. Utan att fördjupa så är det de publika kraven som kan användas för att sända med ytterligare data om en användare.
Payload kan se ut så här, för en användare som även är admin:
```
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```
Payload omformas också till Base64Url-format.

**Signature** : Signaturen skapas med hjälp av de två första delarna. Det kan se ut så här:

```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```
För att skapa en JWT omformas headern och payload i base64Url-format, och separeras med en punkt. Den tredje delen skapas med hjälp av en *secret*, och alla tre delarna krypteras med i det här fallet en HMAC SHA256 algoritm.

På <a href="https://jwt.io/">jwt.io</a> finns en debugger där man kan testa och verifiera att en JWT är korrekt.

## Fördelar

En fördel med JWT jämfört med Simple Web Tokens (SWT) och Security Assertion Markup Language Tokens (SAML) är att JWT är mycket mer kompakt. En annan fördel är att man har flera sätt att säkra information.

En fördel är att man kan sända med till exempel alla uppgifter om en användare i sin token, så att det finns till hands.

## Nackdelar

Exempel för Express.js, med Passport.
JWT är inte helt säkert.?

## JWT och Node.js

I följande kodexempel används modulen *bcrypt* för kryptering samt *jsonwebtoken* för att hantera JWT i Nodejs.

### Kodexempel Login-sida i Express

```
let Api = require('my_api');
let api = new Api("mongodb://localhost:27017/app");

let bcrypt = require('bcrypt');
let express = require('express');
let router = express.Router();

let jwt = require("jsonwebtoken");
let jwtOptions = {};

// Set the secret
jwtOptions.secretOrKey = 'Viennoiserie';

router.post("/", async (request, response) => {
    try {
        let nick = request.body.nick;
        let password = request.body.password;

        let criteria = {
            "nick": nick};
        let colName = "users";

        // Database call
        let user = await api.findInCollection(colName, criteria);

        if (user.length !== 0) {

            // Check password
            if (bcrypt.compareSync(password, user.password)) {
                let nick = user.nick;
                let role = 'user';

                // Check if user is admin
                if (user.role === 'admin') {
                    role = 'admin';
                }
                //create JSON web token (JWT)
                let payload = {
                    'id': user._id,
                    'role': role,
                    'nick': nick
                };
                let token = jwt.sign(payload, jwtOptions.secretOrKey);

                // Send token if ok
                response.json({message: "ok", token: token});
            }
        }
    } catch (err) {
        console.log(err);
        response.json("Login failed!", err);
    }
});

module.exports = router;
```

I klienten sparas sedan JWT i till exempel localStorage, för att kunna hämtas fram vid behov:

```
localStorage.setItem('token', data.token);
```


# Artikel: Reactjs

Reactjs är ett bibliotek/ramverk som används för att skapa dynamiska user interfaces (användargränssnitt). Man säger att det är V:et i MVC, alltså vyn. Det är frikopplat från en serverdel, och därför kompatibelt med olika typ av servrar.

Normalt vill man alltså koppla React till ett backend, så som till exempel Express.js. I sina React-komponenter kan man sända anrop till ett REST-API på en server. Mer om komponenter senare.

React är framför allt perfekt när man behöver en webapp med ett komplext och interaktivt UI, som ska synkroniseras med uppdateringar i en underliggande datamodell.

Detta kan gälla att ta hand om förändringar i ett *state* och manipulering av DOM. Så som knappar och länkar som görs in/-aktiva, förändrade inputvärden från formulär, menyer som expanderar och dras samman etcetera. Sådana uppgifter gör React effektivt och snabbt.

Poängen är att bara det som förändras laddas om, och inte hela sidan. Att göra dessa uppgifter i vanilla Javascript och DOM-manipulering blir snabbt komplext och skapar risk för spaghettikod och buggar.

## Komponenter

Med React bygger man upp sitt GUI med hjälp av komponenter. Varje komponent innehåller html men här kan man även lägga Javascript. Man kan använda *functional Components* eller *class Components*

En enkel funktionell React-komponent ser ut så här:

```
import React from 'react';

const About = (props) => (
    <div className="about">
        <p>Den här sidan gjordes av {props.name}.</p>
    </div>
);

export default About;
```

Exempel på en Class Component:
```
import React, {Component} from 'react';

export class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        };
```
Funktionella komponenter är *stateless*, medan klasskomponenter är *stateful*, det vill säga i de senare kan man dra nytta av och uppdatera *state*, medan de första är framför allt till för presentation av data. Datan skickas uppifrån med hjälp av *props* på samma sätt som i en vanlig funktion.

Vanligtvis har man en index.js-fil som utgångspunkt, dit man sedan lyfter in resten av appen:
```
# index.js

import App from './App';

ReactDOM.render(
    <App />, document.getElementById('root')
);
```
Den andra parametern i render() innebär platsen (här: '#root') som omsluter appen.

Komponenterna kan importeras i en app-struktur likt den här:

```
# app.js

import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

import Home from './home';

export class App extends Component {
    render() {
        return (
                <div className="container">
                    <Header />    
                    <Home />
                    <Footer />
                </div>
        );
    }
}

export default App;
```
Länkar:
[https://www.sitepoint.com/react-fast-interactive-user-interfaces/](https://www.sitepoint.com/react-fast-interactive-user-interfaces/)

bridge the gap between web apps and native apps: users expect web apps to feel smooth and seamless like native apps.

Så vad är då fördelen? React ska vara snabbare? Istället för att manipulera DOM-trädet så manipuleras man Virtual DOM. Det resulterar i färre omladdningar av sidan.


## Virtual DOM
Reactjs använder Virtual DOM. Det abstraherar DOM och skapar en kopia. Denna kopia jämförs med originalet och vid en omladdning av någon komponents state behöver inte hela sidan laddas om. Det är enbart ändringarna som laddas igen, något som gör att gränssnittet känns snabbt och smidigt.

## Nackdelar
Reactjs släpptes 2013 och är fortfarande relativt nytt. Förändringstakten är därför hög. Exempelvis när det gäller React Router, en separat modul men som rekommenderas av React, så har man nyligen uppdaterat sin kod, vilket gör det mer komplicerat att hitta rätt information. Mycket av frågor och svar på StackOverflow, till exempel, blir snabbt föråldrad, och det är lätt att trampa fel och bli tvungen att göra om.

En annan nackdel tycker jag är att det tar lite tid att komma in i. Jag tror det kan handla om att vänja sig vid att tänka på ett annat sätt. Det skiljer sig och bryter mot tidigare 'regler' inom webdesign, som att blanda samman html och javascript i sina komponenter. Detta har varit en helig ko, att blanda presentation och beteende, när det gäller standardiseringen av webben. Nu ser det ut som om webbvärlden har varit på väg bort från detta tänkande, och istället vill organisera sina webbsidor och -appar i komponenter som ska innehålla allt de behöver. En fördel med att även baka in CSS-kod i komponenterna är att man slipper problemet med selektorer som kommer i konflikt med varandra utanför komponenten. En tanke med komponenter är att kunna använda dem som 'widgets', vilka innehåller allt de behöver i sig själv. Det vill säga att lättare kunna inkludera widgets med olika typer av funktionalitet i sina applikationer.

Exempel på komponentbibliotek: [https://devarchy.com/react](https://devarchy.com/react)
En kalenderwidget: https://jquense.github.io/react-widgets/api/Calendar/
