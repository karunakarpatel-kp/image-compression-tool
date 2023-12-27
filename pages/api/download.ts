// pages/api/downloadVideo.ts
import { NextApiRequest, NextApiResponse } from "next";
import { downloadVideo, getVideoMP3Base64 } from "yt-get";

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const videoURL = "https://www.youtube.com/watch?v=JxIN5fruFFo";
  getVideoMP3Base64(videoURL)
    .then((result) => {
      const { base64, title } = result;
      console.log("Video Title:", title);
      console.log("Base64-encoded MP3:", base64);
      res.json(base64);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // downloadVideo(videoURL)
  //   .then(() => {
  //     console.log("Video Downloaded Successfully");
  //   })
  //   .catch((error) => {
  //     console.log("Error", error);
  //   });
};

export default Handler;
// if (req.method === "POST") {
//   const downloadOptions: any = {
//     url: req.body.url,
//     folder: req.body.folder || "downloads",
//     filename: req.body.filename || "filename",
//     quality: req.body.quality || "best",
//   };

//   try {
//     await dlVideo(downloadOptions);
//     res.status(200).json({ message: "Video downloaded successfully!" });
//   } catch (error: any) {
//     console.error("An error occurred:", error.message);
//     res.status(500).json({ error: "Error downloading Video ", details: error.message });
//   }
// } else {
//   res.status(405).json({ error: "Method Not Allowed" });
// }
