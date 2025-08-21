
import { GoogleGenAI, Type } from "@google/genai";
import { Role, Chapter, Lesson, QuizQuestion } from '../types';

if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generateLessonContent = async (role: Role, chapter: Chapter, lesson: Lesson): Promise<string> => {
    const prompt = `
        You are a friendly, patient, and tech-savvy guide for 'TechMastery Pro'. Imagine you're explaining a cool tech concept to your best friend who has zero tech background. Your tone should be super conversational, encouraging, and maybe even a little humorous. The goal is to make them feel smart and capable, not overwhelmed.

        **Your Task:**
        Generate the lesson content for the following topic:
        - **Role:** ${role.title}
        - **Chapter:** ${chapter.title}
        - **Lesson:** ${lesson.title}
        - **Core Analogy:** ${lesson.analogy}

        **Crucial Instructions for a Friendly, Simple Lesson:**
        1.  **Be a Friend, Not a Textbook:** Write as if you're chatting with a friend. Use "you," "we," and "I". Ask rhetorical questions. Keep it light and engaging. For example: "So, what on earth is a 'variable'? Great question! Let's think about it like this..."
        2.  **Start with a Story:** Begin the lesson by painting a picture with the main analogy: '${lesson.analogy}'. Make it a relatable, everyday story. For example, if the analogy is 'A Recipe Card', start by describing the process of following a recipe to bake cookies.
        3.  **One Analogy to Rule, Many Examples to Help:** The main analogy is your North Star. Every core concept *must* tie back to it. But don't stop there! Sprinkle in other super simple, real-life examples to make the ideas stick. For instance, if explaining a 'loop' with a 'Washing Machine' analogy, you could also add, "...it's also like singing 'Happy Birthday' twice for washing your hands. You do the same action a set number of times."
        4.  **Simple Language is Key:** Pretend you're explaining this to a smart 10-year-old. Break down big ideas into tiny, bite-sized pieces. Use short sentences. Avoid jargon like the plague. When you *must* introduce a technical term, explain it with the analogy and a real-world example first.
        5.  **Clear Structure:** Use simple markdown to make it easy to read.
            *   Use bolding for headings, like **This is a Heading**. Do NOT use markdown '#' or '##'.
            *   Use asterisks for bullet points, like * This is a bullet point.
        6.  **Encouraging Wrap-up:** End with a super positive summary. Remind the learner of the core idea using the analogy again, tell them what a great job they did, and get them excited for the next lesson.

        **What to AVOID:**
        *   Dry, academic, or robotic language.
        *   Long, complex sentences with lots of clauses.
        *   Technical jargon without an immediate, simple explanation.
        *   Assuming any prior knowledge.

        The final output must be a single string of markdown-formatted text.
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error("Error generating lesson content:", error);
        return "Sorry, we couldn't generate the lesson content at this moment. Please try again later.";
    }
};

export const generateChapterQuiz = async (role: Role, chapter: Chapter): Promise<QuizQuestion[]> => {
    const lessonTitles = chapter.lessons.map(l => l.title).join(', ');
    const prompt = `
        You are an expert quiz creator for 'TechMastery Pro'. Your goal is to create a 5-question multiple-choice quiz to assess a user's understanding of a specific chapter.

        The quiz should be based on the content of:
        - Role: ${role.title}
        - Chapter: ${chapter.title}
        - Chapter Lessons: ${lessonTitles}

        Generate 5 unique multiple-choice questions. Each question must have:
        - a 'question' text.
        - an array of 4 'options'.
        - the 'correctAnswer' which must exactly match one of the options.
        - a brief 'explanation' for why the correct answer is right.

        The questions should test fundamental concepts from the chapter and cover different lessons within it.
    `;
    
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            question: { type: Type.STRING },
                            options: {
                                type: Type.ARRAY,
                                items: { type: Type.STRING }
                            },
                            correctAnswer: { type: Type.STRING },
                            explanation: { type: Type.STRING }
                        },
                        required: ["question", "options", "correctAnswer", "explanation"]
                    }
                }
            }
        });

        const jsonStr = response.text.trim();
        const quizData = JSON.parse(jsonStr);
        return quizData as QuizQuestion[];

    } catch (error) {
        console.error("Error generating quiz:", error);
        // Fallback or re-throw
        throw new Error("Failed to generate the quiz. Please try again.");
    }
};
