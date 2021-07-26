# Adbazar-Frontend

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on Ubuntu server

1. Install Nodejs, yarn, pm2, nginx (if not already installed)

2. git clone the repo in /var/www/

3. `sudo chown -R $USER:$USER frontend-react`
4. `cd frontend-react && yarn install && yarn build`
5. `pm2 start yarn --name "give-any-name-here" --interpreter bash -- start` (i have given crm-frontend)
6. configure nginx server block porperly
7. configure pm2 to launch at server start up
8. For 6 and 7 [read these](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04)
9. For deploying latest version:

```bash
cd /var/www/frontend-react
git pull
yarn install
yarn build
pm2 restart "the-name-provided-in-step5"
```

10. Bonus:

```bash
pm2 show "crm-frontend" (to see configurations)
pm2 monit "crm-frontend" (to see live stats)
```
# Adbazar
