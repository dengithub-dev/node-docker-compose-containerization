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

 ## Push repo to hub
 ```
docker tag local-image:tagname new-repo:tagname
docker push new-repo:tagname

Note: Make sure to change tagname with your desired image repository tag.
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