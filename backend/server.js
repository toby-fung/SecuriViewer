import express from "express";
import admin from "firebase-admin";
import { createProxyMiddleware } from "http-proxy-middleware";

admin.initializeApp({ projectId: process.env.FIREBASE_PROJECT_ID });
const allowed = new Set((process.env.ALLOWED_EMAILS || "").split(","));

// Runs before every protected request
async function requireUser(req, res, next) {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) return res.status(401).send("No token");
    try {
        const user = await admin.auth().verifyIdToken(token);
        if (!allowed.has(user.email)) return res.status(403).send("Not allowed");
        next(); // token is good, carry on to the proxy
    } catch {
        res.status(401).send("Invalid token");
    }
}

const app = express();

// Unprotected, just to check the server is up
app.get("/health", (req, res) => res.send("ok"));

// Everything under /cams needs a valid token, then gets passed to MediaMTX
app.use(
    "/cams",
    requireUser,
    createProxyMiddleware({
        target: "http://mediamtx:8888",
        on: {
            // Replace the app's Firebase token with the MediaMTX secret before forwarding
            proxyReq: (proxyReq) => {
                proxyReq.setHeader("Authorization", `Bearer ${process.env.HLS_CDN_SECRET}`);
            },
        },
    })
);
app.listen(3000, () => console.log("Backend on :3000"));