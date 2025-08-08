import { PrismaClient } from '../generated/prisma';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!(global as Record<string, unknown>).prisma) {
    (global as Record<string, unknown>).prisma = new PrismaClient();
  }
  prisma = (global as Record<string, unknown>).prisma as PrismaClient;
}

export default prisma;