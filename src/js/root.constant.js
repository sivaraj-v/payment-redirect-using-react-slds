export const CatalogServiceBaseURL = 'https://productcatalog-qa.eflangtech.com/api';
export const QuotationServiceBaseURL = 'https://quoteservice-qa.eflangtech.com/api';
export const logURL = 'https://quoteservice-qa.eflangtech.com/logs';
export const salesforceEmailUrl = 'https://eflang.lightning.force.com/lightning/cmp/c__EmailWrapper?c__quoteId=';
export const ApiHeaderInformation = (bearerToken) => {
  return { 'Content-Type': 'application/json', Authorization: 'Bearer ' + bearerToken };
};
export const URL = {
  salesforce: `${QuotationServiceBaseURL}/token`,
  fastClient: 'http://localhost:1234/PriceQuote/Email',
  draftBaseURL: `${QuotationServiceBaseURL}/QuoteDraft`,
  cloneDraft: `${QuotationServiceBaseURL}/Quote`,
  pdf: `${QuotationServiceBaseURL}/quote`,
  basicInformation: {
    program: `${CatalogServiceBaseURL}/programs`,
    brochure: `${CatalogServiceBaseURL}/brochureseasons`,
    currencies: `${CatalogServiceBaseURL}/currencies`,
    departure: `${CatalogServiceBaseURL}/departurepoints`
  },
  courseInformation: {
    destination: `${CatalogServiceBaseURL}/destinations`,
    courses: `${CatalogServiceBaseURL}/courses`,
    startDate: `${CatalogServiceBaseURL}/CourseStartDate`
  },
  lineItems: {
    lineItems: `${QuotationServiceBaseURL}/salesitem`
  }
};
const serviceUnavailable = 'Service unavailable';
const uiError = 'Something went wrong';
export const ErrorConfig = {
  FETCH_USERINFORMATION: `UserInformation ${serviceUnavailable}`,
  FETCH_USERINFORMATION_ERROR: `${uiError} in userinformation`,

  FETCH_CLONE_DRAFT: `Clone ${serviceUnavailable}`,
  FETCH_CLONE_DRAFT_ERROR: `${uiError} in clone`,

  FETCH_PROGRAMS: `Program ${serviceUnavailable}`,
  FETCH_PROGRAMS_ERROR: `${uiError} in program`,

  FETCH_BROCHURES: `Brochure ${serviceUnavailable}`,
  FETCH_BROCHURES_ERROR: `${uiError} in brochure`,

  FETCH_CURRENCIES: `Currency ${serviceUnavailable}`,
  FETCH_CURRENCIES_ERROR: `${uiError} in currency`,

  FETCH_DESTINATIONS: `Destination ${serviceUnavailable}`,
  FETCH_DESTINATIONS_ERROR: `${uiError} in destination`,

  FETCH_COURSES: `Course ${serviceUnavailable}`,
  FETCH_COURSES_ERROR: `${uiError} in course`,

  FETCH_STARTDATE: `StartDate ${serviceUnavailable}`,
  FETCH_STARTDATE_ERROR: `${uiError} in startDate`,

  FETCH_DEPARTURES: `Departure ${serviceUnavailable}`,
  FETCH_DEPARTURES_ERROR: `${uiError} in departure`,

  CREATE_NEW_DRAFT: `Draft ${serviceUnavailable}`,
  CREATE_NEW_DRAFT_ERROR: `${uiError} creation of draft`,

  UPDATE_EXISTING_DRAFT_SELECTION: `Update existing draft, ${serviceUnavailable}`,
  UPDATE_EXISTING_DRAFT_SELECTION_ERROR: `${uiError} in while updating existing draft`,

  FETCH_LINEITEMS_BY_COURSE: `Course ${serviceUnavailable}`,
  FETCH_LINEITEMS_BY_COURSE_ERROR: `${uiError} in add course`,

  FETCH_LINEITEMS_BY_SALEITEM: `SalesItem ${serviceUnavailable}`,
  FETCH_LINEITEMS_BY_SALEITEM_ERROR: `${uiError} in salesitem`,

  MODIFY_LINEITEM_SELECTED: `Modify lineItem selected ${serviceUnavailable}`,
  MODIFY_LINEITEM_SELECTED_ERROR: `${uiError} in modify lineItem selected`,

  ADD_LINEITEM: `Add LineItem ${serviceUnavailable}`,
  ADD_LINEITEM_ERROR: `${uiError} on adding lineitem`,

  DELETE_LINEITEM: `Delete LineItem ${serviceUnavailable}`,
  DELETE_LINEITEM_ERROR: `${uiError} on deleting lineitem`,

  FETCH_PDF_URL: `PDF ${serviceUnavailable}`,
  FETCH_PDF_URL_ERROR: `${uiError} on pdf generation`,

  REARRANGE_SUMMARY_LINEITEM: `Rearrange ${serviceUnavailable}`,
  REARRANGE_SUMMARY_LINEITEM_ERROR: `${uiError} on rearrange of lineitem`
};
