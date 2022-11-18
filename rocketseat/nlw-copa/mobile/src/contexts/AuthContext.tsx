import { createContext, ReactNode, useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { GOOGLE_CLIENT_ID } from "@env";
import { api } from "../services/api";

WebBrowser.maybeCompleteAuthSession();

export type UserProps = {
  name: string;
  avatar: string;
  sub: string;
};

export type AuthContextDataProps = {
  user: UserProps | undefined;
  isUserLoading: boolean;
  signIn: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextDataProps | undefined>(
  undefined
);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [user, setUser] = useState<UserProps | undefined>(undefined);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: GOOGLE_CLIENT_ID,
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    scopes: ["profile", "email"],
  });

  async function signIn() {
    try {
      setIsUserLoading(true);
      await promptAsync();
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setIsUserLoading(false);
    }
  }

  async function signInWithGoogle(access_token: string) {
    try {
      setIsUserLoading(true);
      const jwtResponse = await api.post("/users", {
        access_token,
      });

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${jwtResponse.data.token}`;

      const userInfoResponse = await api.get("/me");

      setUser(userInfoResponse.data.user);
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setIsUserLoading(false);
    }
  }

  useEffect(() => {
    if (response?.type === "success" && response.authentication?.accessToken) {
      signInWithGoogle(response.authentication.accessToken);
    }
  }, [response]);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        isUserLoading,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
