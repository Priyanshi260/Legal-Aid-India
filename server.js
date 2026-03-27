import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post("/ask", async (req, res) => {
  try {
    const { situation } = req.body;

    if (!situation) {
      return res.status(400).json({ error: "No situation provided" });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are an expert Indian legal assistant.
When a user describes their legal situation:
1. Identify the relevant area of Indian law
2. Explain their rights clearly and simply
3. Mention specific Indian laws or acts that apply (e.g. Rent Control Act, Industrial Disputes Act, Hindu Marriage Act)
4. Give practical next steps they can take
5. Tell them when to consult a real lawyer

Use simple language. Format with clear line breaks.

User situation: ${situation}`
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    // Check for errors from Gemini
    if (data.error) {
      console.error("Gemini error:", data.error.message);
      return res.status(500).json({ error: data.error.message });
    }

    const reply = data.candidates[0].content.parts[0].text;
    res.json({ reply });

  } catch (error) {
    console.error("Server error:", error.message);
    res.status(500).json({ error: "Something went wrong." });
  }
});

app.listen(5000, () => {
  console.log("✅ Server running at http://localhost:5000");
});