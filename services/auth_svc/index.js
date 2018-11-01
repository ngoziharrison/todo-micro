const express = require("express")

const app = express()

app.use((req, resp) => {
  if (req.get('authorization') === process.env.TOKEN) {
    res.json({ ok: false})
  } else {
    res.status(401).json({ ok: false})
  }

})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`auth_svc listening on port ${port}`)

})
