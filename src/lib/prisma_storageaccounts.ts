import { PrismaClient } from "../../prisma/generated/client_storageaccount";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrismaStorageAccount = globalThis as unknown as {
  prismaStorageAccount: PrismaClientSingleton | undefined;
};

const prisma_storageaccount =
  globalForPrismaStorageAccount.prismaStorageAccount ?? prismaClientSingleton();

export default prisma_storageaccount;

if (process.env.NODE_ENV !== "production")
  globalForPrismaStorageAccount.prismaStorageAccount = prisma_storageaccount;
