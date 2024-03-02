import { mkdir } from "fs/promises";
import { excuteQuery } from "../setup/dbConnection";
import { CreateFileType, FileType } from "../types/types";
import path from "path";
import { ResultSetHeader } from "mysql2";

export default async function createFileRecord({
  is_file,
  name,
  parent_id,
}: CreateFileType) {
  const result = (await excuteQuery({
    query: `INSERT INTO csv_sheets.file_system (name, created_at ,parent_id, is_file) VALUES (?, ?, ?, ?);`,
    values: [
      name,
      new Date().toISOString().slice(0, 19).replace("T", " "),
      parent_id.toString(),
      is_file ? "1" : "0",
    ],
  })) as ResultSetHeader;

  return result.insertId;
}
