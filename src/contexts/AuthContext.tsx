import { createContext, ReactNode, useState } from "react";
import { NULL } from "sass";

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credential: SignInProps) => Promise<void>;
};

type UserProps = {
  id: string;
  name: string;
  password: string;
};

type SignInProps = {
  email: string;
  password: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !!user;

  const signIn = async ({ email, password }: SignInProps) => {
    console.log(email, password);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};