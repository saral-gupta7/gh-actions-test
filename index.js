import express from 'express';


const app = express();
const PORT = process.env.PORT || 8080


app.get("/", (req, res) => {
  res.json({ message: "This route is working! CI/CD have been setup! Checking CI/CD again!" })
})

app.listen(PORT, () => {
  console.log(`Sever is listening on port ${PORT}`)
})
