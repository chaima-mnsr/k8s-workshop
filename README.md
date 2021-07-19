# k8s-workshop
This project contains the exercises material for the kubernetes workshop by Chaima Mansouri. This will help the audience practice the deployment of a k8s application during the workshop. 

## Questions store application 

### Introduction
Questions store is a web application where a user can write their name and the question they have and all the questions will be stored in a central MangoDB deployed in Atlas cloud. 


### Utility 

Questions store is a simple web application that will serve as an exercise for the workshop audience where the user can deploy the application, link it to a database and interact with the 
UI interface. The user is also able to change the application background and text color. 

With that, the user can see the utility of the ConfigMaps, secrets, deployments, Pods, services and Ingress. 

The application will also serve as tool for the audience of the workshop to store their questions, so we can have a cleaner, easier and more organized way of handling the Q&A session at the end of the workshop.

### Docker

The application was already containerized into a docker image and pushed to the docker hub. It is publicly available and could be pulled using the following command:

```shell script
 docker push chaimamnsr/questions-store:latest
```


The application is exposed on port `8080` and in order to run it locally using docker, you should set the database environment variables for it to work. See the following example:

```shell script
 docker run -it -e DB_PASSWORD=<db_password> -e DB_USER=<db_username> -e DB_USER=<db_name> -p 8080:8080 questions-store:latest
```

Optional: It is possible to add `BG_COLOR` and `TEXT_COLOR` to set the background and text color of the application UI. 


## Questions store k8s manifests 

The `questions-store-k8s` directory has the kubernetes manifests that will help deploying the application. 
