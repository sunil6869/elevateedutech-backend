export default function handler(req, res) {
  const prompt = req.body?.prompt || "";
  res.status(200).json({ reply: "AI got your question: " + prompt });
}
