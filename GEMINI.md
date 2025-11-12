# GEMINI.md - Espacio Pisama Web

## Project Overview

This is the official website for Espacio Pisama, a business that offers consulting rooms for rent by the hour in Montevideo, Uruguay. The website is built using **Next.js 14** with the App Router, **TypeScript**, and styled with **Tailwind CSS** and **HeroUI**.

The main purpose of the application is to serve as a marketing and booking platform. It allows professionals, such as therapists and psychologists, to:
- Explore the different types of consulting rooms available.
- View photos and details of the facilities.
- Check real-time availability.
- Understand the pricing and discount structure.
- Make reservations online.

The project is configured with SEO best practices, including structured data (JSON-LD) to improve search engine visibility for local businesses. It also integrates with Google Analytics for traffic analysis.

## Key Technologies

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Components**: [HeroUI](https://heroui.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Backend-as-a-Service**: [Supabase](https://supabase.com/) (inferred from dependencies)
- **Email**: [Nodemailer](https://nodemailer.com/)
- **Calendar**: [React Big Calendar](http://jquense.github.io/react-big-calendar/)
- **Linting**: [ESLint](https://eslint.org/)
- **Formatting**: [Prettier](https://prettier.io/)

## Building and Running

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20.x or higher recommended)
- [npm](https://www.npmjs.com/) (or another package manager like `pnpm` or `yarn`)

### Installation

1.  Clone the repository.
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To run the application in development mode with hot-reloading and Turbopack:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

To create a production-ready build:

```bash
npm run build
```

This will generate an optimized version of the application in the `.next` directory.

### Running in Production

To start the application in production mode:

```bash
npm run start
```

## Development Conventions

- **Code Style**: The project uses ESLint and Prettier to enforce a consistent code style. It is recommended to run the linter before committing changes:
  ```bash
  npm run lint
  ```
- **Component Structure**: Components are organized by feature within the `components` directory. Reusable, primitive components are located in `components/primitives.ts`.
- **Routing**: The application uses the Next.js App Router. Pages are created as `page.tsx` files within the `app` directory.
- **Styling**: Styling is primarily done using Tailwind CSS utility classes. The `tailwind.config.js` file contains the project's design tokens and theme configuration.
- **Data**: Static data for the application, such as information about the consulting rooms, is stored in TypeScript files in the `src` directory (e.g., `src/consultoriosData.ts`).
- **Environment Variables**: The project uses a `.env.local` file for environment variables. This file should be created locally and is not committed to the repository.
