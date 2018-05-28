const express = require('express')
const app = express()

const port = 3000
const cas = "https://localhost:8443/cas"
const service = `http://localhost:${port}`

app.get('/', function (req, res) {
  if (req.query.ticket) {
    res.redirect(`${cas}/p3/serviceValidate?ticket=${req.query.ticket}&service=${service}&format=JSON`)
  } else {
    res.send(`<html>
      <body>
        <a href="${cas}/login?service=${service}">Start or Continue Authentication</a>
        <br>
        <a href="${cas}/login?service=${service}&renew=true">Restart Authentication</a>
      </body>
    </html>
    `)
  }
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
