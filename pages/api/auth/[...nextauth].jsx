import NextAuth from "next-auth/next"
import SpotifyProvider from "next-auth/providers/spotify"
import spotifyWebApi, { login } from "../../../lib/spotify"

const refreshAccessToken = async token => {
  try {
    spotifyWebApi.setAccessToken(token.accessToken)
    spotifyWebApi.setRefreshToken(token.refreshToken)
    const { body } = await spotifyWebApi.refreshAccessToken()

    return {
      ...token,
      accessToken: body.access_token,
      refreshToken: body.refresh_token ?? token.refreshToken,
      accessTokenExpires: Date.now() + body.expires_in * 1000
    }
  } catch (error) {
    return {
      ...token,
      error: "refresh-access-token-error"
    }
  }
}

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: login
    })
  ],
  secret: process.env.JWT_SECRET,
  pages: { signIn: "/login" },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: account.expires_at * 1000,
          username: account.providerAccountId
        }
      }

      if (Date.now() < token.accessTokenExpires) return token
      return await refreshAccessToken(token)
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken
      session.user.refreshToken = token.refreshToken
      session.user.username = token.username
      return session
    }
  }
})
