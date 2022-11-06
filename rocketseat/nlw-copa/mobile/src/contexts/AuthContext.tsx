import { createContext, ReactNode, useEffect, useState } from "react";
import * as Google from 'expo-auth-session/providers/google'
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import { GOOGLE_CLIENT_ID } from '@env'

console.log('GOOGLE CLIENT ID:', GOOGLE_CLIENT_ID)

WebBrowser.maybeCompleteAuthSession();

export type UserProps = {
  name: string;
  avatarUrl: string;
}

export type AuthContextDataProps = {
  user: UserProps | undefined;
  isUserLoading: boolean;
  signIn: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextDataProps | undefined>(undefined);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [user, setUser] = useState<UserProps | undefined>(undefined)

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: GOOGLE_CLIENT_ID,
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    scopes: ['profile', 'email']
  })

  async function signIn() {
    try {
      setIsUserLoading(true)
      await promptAsync();
    } catch (error) {
      console.error(error)
      throw error;
    } finally {
      setIsUserLoading(false)
    }
  }

  async function signInWithGoogle(acess_token: string) {
    console.log('TOKEN DE AUTH:', acess_token)
  }

  useEffect(() => {
    if (response?.type === 'success' && response.authentication?.accessToken) {
      signInWithGoogle(response.authentication.accessToken);
    }
  }, [response])

  return (
    <AuthContext.Provider value={{
      signIn,
      isUserLoading,
      user
    }}>
      {children}
    </AuthContext.Provider>
  )
}
