const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let response;

  switch (req.method) {
    case "GET":
      response = await mailchimp.lists.getListMembersInfo(
        `${process.env.MAILCHIMP_LIST_ID}`
      );
      break;
    case "POST":
      response = await mailchimp.lists.addListMember(
        process.env.MAILCHIMP_LIST_ID,
        {
          email_address: req.body.email,
          status: req.body.status,
          merge_fields: {
            FNAME: req.body.first_name,
            LNAME: req.body.last_name,
            PERSONA: req.body.persona,
          },
        }
      );
      break;
    default:
      break;
  }

  if (!response.id) {
    res.status(500).json(response);
  }

  res.status(200).json(response);
}
