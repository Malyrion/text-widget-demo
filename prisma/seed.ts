const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      id:'99388ab9-a639-46d0-b2b5-e3a6b185b71b',
      name: 'Bob',
      email: 'bob@example.com',
    },
  });
}

main()
  .then(() => console.log('Seed complete'))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());