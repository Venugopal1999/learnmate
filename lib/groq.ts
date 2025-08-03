// lib/groq.ts


export const getAISummary = async (prompt: string): Promise<string> => {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'llama3-8b-8192',
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  const data = await response.json();

  return data?.choices?.[0]?.message?.content || 'No summary returned.';
};
