import React from "react";
import { StripeProvider } from "react-stripe-elements";
import { AuthProvider } from "./auth-context";
import { UserProvider } from "./user-context";

const AppProvider = ({ children }) => (
  <AuthProvider>
    <UserProvider>
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_API_KEY}>
        {children}
      </StripeProvider>
    </UserProvider>
  </AuthProvider>
);

export default AppProvider;
