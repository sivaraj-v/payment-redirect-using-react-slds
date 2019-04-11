const common = 'https://reqres.in/api/users';
export const payloadDecrytUrl = common;
export const poseidonLamdaUrl = common;
export const salesforceLamdaUrl = common;
export const salesforceHomeUrl = 'https://reqres.in';
export const ApiHeaderInformation = (bearerToken) => ({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + bearerToken });
