# HTTPService
This dummy application is about HTTP service and is made with NodeJs and ExpressJs.

|Endpoint | Description                                                      |
|---------|------------------------------------------------------------------|
|/hello | returns "Hello Stranger"                                         |
|/hello?name=RezaNorouzzadeh | returns "Hello Reza Norouzzadeh" (camel case gets cut by spaces) |
|/hello/RezaNrzdh | returns "Hello Reza Nrzdh" (camel case gets cut by spaces)       |
|/author | returns "Reza Norouzzadeh"                                       |

## Quick Start
The quickest way to get started with HTTPService.

To view the service, clone the HTTPService repo and install the dependencies:
```console
$ git clone git://github.com:RezaNrzdh/HTTPService.git
$ cd HTTPService
$ npm install
```

Then start the server
```console
$ npm start
```
Now, you could view the service at: http://localhost:8080

## Run with Docker
Another way for run and view the service is Docker.

1. Make sure the Docker is installed and Running in your machine. [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. Make sure you are in the root of the project folder.
3. Create the docker image.
    ```console
    $ docker build . -t httpservice
    ```
4. Run Container.
   ```console
   $ docker run -d -p 8080:8080 --name httpservice-1 httpservice:latest
   ```
Now, you could view the service at: http://localhost:8080