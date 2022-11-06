import { createContext, ReactNode } from "react";

export type UserProps = {
  name: string;
  avatarUrl: string;
}

export type AuthContextDataProps = {
  user: UserProps;
  signIn: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  async function signIn() {
    console.log("Entrou")
  }
  return (
    <AuthContext.Provider value={{
      signIn,
      user: {
        name: 'Rodrigo',
        avatarUrl: 'https://github.com/abehidek.png'
      }
    }}>
      {children}
    </AuthContext.Provider>
  )
}
