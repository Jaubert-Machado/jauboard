import { loginSchema } from "@/schemas/login";
import type { NextApiRequest, NextApiResponse } from "next";

type Response = {
  result: string;
};

const dummyDB = {
  email: "jaubert@jau.com",
  password: "123456",
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method !== "POST") return res.status(405).end("Method not allowed");

  if (!loginSchema.safeParse(req.body).success) {
    console.log("schema error");
    return res.status(400).end("Bad request");
  }

  const { email, password } = req.body;

  if (email !== dummyDB.email || password !== dummyDB.password)
    return res.status(401).end("Unauthorized");

  return res.status(200).json({ result: "success" });
}
