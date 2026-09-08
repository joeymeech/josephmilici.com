# josephmilici.com

Personal portfolio for Joseph Milici — Software Engineer II and MSE in Artificial Intelligence student at Penn Engineering.

Built with Next.js, TypeScript, Tailwind CSS, Motion, and deployed on Vercel.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Contact form

The contact form posts to `/api/contact` and sends through the Resend API. Configure these server-only environment variables locally and in Vercel:

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

`CONTACT_FROM_EMAIL` should use a sender/domain verified in Resend (for example `Joseph Milici <website@josephmilici.com>` once the domain is ready).

The endpoint validates input server-side and includes a honeypot field for simple bot filtering.

## Production

```bash
npm run build
npm start
```
