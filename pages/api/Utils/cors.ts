// utils/cors.ts

import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";

// Initializing the CORS middleware
const cors = Cors({
  methods: ["GET"],
});

// Helper function to run the CORS middleware
export const runMiddleware = async (req: NextApiRequest, res: NextApiResponse, fn: any) => {
  return new Promise<void>((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};
