import express from "express";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/test",
    route: (req: any, res: any) => {
      res.send("hello world");
    },
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
