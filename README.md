# contact-list-App

To install node packages use 
install npm 

create mongodb document with ref of contactlist.json

--------------------------------------------


https://github.com/andzdroid/mongo-express

http://andzdroid.github.io/mongo-express/


npm install mongo-express


========================================================================

go to mongo-express folder using Command line / gitbash/ cmd

/node_modules/mongo-express 

========================================================================

To configure:

Copy config.default.js into a new file called config.js.

Fill in your MongoDB connection details, and any other options you want to change.

=======================================================================

To run:

node app

========================================================================

http://localhost:8081

 basicAuth: {
    username: process.env.ME_CONFIG_BASICAUTH_USERNAME || 'admin',
    password: process.env.ME_CONFIG_BASICAUTH_PASSWORD || 'pass'
  },


  site: {
    host: '0.0.0.0',
    port: 8081,
....  
}

You can change port number in config.js  file... 

