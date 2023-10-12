import { fetch } from "../fetch.services";
import { API_PATH, GOOGLE_API_PATH } from "../../constants/path"
import { AUTH_TOKEN, GOOGLE_API_KEY, VENDOR_TOKEN } from '../../constants/token'
import { email, password } from "../../utility/regex";

export const getCustomerCredit = (customer_id) => {
  return fetch("get", API_PATH + `getCustomerCredit&customer_id=${customer_id}`, {}, {});
}

export const getTrackstatus = (docket_no) => {
  return fetch("get", API_PATH + `trackingByDocketId&docket_no=${docket_no}`, {}, {})
}

export const getListing = (track_no) => {
  return fetch("get", API_PATH + `tracking_listing`, {}, {})
}

export const trackingDetail = (docket_no) => {
  return fetch("get", API_PATH + `trackingDetailsByDocketId&docket_no=${docket_no}`, {}, {})
}

export const lrlayoutDetail = (docket_no) => {
  return fetch("get", API_PATH + `LRByDocumentId&lr_no=${docket_no}`, {}, {})
}

export const moneyReceiptDetail = (document_no) => {
  return fetch("get", API_PATH + `MoneyReceiptByDocumentId&document_no=${document_no}`, {}, {})
}

export const inVoiceDetail = (document_no) => {
  return fetch("get", API_PATH + `InvoiceByDocumentId&document_no=${document_no}`, {}, {})
}
export const listDetail = (document_no) => {
  return fetch("get", API_PATH + `WhomByDocumentId&document_no=${document_no}`, {}, {})
}

export const saveEnquiry = ({
  Enter_Name,
  Email,
  Phone,
  Message,
  Location
}) => {
  return fetch("get", API_PATH + `saveEnquiry&name=${Enter_Name}&email=${Email}&phone=${Phone}&message=${Message}&location=${Location}`, {}, {})
}

export const getAllPages = () => {
  return fetch("get", API_PATH + `pagesListing`, {}, {})
}

export const pageDetails = (page_slug) => {
  return fetch("get", API_PATH + `pageDetailsByPageURL&page_slug=${page_slug}`, {}, {})
}


export const saveReview = ({
  title,
  rating,
  review_desc,
  name,
  created_at
}) => {
return fetch("get", API_PATH + `saveReviews&title=${title}&rating=${rating}&name=${name}&created_at=${created_at}&review_desc=${review_desc}`, {}, {})
}
// http://retropackers.com/api/retropackers-apis.php?type=login&username=LR000001&passwd=0012
export const grtUserDetails = (email,password) => {
  return fetch("get", API_PATH + `login&username=${email}&passwd=${password}`, {}, {})
}
 

export const getAllReview = () => {
  return fetch("get", API_PATH + `review_listing`, {}, {})
}

export const getAllReviewHome = () => {
  return fetch("get", API_PATH + `review_listing_home`, {}, {})
}
// Package Listing
// https://www.retropackers.com/api/retropackers-apis.php?type=WhomByDetailDocumentId&whom_id=1
export const getAllPackagesDetails=(packersId)=>{
  return fetch('get',API_PATH +`WhomByDetailDocumentId&whom_id=${packersId}`,{},{})
}


