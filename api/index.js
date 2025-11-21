export default function handler(req, res) {
  res.status(200).json({
    message: "ElevateEdutech Backend is running 🚀",
    endpoints: {
      login: "/api/login",
      getCourses: "/api/getCourses",
      askAI: "/api/askAI"
    }
  });
}

