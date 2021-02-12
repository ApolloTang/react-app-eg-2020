const path = require('path')
const express = require('express')
const compression = require('compression')

const app = express()
app.disable('x-powered-by')

app.use(compression())                                // middleware - compression comes first
app.use(express.static(path.join(__dirname, 'dist'))) // middlewares - serve static assets

// routes - send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res){
  // The following header prevents browsers from caching index.html.
  // For each deployment index.html will load new resources.
  // Caching index.html will lead to blank page during deployment
  // because resources that is no longer available will be loaded.
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    Expires: '0',
  });
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// start server
const PORT = process.env.PORT || 8080
app.listen(PORT, function(){
  console.log('Production express server running at http://localhost:' + PORT)
})

