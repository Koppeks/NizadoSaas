import { PrismaClient } from '@prisma/client'

const node_env = process.env.NEXT_PUBLIC_NODE_ENV as string

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (node_env !== 'production') globalThis.prismaGlobal = prisma