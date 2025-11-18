export default function handler(req, res) {
  res.status(200).json({
    message: "ElevateEdutech Backend is running successfully 🚀",
    routes: ["/api/login", "/api/getCourses", "/api/askAI"]
  });
}
