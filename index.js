import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello akash')
})

app.get('/ash',(req,res)=>{
  res.send('hi there you are on /ash ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
