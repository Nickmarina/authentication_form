import { lazy } from 'react';

export const RegistrationPage = lazy(
    () => import('../pages/RegistrationPage') /* webpackChunkName: "Register" */,
  );
  
  export const LoginPage= lazy(
    () => import('../pages/LoginPage') /* webpackChunkName: "Login" */,
  );