import { NextApiRequest, NextApiResponse } from 'next';
import clothesData from '../../data/clothes.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  setTimeout(() => {
    res.status(200).json(clothesData);
  }, Math.random() * 600);
}
