import express from 'express'
const app = express()
const port = 3000
 import cors from "cors"
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/', (req, res) => {
  console.log(req.form);
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})