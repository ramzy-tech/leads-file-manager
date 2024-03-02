import { writeFileSync } from "fs";
import { UserType } from "../types/types";
import path from "path";

const createCsvFile = (
  rows: (string | number)[][],
  uploadPath: string,
  fileName: string
) => {
  // Create CSV file
  const csvContent = rows.map((row) => row.join(",")).join("\n");
  const csvFileName = path.join(
    __dirname,
    "../..",
    "root/",
    uploadPath,
    fileName
  );

  writeFileSync(csvFileName, csvContent, "utf-8");
};

export default createCsvFile;
