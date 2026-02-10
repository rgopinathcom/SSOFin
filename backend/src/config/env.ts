import dotenv from "dotenv";
dotenv.config();

export const env = {
  tenant: process.env.TENANT_ID!,
  clientId: process.env.CLIENT_ID!,
  clientSecret: process.env.CLIENT_SECRET!,
  redirectUri: process.env.REDIRECT_URI!,
  jwtSecret: process.env.JWT_SECRET!,
  frontend: process.env.FRONTEND_URL!,
};
