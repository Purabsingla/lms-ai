import { NextResponse } from "next/server";
import OpenAI from "openai";

const opneai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1", // This is the magic switch
  apiKey: process.env.OPENROUTER_API_KEY, // Make sure to add this to your .env file
  defaultHeaders: {
    // Use your production URL when hosted, fallback to localhost for dev
    "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost/3000",
    "X-Title": "Course Generator",
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { topic } = body;
    console.warn(topic, body, "Recieved");
    if (!topic)
      return NextResponse.json({ error: "Topic is required" }, { status: 400 });

    const completion = await opneai.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "system",
          content: `You are a strict AI Course Generator. 
          You must output valid JSON only. Do not output markdown code blocks.
          
          The JSON structure must be:
          {
            "courseTitle": "Title of the course",
            "summary": "Brief summary of what the student will learn",
            "modules": [
              {
                "title": "Module Title",
                "chapters": [
                  { 
                    "title": "Chapter Title", 
                    "youtubeSearchQuery": "A search query to find a relevant youtube video for this chapter" 
                  }
                ]
              }
            ]
          }
          
          Generate a course for the user's requested topic.`,
        },
        {
          role: "user",
          content: `Create a course about: ${topic}`,
        },
      ],
      response_format: { type: "json_object" },
    });
    const rowContent = completion.choices[0].message.content;
    const courseData = JSON.parse(rowContent || "{}");

    return NextResponse.json(courseData);
  } catch (error) {
    console.error("OpenAI Error:", error);
    return NextResponse.json(
      { error: "Failed to generate course" },
      { status: 500 }
    );
  }
}
