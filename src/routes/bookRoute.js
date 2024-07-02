import * as bookController from "../controller/bookController.js";
import express from "express";

const router = express.Router();

router
  .route('/api/books')
  .get(bookController.getAll)
  .post(bookController.createOne);

router
  .route('/api/books/:id')
  .get(bookController.getOne)
  .patch(bookController.updateOne)
  .delete(bookController.deleteOne)

export default router;