const prefixAuth: string = "/core";
const prefixBase: string = "/api/v1";
const prefixOther: string = "/api/core";

const prefixApiAuth: string = `/api/core`;


const endpointAuth = {
  SIGN_IN: `${prefixBase}/auth/login`,
  SIGN_UP: `${prefixBase}/auth/signUp/`,
  FORGET_PASSWORD: `${prefixBase}/auth/forgotPassword/`,
  RESET_PASSWORD: `${prefixBase}/auth/resetPassword/{token}`,
  SIGN_IN_WITH_GOOGLE: `${prefixBase}/auth/loginWithGoogle/`,
  VERIFY_TOKEN: `token/verify/`,
  CHECK_IS_MEMBER: `${prefixBase}/auth/checkIsMember/`,
};

const endpointUsersManagement = {
  GET_ALL_USERS: `${prefixBase}/users/`,
  GET_USER: `${prefixBase}/users/`,
  UPDATE_USER: `${prefixBase}/users/`,
};

export {
  endpointAuth,
  endpointUsersManagement,
};
