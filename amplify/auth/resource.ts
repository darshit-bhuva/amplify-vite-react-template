import { referenceAuth } from '@aws-amplify/backend';

export const auth = referenceAuth({
  userPoolId: process.env.MY_USER_POOL_ID as string,
  identityPoolId: process.env.MY_IDENTITY_POOL_ID as string,
  authRoleArn: process.env.MY_AUTH_ROLE_ARN as string,
  unauthRoleArn: process.env.MY_UNAUTH_ROLE_ARN as string,
  userPoolClientId: process.env.MY_USER_POOL_CLIENT_ID as string,
});
