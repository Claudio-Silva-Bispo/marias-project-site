import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'QmNAH4jjnmj9ppc2xFF1xK3FK6DTAfQ9SNcp1GqNnKU';

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid token');
  }
};
