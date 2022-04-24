## Description

CRUD API to Musics and Categories. 

## Running the app

### 1 - Running using docker-compose

- First disable your local postgresql instances, with the following command:

```bash
$ sudo service postgresql stop
```

- Then, open project root folder and run:
```bash
$ docker-compose up
```

The app will be running on localhost:3000

### 2 - Running without docker-compose
- Create a database named ``` listen-app```  in your local postgresql instance
- Edit the file src/app.module.ts, changing the lines ``` 17-20```  to your local postgresql configuration. Default below:
``` 
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'listen_app',
```
- Then, run app by calling:
```bash
$ npm install && npm run start
```
The app will be running on localhost:3000

## Stay in touch
- Author - [Vinícius Nascimento](https://linkedin.com/in/nascivini)
