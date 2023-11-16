import axios from "axios"
const salesforceAPI = axios.create({
  baseURL:
    "https://developer.salesforce.com/docs/atlas.en-us.chatterapi.meta/chatterapi/intro_what_is_chatter_connect.htm",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
