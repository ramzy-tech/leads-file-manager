import { ColDefinitionType } from "../types/types";

export const USERS_COLUMNS = [
  {
    Header: "Headline",
    accessor: "headline",
  },
  {
    Header: "Industry",
    accessor: "industry",
  },
  {
    Header: "Location",
    accessor: "location",
  },
  {
    Header: "Skills",
    accessor: "skills",
  },
  {
    Header: "Position",
    accessor: "position",
  },
  {
    Header: "About",
    accessor: "about",
  },
  {
    Header: "Personlization",
    accessor: "personlization",
  },
  {
    Header: "Company Name",
    accessor: "company_name",
  },
  {
    Header: "Company Domain",
    accessor: "company_domain",
  },
  {
    Header: "Company Name Cleaned",
    accessor: "company_name_cleaned",
  },
  {
    Header: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Full Name",
    accessor: "full_name",
  },
  {
    Header: "LinkedIn",
    accessor: "linkedin",
  },
  {
    Header: "Open",
    accessor: "open",
  },
  {
    Header: "Premium",
    accessor: "premium",
  },
  {
    Header: "Open to Work",
    accessor: "open_to_work",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Email Status",
    accessor: "email_status",
  },
  {
    Header: "Additional Emails",
    accessor: "additional_emails",
  },
  {
    Header: "Personal Email",
    accessor: "personal_email",
  },
  {
    Header: "Number of Connections",
    accessor: "num_of_connections",
  },
  {
    Header: "Twitter",
    accessor: "twitter",
  },
  {
    Header: "Company Link",
    accessor: "company_link",
  },
  {
    Header: "Company About",
    accessor: "company_about",
  },
  {
    Header: "Company Founded",
    accessor: "company_founded",
  },
  {
    Header: "Company Size",
    accessor: "company_size",
  },
  {
    Header: "Company Location 1",
    accessor: "company_location_1",
  },
  {
    Header: "Company Location 2",
    accessor: "company_location_2",
  },
  {
    Header: "Company Location 3",
    accessor: "company_location_3",
  },
  {
    Header: "Company City 1",
    accessor: "company_city_1",
  },
  {
    Header: "Company City 2",
    accessor: "company_city_2",
  },
  {
    Header: "Company City 3",
    accessor: "company_city_3",
  },
  {
    Header: "Company Address",
    accessor: "company_address",
  },
  {
    Header: "Company Postal Code",
    accessor: "company_postal_code",
  },
  {
    Header: "Company Phone",
    accessor: "company_phone",
  },
  {
    Header: "Company Industry 1",
    accessor: "company_industry_1",
  },
  {
    Header: "Company Industry 2",
    accessor: "company_industry_2",
  },
  {
    Header: "Company Industry 3",
    accessor: "company_industry_3",
  },
  {
    Header: "Domain Status",
    accessor: "domain_status",
  },
  {
    Header: "Company Specialties",
    accessor: "company_specialties",
  },
  {
    Header: "Company Size Category",
    accessor: "company_size_category",
  },
  {
    Header: "Social Fields",
    accessor: "social_fields",
  },
  {
    Header: "Keywords",
    accessor: "keywords",
  },
  {
    Header: "Annual Revenue",
    accessor: "annual_revenue",
  },
  {
    Header: "Technologies",
    accessor: "technologies",
  },
  {
    Header: "Funding Events",
    accessor: "funding_events",
  },
  {
    Header: "Total Funding",
    accessor: "total_funding",
  },
  {
    Header: "Last Funding Round Date",
    accessor: "last_funding_round_date",
  },
  {
    Header: "Last Funding Stage",
    accessor: "last_funding_stage",
  },
  {
    Header: "Alexa Ranking",
    accessor: "alexa_ranking",
  },
  {
    Header: "Crunchbase URL",
    accessor: "crunchbase_url",
  },
  {
    Header: "Market Cap",
    accessor: "market_cap",
  },
  {
    Header: "Position 1",
    accessor: "position_1",
  },
  {
    Header: "Position 2",
    accessor: "position_2",
  },
  {
    Header: "Position 3",
    accessor: "position_3",
  },
  {
    Header: "Education 1",
    accessor: "education_1",
  },
  {
    Header: "Education 2",
    accessor: "education_2",
  },
  {
    Header: "Education 3",
    accessor: "education_3",
  },
  {
    Header: "Website 1",
    accessor: "website_1",
  },
  {
    Header: "Website 2",
    accessor: "website_2",
  },
  {
    Header: "Website 3",
    accessor: "website_3",
  },
  {
    Header: "Phone Number 1",
    accessor: "phone_number_1",
  },
  {
    Header: "Phone Number 2",
    accessor: "phone_number_2",
  },
  {
    Header: "Phone Number 3",
    accessor: "phone_number_3",
  },
  {
    Header: "Company Email",
    accessor: "company_email",
  },
  {
    Header: "Username",
    accessor: "username",
  },
  {
    Header: "Domain",
    accessor: "domain",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Overall Score",
    accessor: "overall_score",
  },
  {
    Header: "Is Safe to Send",
    accessor: "is_safe_to_send",
  },
  {
    Header: "Is Valid Syntax",
    accessor: "is_valid_syntax",
  },
  {
    Header: "Is Disposable",
    accessor: "is_disposable",
  },
  {
    Header: "Is Role Account",
    accessor: "is_role_account",
  },
  {
    Header: "MX Accepts Mail",
    accessor: "mx_accepts_mail",
  },
  {
    Header: "MX Records",
    accessor: "mx_records",
  },
  {
    Header: "Can Connect SMTP",
    accessor: "can_connect_smtp",
  },
  {
    Header: "Has Inbox Full",
    accessor: "has_inbox_full",
  },
  {
    Header: "Is Catch All",
    accessor: "is_catch_all",
  },
  {
    Header: "Is Deliverable",
    accessor: "is_deliverable",
  },
  {
    Header: "Is Disabled",
    accessor: "is_disabled",
  },
  {
    Header: "Is Spamtrap",
    accessor: "is_spamtrap",
  },
];

export const USERS_Report_COLUMNS = [
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "email",
    accessor: "email",
  },
  {
    Header: "Company Name",
    accessor: "companyName",
  },
  {
    Header: "File Name",
    accessor: "fileName",
  },
] as ColDefinitionType[];
