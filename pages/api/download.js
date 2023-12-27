// pages/api/downloadVideo.ts
export default function Handler(req, res) {
  const email = req.body.email;
  res.status(200).json({ name: "John Doe" });
}

// // pages/api/downloadAudio.ts
// import { NextApiRequest, NextApiResponse } from "next";
// const { dlVideo } = require("youtube-exec");

// type Handler = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

// const handler: Handler = async (req, res) => {
//   if (req.method === "POST") {
//     const downloadOptions: any = {
//       url: req.body.url,
//       folder: req.body.folder || "downloads",
//       filename: req.body.filename || "filename",
//       quality: req.body.quality || "best",
//     };

//     try {
//       await dlVideo(downloadOptions);
//       res.status(200).json({ message: "Video downloaded successfully!" });
//     } catch (error: any) {
//       console.error("An error occurred:", error.message);
//       res.status(500).json({ error: "Error downloading Video ", details: error.message });
//     }
//   } else {
//     res.status(405).json({ error: "Method Not Allowed" });
//   }
// };
