import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    select: {
      title: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  console.log("posts:");
  if (posts.length > 0) {
    console.log(
      posts.map((p) => `  ${p.title} by ${p.author.name}`).join("\n")
    );
  } else {
    console.log("(no posts found)");
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
