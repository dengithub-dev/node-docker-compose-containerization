# node-docker-compose-containerization demo

A presentation on how to containerize a node app using docker and docker compose, and also an elaboration on using repositories with docker hub and simulation with play docker.

## Install the Dependencies

```
 npm install
```
 
 ## Build the container - docker
 ```
docker build -t node-docker-image .
 ```

## Running the container -docker 
```
docker run -p 5000:5000 node-docker-image
```

 ## Build and Run the docker compose container service
 
 ```
docker compose up -d --build
docker compose up
  
 ```
 
 ## Run the app

 ``` 
 localhost:5000 
 ```

## Push project to repository
- public [repository](https://hub.docker.com/repository/docker/dendockerhub/node-docker-image) 
- Before pushing remotely, in your local, tag the image id as demonstrated below
  ```
  docker tag <imageId> dendockerhub/node-docker-image:latest
  docker tag eeeeeeeee dendockerhub/node-docker-image:latest
  ```
- Then, push the image to remote
    ```
    docker push dendockerhub/node-docker-image:latest
    ```

 ## Run project anywhere
- You can simulate the image [here](https://labs.play-with-docker.com/)
- Make sure to pull the project 
```
    docker pull dendockerhub/node-docker-image
```
- And run
```
    docker run dendockerhub/node-docker-image
```