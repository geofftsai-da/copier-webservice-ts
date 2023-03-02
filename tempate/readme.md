# {{service_name}}
The webservice {{service_name}}


## Building 
To build the project you will need docker installed
```
docker build -t {{service_name}} .
```

## Developing
To develop locally you can do this in a docker container
```
docker run -it -p 3000:3000 -e NODE_ENV=development -v $PWD:/app {{service_name}} dev
```


## Production
The project is defaulted to start in production mode, you can run it with 
```
docker run -it -p 3000:3000 -v $PWD:/app {{service_name}} start
```