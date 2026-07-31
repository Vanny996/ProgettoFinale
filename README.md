# Blog Multiutente

API REST per la gestione di un blog multiutente, con autenticazione JWT, gestione post con tag e immagini, commenti e like.

## Stack Tecnologico

- *Runtime*: Node.js 18+
- *Framework*: Express.js
- *Database*: MongoDB con Mongoose
- *Autenticazione*: JWT (jsonwebtoken)
- *Testing*: Mocha + Chai + Sinon + mongodb-memory-server
- *Validazione*: Joi (express-joi-validation)
- *Upload immagini*: Multer

## Prerequisiti

- Node.js 18 o superiore
- MongoDB in esecuzione (locale o remoto)
- npm

## Setup

1. Clona il repository:

   git clone <https://github.com/Vanny996/ProgettoFinale>
   cd MioProgetto


2. Installa le dipendenze:
   npm install


3. Crea un file .env nella root del progetto con le seguenti variabili:

   MONGO_URI=mongodb://localhost:27017/blog_multiutente
   JWT_SECRET=< ------->
   PORT=8004
   MAIL_SENDER=<email_mittente>
   MAIL_PASSWORD=<password_email>


4. Crea la cartella per gli upload delle immagini.
## Avvio del progetto


npm start


Il server sarà disponibile su http://localhost:8004 

## Test

Per lanciare l'intera suite di test :


npm test


I test usano mongodb-memory-server, quindi non è necessario avere MongoDB in esecuzione per lanciarli: viene creato un database temporaneo in memoria per ogni sessione di test.

### Struttura dei test


src/tests/
├── userController/      # Test di registrazione, login, modifica profilo
├── postController/      # Test CRUD post, tag, upload immagine
├── commentController/   # Test creazione/modifica/eliminazione commenti
├── likeController/       # Test like/unlike

## Struttura del progetto


src/
├── controllers/     # Gestione richieste HTTP (req/res)
├── services/        # Logica di business
├── repository/       # Accesso al database (Mongoose)
├── schemas/          # Schemi Mongoose
├── validators/       # Validazione input con Joi
├── middlewares/      # Middleware (es. autenticazione JWT)
├── exceptions/       # Eccezioni custom (404, 401, 403, 400)
├── Routes/           # Definizione delle rotte
├── config/           # Configurazione
└── tests/            # Test automatici


## Funzionalità principali

- *Autenticazione*: registrazione con conferma email, login con JWT, modifica profilo
- *Post*: creazione, modifica, eliminazione (solo autore), lettura pubblica, tag riutilizzabili, upload immagine opzionale
- *Commenti*: creazione, modifica ed eliminazione (solo autore del commento)
- *Like*: toggle like/unlike, un solo like per utente per post, conteggio pubblico

## Metodologia di sviluppo

Il progetto è stato sviluppato seguendo un ciclo TDD (Test-Driven Development, Red-Green-Refactor): per ogni funzionalità sono stati scritti prima i test (fase RED), poi l'implementazione minima per farli passare (fase GREEN), infine il refactoring del codice mantenendo i test verdi.
