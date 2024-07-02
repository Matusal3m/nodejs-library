import db from "../database/connection.js";

const getAll = async (req, res) => {
  const sql = "SELECT * FROM books";

  const result = await db.query(sql);

  res.status(200).json(result[0]);
};

const getOne = async (req, res) => {
  const sql = "SELECT * FROM books WHERE id = ?";
  const values = [req.params.id];

  const result = await db.execute(sql, values);

  res.status(200).json(result[0]);
};

const createOne = async (req, res) => {
  const sql = "INSERT INTO books (title, author, genre) VALUES (?, ?, ?)";
  const values = [req.body.title, req.body.author, req.body.genre];

  const result = await db.execute(sql, values);

  res.status(200).json(result);
};

const updateOne = async (req, res) => {
  const sql = "UPDATE books SET title = ?, author = ?, genre = ? WHERE id = ?";
  const values = [req.body.title, req.body.author, req.body.genre, req.params.id];

  const result = await db.execute(sql, values);

  res.status(200).json(result);
};

const deleteOne = async (req, res) => {
  const sql = "DELETE FROM books WHERE id = ?";
  const values = [req.params.id];

  const result = await db.execute(sql, values);

  res.status(200).json(result);
};

export { getAll, getOne, createOne, updateOne, deleteOne };
