// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import { skills } from './../../data';

export default (req:NextApiRequest, res:NextApiResponse) => {
  //get request
   res.status(200).json({skills})
}
