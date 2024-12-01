import { PrismaClient } from "@prisma/client";
import { RandomToken } from "../utils/RandomToken";


export const upsertSubscriber = async (prisma: PrismaClient, email: string) => {
  try {
    const newsSubscriber = await prisma.newsletterSubscriber.upsert({
      create: {
        email,
        active: false,
        confirmed: false,
        token: RandomToken(),
      },
      update: {
        active: false,
        confirmed: false,
        token: RandomToken(),
      },
      where: {
        email,
      },
    });
    return newsSubscriber;
  } catch (error) {
    console.error("Error upserting subscriber:", error);
    throw new Error(`Failed to upsert subscriber with email: ${email}`);
  }
};
