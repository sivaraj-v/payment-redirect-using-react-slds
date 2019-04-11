import { Logger } from './logger';
import { ApiHeaderInformation, salesforceLamdaUrl, poseidonLamdaUrl, salesforceHomeUrl } from './config';

const redirectToSalesforce = () => alert('Redirect Successful');

const saveResponse = (response, metaData) => {
  let saveUrls = [salesforceLamdaUrl, poseidonLamdaUrl];
  let requests = saveUrls.map((url) => fetch(url, { method: 'PATCH', headers: ApiHeaderInformation(metaData.header.bearer), body: JSON.stringify(metaData.payload) }));
  Promise.all(requests).then((responses) => redirectToSalesforce(responses));
};

export const request = async (metaData) => {
  const logger = new Logger();
  logger.local({ action: `${metaData.name}_BEGINS` });
  try {
    let doRequest = await fetch(metaData.url, { method: 'PATCH', headers: ApiHeaderInformation(metaData.header.bearer), body: JSON.stringify(metaData.payload) });
    let response = await doRequest.json();
    if (doRequest.ok && metaData.name == 'PAYLOAD_DECRYT') saveResponse(response, metaData);
    logger.local({ action: `${metaData.name}_SUCCESS`, response });
  } catch (error) {
    error = error.message;
    logger.local({ action: `${metaData.name}_ERROR`, error });
  }
};
