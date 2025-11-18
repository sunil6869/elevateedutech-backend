import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}

const db = admin.firestore();

export default async function handler(req, res) {
  const snapshot = await db.collection("courses").get();
  const courses = snapshot.docs.map(doc => doc.data());
  res.status(200).json(courses);
}
