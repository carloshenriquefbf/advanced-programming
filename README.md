# Advanced Programming

This is a repository for UFRJ's Advanced Programming (EEL418) class.

## About The Project

Using the TeXLive.net server to provide free résumés tailored to each user.

### Getting Started

To get a local copy up and running follow these simple example steps:

#### Execution 

1. Clone the repo
   ```sh
   git clone https://github.com/carloshenriquefbf/latex-cv-spa.git
   ```
   
2. Install docker (go to next stage if you already have installed)


3. Execute the comands in the terminal 
   ```sh
   sudo docker build -f Dockerfile -t spa-curriculos . 
   sudo docker run -p 3000:3000 -d spa-curriculos
   ```
The server is now running. Access it at http://localhost:3000/

*spa-curriculos can be substituted for any other tag
**the first port can also be chosen, the second one needs to be 3000 ( "-p < port >:3000"). Then the server will run at http://localhost:< port >/


#### Stoping and removing the container

* To see if the container is running type in the terminal:
    ```sh
   (sudo) docker ps
   ```

* Use the container id shown to stop it:
   ```sh
   (sudo) docker stop < container id > 
   ```

* To remove it:
   ```sh
   (sudo) docker rm < container id > 
   ```

### License

Distributed under the MIT License.

### How It Works

There are two scripts located at /scripts, ```runlatex.js``` and ```update.js```. 

1. ```runlatex.js```

This script uses TeXLive.net server, which accepts a HTTP Post request specifying a LaTeX document and returns a PDF document or error log. This LaTeX document is generated on ```update.js```.

2. ```update.js```

This script fills the blanks on the résumé form according to the user input and fills the text area that shall be sent as a HTTP Post request to the TeXLive.net server through ```runlatex.js```. 

### Acknowledgements

* [runlatex.js](https://github.com/learnlatex/learnlatex.github.io)
