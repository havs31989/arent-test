# Aren't Test Project

This project is a web application built using React, TypeScript, and Vite. It features a structured and scalable architecture with support for multiple environments (Production, UAT, Development).

## Available Scripts

### Running the Development Server

To run the application locally with hot-reloading for development.

```bash
npm start
```
This command loads environment variables from `configuration/environment/env.development`.

### Building for Production

To build the application for the live production environment.

```bash
npm run build:prod
```
This command uses variables from `configuration/environment/env.production`. The output is generated in the `dist/` folder.

### Building for UAT

To build the application for the User Acceptance Testing (UAT) environment.

```bash
npm run build:uat
```
This command uses variables from `configuration/environment/env.uat`.

### Previewing a Build

After running a build command, you can preview the result locally.

```bash
npm run preview
```
This serves the contents of the `dist/` folder.

## Project Structure

*   **`configuration/environment/`**: Contains `.env.*` files for environment-specific variables.
*   **`public/`**: Static assets that are copied directly to the build output.
*   **`src/`**: Application source code.
    *   **`main.tsx`**: The main entry point of the React application.
    *   **`AppRouter.tsx`**: Defines the application's URL-based routing.
    *   **`common/`**: Shared code, including reusable UI components, hooks, services (API, storage), and type definitions.
    *   **`views/`**: The main pages/features of the application. Each view is self-contained with its own logic, state, and styles.
    *   **`language/`**: JSON files for multi-language support (internationalization).
    *   **`services/`**: Application-specific API services.
    *   **`types/`**: Global TypeScript type definitions.

---
*This README was updated by Gemini.*
