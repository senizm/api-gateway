

## App Info

api-gateway is the entry point for location services. Handles http requests and connects to grpc server as a client.


## Startup
 
Commands to start api-gateway application:

1. `npm install`
2. `PORT=8080 GRPS_SERVER_LOCATION=localhost:50051 npm start`
    <br/> or <br/>
   `GRPS_SERVER_LOCATION=localhost:50051 npm start`
    <br/> (default port is 8080)

Commands to start in docker environment:

1. `docker build -t api-gateway:1.0.0 .`
2. `docker-compose up -d`

## Request

GET http://localhost:8080/location?lon=29.1234&lat=32.1234

## Response


