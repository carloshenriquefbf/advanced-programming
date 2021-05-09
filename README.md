# About The Project

Using the TeXLive.net server to provide free résumés tailored to each user.

## Getting Started

To get a local copy up and running follow these simple example steps:

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/carloshenriquefbf/latex-cv-spa.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the server
   ```sh
   node server.js
   ```
The server is now running. Access it at http://localhost:3000/   
  
## License

Distributed under the MIT License.

## How It Works

There are two scripts located at /scripts, ```runlatex.js``` and ```update.js```. 

1. ```runlatex.js```

This script uses TeXLive.net server, which accepts a HTTP Post request specifying a LaTeX document and returns a PDF document or error log. This LaTeX document is generated on ```update.js```.

2. ```update.js```

This script fills the blanks on the résumé form according to the user input and fills the text area that shall be sent as a HTTP Post request to the TeXLive.net server through ```runlatex.js```. 

## Acknowledgements

* [runlatex.js](https://github.com/learnlatex/learnlatex.github.io)
