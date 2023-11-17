import axios from "axios"
const tdbankAPI = axios.create({
  baseURL: "https://solution-investment-44558.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return tdbankAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_entity_list(payload) {
  return tdbankAPI.get(`/api/v1/entity/`)
}
function api_v1_entity_create(payload) {
  return tdbankAPI.post(`/api/v1/entity/`, payload)
}
function api_v1_entity_retrieve(payload) {
  return tdbankAPI.get(`/api/v1/entity/${payload.id}/`)
}
function api_v1_entity_update(payload) {
  return tdbankAPI.put(`/api/v1/entity/${payload.id}/`, payload)
}
function api_v1_entity_partial_update(payload) {
  return tdbankAPI.patch(`/api/v1/entity/${payload.id}/`, payload)
}
function api_v1_entity_destroy(payload) {
  return tdbankAPI.delete(`/api/v1/entity/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return tdbankAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return tdbankAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return tdbankAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return tdbankAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return tdbankAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return tdbankAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tdbankAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return tdbankAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return tdbankAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return tdbankAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return tdbankAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tdbankAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return tdbankAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_entity_list,
  api_v1_entity_create,
  api_v1_entity_retrieve,
  api_v1_entity_update,
  api_v1_entity_partial_update,
  api_v1_entity_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
