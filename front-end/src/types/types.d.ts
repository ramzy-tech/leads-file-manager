export type RecordType = {
  email: string;
  Identifier: string;
  "First name": string;
  "Last name": string;
  file_name: string;
};

export type ColDefinitionType = {
  Header: string;
  accessor: keyof RecordType;
};
export type FileType = {
  id: number;
  name: string;
  created_at: Date;
  parent: number;
  is_file: number;
  children: FileType[];
};

export type ToastType = {
  display: boolean;
  title: string;
  message: string;
  status: "SUCCESS" | "ERROR";
};
