import { NextApiRequest, NextApiResponse } from "next";
import { getURLVideoID, getInfo, videoFormat } from "ytdl-core";
import Cors from "cors";
import { runMiddleware } from "./Utils/cors";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET"],
});

type ExecOptions = {
  url: string;
};

type ExecResult = {
  url: string;
  info: videoFormat[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ExecResult | { error: string }>) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  if (req.method === "GET") {
    try {
      const url: string = req.query.url as string;
      const videoId = await getURLVideoID(url);
      const metaInfo = await getInfo(url);
      // Constructing the response data
      const data: ExecResult = {
        url: "https://www.youtube.com/embed/" + videoId,
        info: metaInfo.formats,
      };

      return res.json(data);
    } catch (error) {
      console.error("An error occurred:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
