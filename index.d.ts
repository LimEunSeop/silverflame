declare namespace NodeJS {
  interface ProcessEnv {
    readonly DATABASE_URL: string
    readonly NEXTAUTH_URL: string
    // openssl rand -base64 32
    // https://next-auth.js.org/configuration/nextjs#middleware
    readonly NEXTAUTH_SECRET: string
    readonly GITHUB_ID: string
    readonly GITHUB_SECRET: string
  }
}
