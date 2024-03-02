import { excuteQuery } from "../setup/dbConnection";

export default async function getNextFileId() {
  const result = (await excuteQuery({
    query: `SELECT id FROM csv_sheets.file_system ORDER BY id DESC LIMIT 1;`,
  })) as Array<{ id: number }>;
  return result[0]?.id ?? 0 + 1;
}
