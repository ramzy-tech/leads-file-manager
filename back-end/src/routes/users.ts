import express from "express";
import { excuteQuery } from "../setup/dbConnection";
import { UserType } from "../types/types";
import createCsvFile from "../utils/createCsvFile";
import getNextFileId from "../utils/getNextFileId";
import createFileRecord from "../utils/createFileRecord";
import deleteFileRecord from "../utils/deleteFileRecord";
import createUsersRecords from "../utils/createUsersRecords";

const router = express.Router();

router.post("/", async (req, res) => {
  const { rows, fileName, parent } = req.body;
  let nextFileId;
  try {
    nextFileId = await createFileRecord({
      is_file: true,
      name: fileName,
      parent_id: parent,
    });
    const { insertedRows, duplicateRows } = await createUsersRecords(
      rows,
      nextFileId,
      parent,
      fileName
    );

    !insertedRows.length && (await deleteFileRecord(nextFileId));

    res.status(201).json({ duplicateRows });
  } catch (error: any) {
    !error.insertedRows && nextFileId && (await deleteFileRecord(nextFileId));
    res.status(500).json(error);
    console.error(error);
  }
});

router.get("/:fileId", async (req, res) => {
  try {
    const rows = (await excuteQuery({
      query: `SELECT * FROM users where file_id = ${req.params.fileId}`,
    })) as UserType[];

    res.json(rows);
  } catch (error: any) {
    res.status(500).json(error);
    console.error(error);
  }
});

export default router;
