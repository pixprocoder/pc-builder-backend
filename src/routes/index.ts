import express from "express";

const router = express.Router();

const moduleRoutes = [
  {
    path: "",
    route: (req: any, res: any) => {
      res.send("helloworld");
    },
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
