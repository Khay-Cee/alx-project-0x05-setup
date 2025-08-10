export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { prompt } = req.body;
  // Simulate image generation by returning a placeholder image URL
  const imageUrl = `https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(prompt)}`;

  return res.status(200).json({ message: imageUrl });
}
