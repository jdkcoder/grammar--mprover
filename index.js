import { OpenAI } from "openai";

async function analyzeAndImproveText(text) {
   console.log('Analyzing & improving text')
   const content = `Analyze the following text, identify all grammatical errors, provide a corrected version, 
rewrite the content to make it sound more natural & human-written, & finally, 
provide a score from 1 to 10 for each of the following categories: clarity, coherence, grammar, engagement, & overall quality.

Present the results in Markdown format & in Vietnamese not English.

**Step 1: List Grammatical Errors**
List each error with a heading & a description using Markdown. Include the following elements:
Header: Use a bold header with an appropriate emoji, & mention the error type.
Sentence: Provide the sentence which contains the error.
Description: Provide a brief description of the error & two line breaks after it.

Use these emojis for different types of errors:
🧑‍🏫 Sự Đồng Nhất Của Chủ Ngữ & Động Từ (Subject-Verb Agreement) 
⏳ Chia Thì (Verb Tense)
📝 Dấu Câu (Punctuation) 
🔠 Chính Tả (Spelling)
🏗️ Cấu Trúc Câu (Sentence Structure) 
(…please use other more names & related emojis if needed)

**Step 2: Sửa Lỗi (Corrected Text)**
Provide the corrected version of the text.

**Step 3: Điều Chỉnh Văn Phong (Humanized Content)**
Rewrite the corrected text to make it sound more natural & human-written.

**Step 4: Chấm điểm (Providing Score)**
Analyze the humanized content & provide a score from 1 to 10 for each of the following categories: clarity, coherence, grammar, engagement, & overall quality.

Present the results in Markdown format with the following structure & no header:
**🌟 Tổng kết**: [score]

Show the next four parameters inside a block quote
💡 Sự rõ ràng (Clarity): [score]

🔗 Sự mạch lạc (Coherence): [score]

✅ Ngữ pháp (Grammar): [score]

🔥 Sự gắn kết (Engagement): [score]

<insert a line break here>
-------------------------------------------------------------------

**Bình Luận (Comments)**:
Add comments below the results.

Here is the text: ${text}`;

   const client = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY })
   const res = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content, }],
   })

   return res.choices[0].message.content
}

async function main() {
   const data = `In this contemporary era, the education is an essential part of our life. Some individuals believe that the computer skill can be a fourth skill to be added to the parts of education: reading , writing and math. In this essay , I will discuss this statement and I will draw my personal conclusions.

   There are several main reasons about why most people prefer to added a computer skill in education. The first reason is a technology . It is playing an important role in these days. Thus, the computer is one of these technologies that should all school learn students how to use it. 
   
   The second reason is earning a good job after graduation. Thus, if the student has learn how to use it , he will be more successful in it special in tge work environment.`;
   
   const result = await analyzeAndImproveText(data)
   console.log(result)
}

main();