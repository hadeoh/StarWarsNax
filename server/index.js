import "@babel/polyfill"; 
import express from "express";
import movieRouter from '../server/routes/movies';
import characterRouter from '../server/routes/character';
import commentRouter from '../server/routes/comments'
 
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (_req, res) =>
  res.status(200).json({
    statusCode: 200,
    status: "success",
    message: "Welcome to StarWars API."
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/api/v1/movies', movieRouter);
app.use('/api/v1/characters', characterRouter);
app.use('/api/v1/comments', commentRouter);

export default app;