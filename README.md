## Backend service for database course.

### installation.

close the repo.  
`$ git clone https://github.com/sd20i/db_backend.git`

Install dependencies.  
`$ yarn`

Create a .ENV file in the root directory with following fields.  
`DB_HOST=127.0.0.1 DB_USER=<your mysql username> DB_PASSWORD=<your mysql password> DB_DATABASE=carBuilder DB_DIALECT=mysql DB_PORT=<your mysql port. most likely 3306>`

Run application in development mode, will provide nodemon for continues recompile.  
`$ yarn run dev`

Build application.  
`$ yarn run build`

### Docker.

run with docker.  
`$ docker-compose up`

### App info.

Application is written in Node js with express and uses the typescript subset.  
to run the application in development mode, use the `$ yarn run dev` script  
For production, first build the Typescript with `$ yarn run build`

### Travis CI pipeline.

Travis will run all tests before accepting a pull request to be merged.

[![Build Status](https://travis-ci.org/sd20i/db_backend.svg?branch=master)](https://travis-ci.org/sd20i/db_backend)
