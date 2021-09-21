import { NextApiRequest, NextApiResponse } from 'next';
import { skills } from './../../data';

export default (req:NextApiRequest, res:NextApiResponse) => {
  //get request
  console.log(skills);
  
  res.status(200).json({skills})
}
