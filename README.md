# node-docker-compose-containerization demo

A presentation on how to containerize a node app using docker and docker compose

## Install the Dependencies

```
 npm install
```
 
 ## Build the container - docker
 ```
docker build -t app .
 ```

### Running the container -docker 
```
docker run -p 8100:8100 -p
```

 ## Build and Run the docker compose container service
 
 ```
  docker compose up
  docker compose up -d --build
 ```
 
 ## Run the app

 ``` 
 localhost:8100 
 ```