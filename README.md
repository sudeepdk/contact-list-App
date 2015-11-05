# contact-list-App

To install node packages use 
install npm 

create mongodb document with ref of contactlist.json

--------------------------------------------


https://github.com/andzdroid/mongo-express

http://andzdroid.github.io/mongo-express/

<pre><code>
npm install mongo-express
</code></pre>

========================================================================

go to mongo-express folder using Command line / gitbash/ cmd
<pre><code>
/node_modules/mongo-express 
</code></pre>
========================================================================

To configure:

Copy config.default.js into a new file called config.js.

Fill in your MongoDB connection details, and any other options you want to change.

=======================================================================

To run:
<pre><code>
node app
</code></pre>
========================================================================

http://localhost:8081
<pre><code>
 basicAuth: {
    username: process.env.ME_CONFIG_BASICAUTH_USERNAME || 'admin',
    password: process.env.ME_CONFIG_BASICAUTH_PASSWORD || 'pass'
  },


  site: {
    host: '0.0.0.0',
    port: 8081,
....  
}
</code></pre>
You can change port number in config.js  file... 

