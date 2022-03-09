# Bergtagen - Prosjekt gjennom fagruppen "Appgarasjen" i Bekk Trondheim

Applikasjonen er initialisert med [Create React App](https://github.com/facebook/create-react-app).

## Kjøre prosjektet lokalt

`cd bergtagen`
`npm ci`
`npm start`

Applikasjonen kjører da på [http://localhost:3000](http://localhost:3000).

Hot-reloading er enabled by deafult, så siden oppdaterer seg når man gjør endringer.

### Bygge prosjektet for produksjon

`npm run build`

### Deploy applikasjonen til Github-Pages

For å deploye nyeste versjon til Github Pages:
`npm run deploy -- -m "Deploy Bergtagen V*nummer*`

Der nummer er **+1** på forrige versjonsnummer. (Se i commit-historikk på **gh-pages** branchen for å finne neste versjonsnummer).

Dette pusher en commit på **gh-pages** branchen, som trigger github actions som bygger og deployer applikasjonen.
Applikasjonen kjører da på [https://bendikmark.github.io/bergtagen](https://bendikmark.github.io/bergtagen).
