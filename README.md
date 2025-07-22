This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Install dependencies and create .env file:

```bash
npm install
```

Inside .env put:

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/widgets_db"

```

Run migration and seed the db with a default user:

```bash
npx prisma migrate dev --name init
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

To test the application:

```bash
npm run test
```

https://github.com/user-attachments/assets/97b126c9-2f0d-483b-a4ad-06b40167089d

<img width="2802" height="1144" alt="image" src="https://github.com/user-attachments/assets/5003b6b6-2cb7-4bbb-9a25-ffe9c84440c3" />



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


