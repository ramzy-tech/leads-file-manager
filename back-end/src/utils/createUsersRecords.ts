import { createMysqlConnection } from "../setup/createConnection";
import { excuteQuery } from "../setup/dbConnection";

export default async function createUsersRecords(
  rows: string[][],
  nextFileId: number,
  parent: number,
  file_name: string
) {
  const placeHolders = Array(84).fill("?").join(", ");

  const addedFields = [nextFileId.toString(), parent.toString(), file_name];
  rows.forEach((userRow) => userRow.push(...addedFields));

  const insertQuery = `INSERT INTO csv_sheets.users (headline, industry, location, skills, position, about, personlization, company_name, company_domain, company_name_cleaned, first_name, last_name, full_name, linkedin, open, premium, open_to_work, email, email_status, additional_emails, personal_email, num_of_connections, twitter, company_link, company_about, company_founded, company_size, company_location_1, company_location_2, company_location_3, company_city_1, company_city_2, company_city_3, company_address, company_postal_code, company_phone, company_industry_1, company_industry_2, company_industry_3, domain_status, company_specialties, company_size_category, social_fields, keywords, annual_revenue, technologies, funding_events, total_funding, last_funding_round_date, last_funding_stage, alexa_ranking, crunchbase_url, market_cap, position_1, position_2, position_3, education_1, education_2, education_3, website_1, website_2, website_3, phone_number_1, phone_number_2, phone_number_3, company_email, username, domain, status, is_safe_to_send, is_valid_syntax, is_disposable, is_role_account, mx_accepts_mail, mx_records, can_connect_smtp, has_inbox_full, is_catch_all, is_deliverable, is_disabled, is_spamtrap, file_id, parent_id, file_name) VALUES (${placeHolders});`;

  const insertedRows = [];
  const duplicateRows = [];
  const mysqlConnection = await createMysqlConnection();

  for (const row of rows) {
    try {
      await mysqlConnection.execute(insertQuery, row);
      insertedRows.push(row);
    } catch (error: any) {
      // Check if the error is a duplicate key violation
      if (error.code === "ER_DUP_ENTRY") {
        duplicateRows.push({
          firstName: row[10],
          lastName: row[11],
          email: row[17],
          companyName: row[7],
          fileName: row[83],
        });
      } else {
        mysqlConnection.end();
        throw { ...error, insertedRows: insertedRows.length };
      }
    }
  }
  mysqlConnection.end();
  return { insertedRows, duplicateRows };
}
