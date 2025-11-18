export default (req, res) => {
  const prompt = req.body.prompt;
  res.json({ reply: "AI got your question: " + prompt });
};
