# tylerdouglas.co
Source code for tylerdouglas.co - Tyler Douglas' personal website.

## Client
The Vue/Typescript frontend is housed in the `/client` directory. Tailwind is used for CSS styling

### Running the frontend

#### Compile and Hot-Reload for Development

```sh
npm run dev
npm run watch-css
```


#### Type-Check, Compile and Minify for Production

```sh
npm run build
npm run build-css
```

#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

#### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


## Server
Node.js backend with psql instance

### Running the backend
#### Compile and Hot-Reload for Development
```sh
npm run devStart
```


#### Build, set the environment variables, then run
```sh
npm run build
npm run prod
```
Technically `npm run tsProd` can be used in production as well because `ts-node` can be used in production with the 
--transpile-only flag. 
But 
its probably better to use 
tsc + 
node in production as instructed above.

#### Demonize for production
In an actual product environment, you'll want to demonize. I choose to use `pm2` which can be done via the following:
```shell
pm2 start "npm run prod" --name tylerdouglasBackend
```

### Database
#### Migrate DB from Local to Production
1. `pg_dump the_db_name > the_database.sql`
2. Use SCP to copy DB dump from local machine to remote VPS. `scp -i ~/.ssh/LightsailDefaultKey-us-west-2.pem 
   the_database.sql ubuntu@35.80.138.
   96:/home/ubuntu`
3. `psql the_prod_db_name < the_database.sql`


## TODO:
- Redo TD Logo
- Version Database
  - Basically [this question](https://stackoverflow.com/questions/175451/how-do-you-version-your-database-schema)
- Can possibly use [updatable views](https://www.percona.
  com/blog/2019/01/10/sql-updatable-views-performing-schema-updates-with-minimal-downtime/) to generate ALTER 
  statements between versions
- Can use migration framework like db-migrate, sequilize, or [knex](https://medium.
  com/patrik-bego/database-schema-migrations-with-nodejs-de9d9090b177) to execute migration commands. But still need 
  to actually write SQL statements for deployment and rollback