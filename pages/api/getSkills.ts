import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} 
from "next-sanity";
import {sanityClient} 
from "../../sanity";
import { skill } from '../../typings';
const query = groq`
*[_type == "skill"]

`
type Data={
    skills:skill[]
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const skills : skill[]= await sanityClient.fetch(query)
    res.status(200).json({ skills })
  }
