import express from "express";
import dotenv from "dotenv";
import db from "./db.js";

dotenv.config();

const app = express();
const port = process.env.port || 4500;

app.use(express.json());

app.get("/api/termekek", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM termekek");
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ hiba: "hiba tortent" });
    }
});

app.listen(port, () => {
    console.log(`A szerver fut a http://localhost:${port} cimen`);
});
