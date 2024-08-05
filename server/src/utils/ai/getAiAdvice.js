import { GoogleGenerativeAI } from "@google/generative-ai";
import aiPromt from "./aiPrompt.js";
import { GOOGLE_GEN_API_KEY } from "../config.js";

const genAI = new GoogleGenerativeAI(GOOGLE_GEN_API_KEY);
const model = genAI.getGenerativeModel({
	model: "gemini-1.5-flash",
	generationConfig: {
		responseMimeType: "application/json",
		maxOutputTokens: 100,
	},
});

const getAiAdvice = async (userList) => {
	const companion = ["romantic partner", "friend", "family", "alone"];
	const aiPromtStr = aiPromt(userList, companion[2]);

	async function run() {
		// The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
			const {response}= await model.generateContent(aiPromtStr);
			const json = JSON.parse(response.text());
			return json;
	}

	return await run();
};

export default getAiAdvice;
