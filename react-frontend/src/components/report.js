import React from 'react';

// import {
//     HashRouter as Router,
//     Route,
//     Link
// } from 'react-router-dom';


const Report = () => (
    <div>
        <h2>Redovisningar</h2>
        <h3>Kmom01</h3>

        <p>I mitt kmom01 har jag separerat ett express-backend och ett react-frontend, vilka ligger bredvid varandra i en rootmapp, från vilken de kan köras och testas.</p>

        <p>Jag prövade Express och Pug. Helt okej, tycker jag. Det är skillnad gentemot JSX som kan användas tillsammans med React främst för att html-taggarna är bortskalade i Pug, och att man behöver använda exakta mellanslag. Jag tycker ändå det går snabbt att byta mellan dessa olika sätt att skriva sina vyer. JSX känns praktiskt eftersom det ligger så nära html, och det är ju heller inte beroende av att man sätter exakta mellanslag. Men det är en smaksak vad man väljer, tycker jag.</p>

        <p>Jag kikade på lite Express-videor, och hade inga större problem med att köra igång detta heller. Det känns som om det är enkelt uppbyggt, lätt att använda, och det gick fort att få en någorlunda bra översikt över vad ramverket kan hjälpa till med. Man kan skapa en server, fixa routrar, och även koppla med vyer i Pug eller Markdown. När jag byggt på min sida tog jag chansen att pröva på att koppla det till React. Det som var kul att upptäcka var att jag helt kunde separera express-backend från react-frontend, genom att köra express på en port, och sedan låta react hämta ifrån express-servern. På så sätt ska det också gå att välja andra ramverk för frontend om man behöver koppla ihop med express.</p>

        <p>Varför valde jag React? Jag kollade lite runt, funderade på Angular och Vue. Valet föll på React eftersom det är väldigt i ropet just nu. Jag är egentligen emot att välja det som trendar, och tänkte på att också skriva vanlig javascript, eftersom jag gillar att hålla det så basic som möjligt och inte krångla till det. Jag valde React för jag ville se vad det handlade om och lära mig det bättre. Jag valde det också för att det talas om att projektet möjligen kommer att innebära ett Black Jack-spel eller liknande. Efter att ha gått igenom en react-tutorial där man bygger ett tic-tac-toe spel, så kändes det som om React var ett bra val även för Black Jack. Det återstår att se. Om inte annat så syns ju React på en del jobbannonser. I slutändan handlar det om att testa ut ett ramverk för att ha ännu ett verktyg i sin låda. Först när man prövat på flera kan man välja rätt verktyg för rätt uppgift, resonerar jag.</p>

        <p>Det var inga större svårigheter att komma igång med React. Jag tror det hjälper att ha erfarenhet med Mithril.js från i våras.</p>

        <p>Det kändes bra att separera back-end och front-end i två repon. Jag har också lyft ut routerna i sina egna filer och sin egen mapp.</p>

        <p>Jag har testat ut Express scaffolding i form av express-create-app, och plockat ut delar därifrån till min egen kod, som routerna.</p>

        <p>Jag har testat Markdown och det ligger fortfarande kvar i min Express-backend. Det fungerade fint som i exemplet att koppla till Markdown. Men när jag lade till React så har jag istället flyttat texten dit.</p>

        <p>Det som erbjöd mer motstånd var att få den byggda React-appen att fungera med Express, och att få ordning på npm install och start. Fick en del hjälp av Anders, även i Hangout, och nu förstår jag helheten bättre. Med React följer en utvecklingsserver, denna kan startas med npm run test-dev. Denna behövs inte i produktion, eller för den som rättar. Då gäller istället npm install && npm start. Install bygger React-appens filer, i form av en index.html, samt en .js- och en .css-fil. Sedan körs express-servern, vilken serverar den byggda React-appen.</p>

        <p>Som appen är nu sänder inte servern några data, den utnyttjas inte, utan all text och bilder finns i frontend. Det får vänta till kommande kursmoment.</p>

        <p>Jag fixade så att repot på Github kopplas till Travis, Better Code Hub och Scrutinizer, något som också krävde lite extra arbete. Men nu ska det fungera.</p>

        <p>Jag använder också SASS för CSS-koden, även om jag inte utnyttjar det i så stor grad ännu, bara några variabler för färger. Det var enkelt att installera. En katalog för scss-filen, och en för css, och så använder jag ett watch-process som kompilerar när jag sparar min scss-fil. Snabbt och lätt.</p>

        <h3>Kmom02</h3>
        <p><em>Har du jobbat med Docker eller andra virtualiseringstekniker innan?</em></p>

        <p>Jag har inte jobbat med Docker, men i en tidigare kurs använde vi VirtualBox för att sätta upp ett virtuellt operativsystem. VB var ju spännande på så sätt att jag kunde köra Windows eller Linux på min Mac, för att testa applikationer. Samtidigt var det en resurskrävande teknik, både på hårddisken och för processorn, och ju mer man fyller datorn med detta ju svårare blir det att använda. Jag vill minnas att installationen också var omfattande. </p>

        <p><em>Hur ser du på möjligheterna att använda dig av Docker för att jobba med tester av ditt repo?</em></p>

        <p>Det ser lovande ut. En stor skillnad från VB är att det känns så lättviktigt. Som jag förstår det är det beroendena som knyts upp till utvecklingsmiljön, till skillnad från VM som verkar kräva mycket mer resurser för att fungera och starta upp. Jag ser fram emot att börja använda Docker för att testa program i olika miljöer, och jobba lite mer strukturerat. I synnerhet när man vill sätta upp en professionell testmiljö, för att kunna testa på ett flertal olika miljöer.</p>

        <p>Den stora skillnaden är, som jag förstår det, att Virtual Box simulerar ett helt operativsystem, exempelvis kan jag köra windows i någon version, på en mac. Med Docker kan jag köra program i olika versioner, antingen med mitt macOS som bas, eller tillsammans med Virtual Box och ett virtuellt operativssystem som Windows eller Linux. De båda teknikerna kan användas tillsammans och utfyller varandra.</p>

        <p><em>Gick allt smidigt eller stötte du på problem?</em></p>
        <p>Det gick någorlunda smidigt. Kanske det var enklare på Mac, läste att det hade varit strul för andra operativsystem. Jag gjorde en <code>docker pull node</code> för att ladda ner node-imagen ifrån docker. Jag skapade tre olika versioner av node, för mitt repo, med hjälp av en docker-compose.yml-fil. För att det ska startas behövde jag lägga in command: <em>npm start</em>. Det som krånglade mest var portarna och hur man skulle skriva detta. Jag googlade runt och hittade en lösning som fungerade. Jag använder DBWEBB_PORT som variabel i <em>environment</em>, sedan 1337:1337 i <em>ports</em>. Jag prövade andra varianter, som att skriva 1337:80, vilket borde betyda att man lyssnar på port 1337 och kör på port 80 i dockercontainern, något som inte fungerar. Det verkar vara något specifikt med node, och kanske med kombinationen med express.js, som kräver att det ska vara samma portnummer både för ens OS och för dockercontainern. Jag får bara acceptera och gå vidare.</p>

        <p>Edit: Jag har fått förklarat för mig att porten till höger ska vara porten som Node snurrar på inne i containern. Jag satte därför denna till samma som jag sätter variabeln DBWEBB_PORT i docker-compose-scriptet. Jag måste starta node/express på samma port som den jag uppger till höger i <em>ports</em></p>

        <p><em>Skapade du din egen image, berätta om den?</em></p>
        <p>Jag väntar med det till nästa kmom.</p>

        <h3>Kmom03</h3>

        <p>Man startar testerna för de tre olika docker-containrarna med npm run test1, npm run test2 och npm run test3. Då testas applikationen i Node 7, 8 och 9. Obs att det kan ta lite tid. Man behöver också trycka q för att lämna Jests test-cli, och för att sista kommandot som kollar code coverage ska utföras.</p>
        <h3>Kmom04</h3>
        <h3>Kmom05</h3>
        <h3>Kmom06</h3>
        <h3>Kmom07-10</h3>
    </div>
);

export default Report;
