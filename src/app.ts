import cors from "cors";
import express, { Application, Request, Response } from "express";
import routes from "./routes";

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);

//handle not found
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

export default app;
