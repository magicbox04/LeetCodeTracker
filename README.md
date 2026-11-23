# LeetCode Tracker

A small app I use to schedule reviews of LeetCode problems I've already solved, so I don't forget them before interviews.

**Live:** https://leet-code-tracker-smoky.vercel.app/

## How it works

- Add a problem with its name, link, difficulty, and the date you solved it
- It comes back for review 3 days later, then 4, 7, and 16 days after each review (spaced repetition)
- After the 4th review it's marked as done
- A "Needs Review" section shows what's due today; a manage page lets you edit or delete problems

Data is saved in the browser's localStorage, so there's no backend or login yet.

## Stack

React, React Router, Day.js, Vite. Deployed on Vercel.

I also built this to practice CSS layout and styling.

## Planned

- Finish cleaning up the CSS
- Add login and a database (likely Supabase / PostgreSQL) so data syncs across devices

## Run locally

```bash
cd leetcode-tracker
npm install
npm run dev
```
