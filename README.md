# Fullstack Template

## Client

### TODO

## Server

### Database
#### Migrate DB from Local to Production
1. `pg_dump the_db_name > the_database.sql`
2. Use SCP to copy DB dump from local machine to remote VPS. `scp -i ~/.ssh/LightsailDefaultKey-us-west-2.pem 
   the_database.sql ubuntu@35.80.138.
   96:/home/ubuntu`
3. `psql the_prod_db_name < the_database.sql`


#### TODO:
- Version Database
  - Basically [this question](https://stackoverflow.com/questions/175451/how-do-you-version-your-database-schema)
- Can possibly use [updatable views](https://www.percona.
  com/blog/2019/01/10/sql-updatable-views-performing-schema-updates-with-minimal-downtime/) to generate ALTER 
  statements between versions
- Can use migration framework like db-migrate, sequilize, or [knex](https://medium.
  com/patrik-bego/database-schema-migrations-with-nodejs-de9d9090b177) to execute migration commands. But still need 
  to actually write SQL statements for deployment and rollback