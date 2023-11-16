import axios from "axios"
const crunchbaseAPI = axios.create({
  baseURL:
    "https://api.crunchbase.com/api/v4/entities/organizations/tesla-motors?card_ids=founders,raised_funding_rounds&field_ids=categories,short_description,rank_org_company,founded_on,website,facebook,created_at&user_key=INSERT_KEY_HERE",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
