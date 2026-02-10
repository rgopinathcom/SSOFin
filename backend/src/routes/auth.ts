import express from "express";
import axios from "axios";
import jwt from "jsonwebtoken";
import { env } from "../config/env";

const router = express.Router();

const AUTH_URL = `https://login.microsoftonline.com/${env.tenant}/oauth2/v2.0/authorize`;
const TOKEN_URL = `https://login.microsoftonline.com/${env.tenant}/oauth2/v2.0/token`;


router.get("/login", (req, res) => {
  const params = new URLSearchParams({
    client_id: env.clientId,
    response_type: "code",
    redirect_uri: env.redirectUri,
    response_mode: "query",
    scope: "openid profile email",
  });

  res.redirect(`${AUTH_URL}?${params}`);
});


router.get("/callback", async (req, res) => {
  try {
    const code = req.query.code as string;

    const tokenRes = await axios.post(
      TOKEN_URL,
      new URLSearchParams({
        client_id: env.clientId,
        client_secret: env.clientSecret,
        code,
        redirect_uri: env.redirectUri,
        grant_type: "authorization_code",
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const idToken = tokenRes.data.id_token;

    const payload = JSON.parse(
      Buffer.from(idToken.split(".")[1], "base64").toString()
    );

    const appJwt = jwt.sign(
      {
        name: payload.name,
        email: payload.preferred_username,
      },
      env.jwtSecret,
      { expiresIn: "1h" }
    );

    res.redirect(`${env.frontend}/sso-success?token=${appJwt}`);
  } catch {
    res.redirect(`${env.frontend}/error`);
  }
});

export default router;
