import express from "express";
import { excuteQuery } from "../setup/dbConnection";
import { FileType } from "../types/types";
import createFileRecord from "../utils/createFileRecord";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const rows = (await excuteQuery({
      query: `SELECT * FROM file_system where parent_id = ${req.params.id}`,
    })) as FileType[];

    res.json(rows);
  } catch (error: any) {
    res.status(500).json(error);
    console.error(error);
  }
});

router.post("/", async (req, res) => {
  try {
    await createFileRecord(req.body);
    res.status(201).send("Folder created successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to create folder");
  }
});

router.delete("/:id", async (req, res) => {
  const fileId = req.params.id;
  try {
    await excuteQuery({
      query: `DELETE FROM csv_sheets.users WHERE (file_id = ${fileId});`,
    });
    await excuteQuery({
      query: `DELETE FROM csv_sheets.file_system WHERE (id = ${fileId});`,
    });

    res.status(204).send();
  } catch (error: any) {
    res.status(500).json(error);
    console.error(error);
  }
});

export default router;
