// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../utils/dbConnect";
import dnConnection from "../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  res.status(200).json({ name: "John Doe" });
};
