import { excuteQuery } from "../setup/dbConnection";

export default async function deleteFileRecord(fileId: number) {
  return await excuteQuery({
    query: `DELETE FROM csv_sheets.file_system WHERE (id = ?);`,
    values: [fileId.toString()],
  });
}
