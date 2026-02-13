
import { GoogleGenAI, Type } from "@google/genai";
import { GAMES_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function getGameRecommendation(userMood: string) {
  const gamesContext = GAMES_DATA.map(g => ({ id: g.id, title: g.title, description: g.description, category: g.category }));
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Based on the user's mood: "${userMood}", recommend exactly ONE game from this list: ${JSON.stringify(gamesContext)}. Return only JSON.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          recommendedGameId: {
            type: Type.STRING,
            description: "The ID of the recommended game."
          },
          reason: {
            type: Type.STRING,
            description: "A short, fun reason why this game fits the mood."
          }
        },
        required: ["recommendedGameId", "reason"]
      }
    }
  });

  try {
    return JSON.parse(response.text);
  } catch (e) {
    console.error("Failed to parse AI response", e);
    return null;
  }
}
