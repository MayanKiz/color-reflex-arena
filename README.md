# Color Reflex Arena

A fast-paced browser reaction game built with Next.js. Read the target color, tap the matching orb, build a streak, and compete for a place on the leaderboard.

## Features

- Full game flow: intro, rules, player setup, countdown, gameplay, results, and leaderboard.
- Timed color-matching rounds designed for quick reactions.
- Score, hit, attempt, accuracy, and streak tracking.
- Instant visual and audio feedback for correct and incorrect responses.
- Pause and quit controls, including `P` and `Escape` keyboard shortcuts.
- Mobile-friendly touch controls and responsive UI.
- Personal best score and local score history stored in the browser.
- Optional hosted leaderboard backed by Neon/Postgres.
- Cached leaderboard fallback when the hosted database is unavailable.
- Shareable result message through the Clipboard API.

## Tech Stack

- [Next.js](https://nextjs.org/) 15
- [React](https://react.dev/) 19
- [Neon Serverless Driver](https://neon.tech/docs/serverless/serverless-driver) for Postgres access
- [Lucide React](https://lucide.dev/) for icons
- Vercel-ready deployment configuration

## Requirements

- Node.js 18.18 or newer
- npm
- A Neon or compatible Postgres database for the hosted leaderboard (optional for local play)

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To create a production build locally:

```bash
npm run build
npm start
```

## Hosted Leaderboard Setup

The game works without a database: scores are stored locally in the browser. To enable the shared leaderboard:

1. Create a Neon/Postgres database.
2. Run [`database/schema.sql`](./database/schema.sql) once in the database SQL editor.
3. Add one of the supported connection-string environment variables to your deployment:

```env
DATABASE_URL=your_postgres_connection_string
```

The server also recognizes `DATABASE_URL_UNPOOLED`, `POSTGRES_URL`, `POSTGRES_URL_NON_POOLING`, and `NEON_DATABASE_URL`.

The leaderboard API is available at `/api/leaderboard`. It returns grouped player profiles, top scores, game history, and average accuracy. If the database is not configured or temporarily unavailable, the client falls back to cached or local scores.

> Never commit database credentials or expose them in client-side code.

## How to Play

1. Enter a player name between 2 and 15 characters.
2. Start the challenge and follow the countdown.
3. Tap or click the orb whose color matches the target prompt.
4. React quickly to increase your score and maintain your streak.
5. Review your result and compare it with the leaderboard.

## Project Structure

```text
app/
├── api/leaderboard/       # Leaderboard API route
├── layout.js              # Application metadata and layout
├── page.js                # Main game flow and state
└── globals.css            # Global styles and responsive UI
components/
└── color-rush/            # Screens, modals, and shared UI components
lib/
├── color-rush/            # Game configuration and client utilities
└── leaderboard-server.js  # Database connection and score logic
database/
└── schema.sql             # Scores table and indexes
public/                    # Static assets
vercel.json                # Vercel/Next.js deployment settings
```

## Deployment

This project is configured for [Vercel](https://vercel.com/):

1. Import the repository into Vercel.
2. Set the database environment variable in the project settings if you want the hosted leaderboard.
3. Deploy with the default settings, or use the configured commands:
   - Install: `npm install`
   - Build: `npm run build`

The application can also be deployed to any platform that supports Next.js server workloads and environment variables.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm start` | Start the production server |
| `npm run check` | Validate the project by running the production build |

## Contributing

Issues, ideas, and pull requests are welcome. When contributing, please keep the game responsive, avoid exposing server credentials, and test both local-play and hosted-leaderboard behavior.

## License

No license has been specified yet. Contact the repository owner before redistributing or using this project commercially.

## Contact

- Instagram: [@rao.mynkk](https://www.instagram.com/rao.mynkk/)
- Email: [rao.mynkk@gmail.com](mailto:rao.mynkk@gmail.com)
- WhatsApp: [+24 106 603 434](https://wa.me/24106603434)
- LinkedIn: [Mayank Yadav](https://www.linkedin.com/in/mayank-yadav-2803202a5/)
