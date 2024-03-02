export type UserType = {
  email: string;
};

export type FileType = {
  id: number;
  name: string;
  created_at: Date;
  parent: number;
  is_file: number;
  children: FileType[];
};

export type CreateFileType = {
  is_file: boolean;
  name: string;
  parent_id: number;
};
