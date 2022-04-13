const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hejipapa:abcd1234@boiler-plage.3jvww.mongodb.net/boiler-plate?retryWrites=true&w=majority')
.then(() => console.log("MongoDB connected..."))
.catch((err) => console.log("error", err))


app.get('/', (req, res) => {
  res.send('Hello World~~~~')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


