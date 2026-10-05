# Ashutosh Jha · Portfolio

My personal portfolio, built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**, and exported as a static site for GitHub Pages.

## Featured work
- **Capsisure**: a compliance web platform for AML/KYC checks and client onboarding (Capsitech)
- **Capsitech Mobile App**: an employee app for attendance, leave and payroll
- Virtual Health Care, Cricket Landing Page, Temperature Converter and Number Guessing Game

## Run locally
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
```

## Edit content
All text, projects, experience and skills are in [`data/portfolio.ts`](data/portfolio.ts).

## Deploy
Every push to `main` or `master` builds the site and deploys it with `.github/workflows/deploy.yml`.
To turn this on, go to **Settings → Pages → Source** and choose **GitHub Actions**.
