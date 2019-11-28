# Vuejs and Django aplication


## Versions
"vue": "2.6.10"
Django: 2.2.7

### This template also uses
Django Rest Framework
Django Webpack Loader
Django Debug Tollbar


## Project initialization
Fist create eh virtual enviroment
```
pip -m virtual
```
Then install the dependencies
```
pip install -r requirements.txt
npm install
```

### Compiling for production
Since we are using Webpack to parse all the Vue components. You can run the aplications compiling the Javascript files using
```
npm run build
```
This script will allow you to have a production version of yourt aplication that runs through Djhango without problems


### Compiling for production
For develoment and use of the hot reload feature, you can run both servers at the same time
```
npm run serve
./ manage.py runserver

```
 NOTE: if you start the python server with the Production feature, and then initialize the development version you should restart the python server.

## Adding entrypoints

You have a preconfigured entrypoint to your aplication through the index.html file. This file recieves all the configuration from the main.js file in the source folder (src). Teh public folder is also the default template folder for Django.

You can add more entrypoints for your aplication, using the file 'config/commons.json' this file not only defines all the shared documents between vue and django but algo provides a list of entrypoint jascscript files, you can add any entrypoint here and then append that entrypoint to any template as is shown in the example, public/index.html

# Base Django files
The base settings are divided into dev and production, both of them recieve the main part of the configuration toem the config/base.py here you can set configurations for your djanfo aplication.
