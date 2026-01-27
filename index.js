import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080


app.get("/", (req, res) => {
  res.json({message: "This route is working! Second time around! using CI/CD"})
})

app.listen(PORT, () => {
  console.log(`Sever is listening on port ${PORT}`)
})
