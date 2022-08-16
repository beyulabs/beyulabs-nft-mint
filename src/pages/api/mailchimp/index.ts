import type { NextApiRequest, NextApiResponse } from 'next';

const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let response: any;
  let userAlreadyExists: boolean = false;

  switch (req.method) {
    case 'GET':
      response = await mailchimp.lists.getListMembersInfo(
        `${process.env.MAILCHIMP_LIST_ID}`
      );
      break;
    case 'POST':
      try {
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
      } catch (err: any) {
        // Handle response when user is already on the list
        if (
          err.response.statusCode === 400 &&
          err.response.body.title === 'Member Exists'
        ) {
          userAlreadyExists = true;
          res.status(200).json(response);
        }
      }
      break;
    default:
      break;
  }

  // Handle error case
  if (!response?.id && !userAlreadyExists) {
    res.status(500).json(response);
  }

  if (!userAlreadyExists) {
    res.status(201).json(response);
  }
}
