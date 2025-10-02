# Portfolio Website

## Overview

A modern, full-stack portfolio website showcasing software development projects and skills. Built with React for the frontend, Express for the backend, and PostgreSQL for data persistence. The application features a clean, responsive design with dark mode support, showcasing developer information, projects, skills, and contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**: React with TypeScript, using Vite as the build tool and development server.

**Component Structure**: The application follows a component-based architecture with clear separation of concerns:
- Page components (`client/src/pages/`) handle routing and top-level layouts
- Feature components (`client/src/components/`) provide reusable UI sections (Hero, About, Projects, Contact)
- UI components (`client/src/components/ui/`) contain shadcn/ui design system primitives

**Styling**: Tailwind CSS with custom theming using CSS variables for both light and dark modes. The design features a gradient-heavy aesthetic with purple, blue, and pink accent colors.

**State Management**: React Query (@tanstack/react-query) for server state management, with a centralized query client configuration. Custom hooks provide theme management and UI utilities.

**Routing**: Uses wouter for client-side routing, providing a lightweight alternative to React Router.

**Design System**: Built on shadcn/ui components (Radix UI primitives) configured with the "new-york" style variant and neutral base color scheme.

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**Request Processing**: The server includes middleware for JSON parsing, URL-encoded bodies, and request/response logging with timestamps.

**Development Mode**: Vite integration in development mode provides HMR (Hot Module Replacement) through middleware, serving the React application during development.

**Production Build**: Frontend assets are built to `dist/public` and served statically, while the server bundle is created with esbuild targeting Node.js ESM format.

**Storage Layer**: Abstracted through an `IStorage` interface with a default `MemStorage` in-memory implementation. The interface is designed to be swapped with a database-backed implementation (Drizzle ORM is configured but not yet fully integrated).

### Data Storage

**Database**: Configured for PostgreSQL using Neon's serverless driver (`@neondatabase/serverless`).

**ORM**: Drizzle ORM with schema defined in `shared/schema.ts`. Currently defines a `users` table with id, username, and password fields.

**Schema Management**: Drizzle Kit configured to generate migrations from schema changes, with migrations output to `./migrations` directory.

**Connection**: Database URL expected via `DATABASE_URL` environment variable. The application currently uses in-memory storage but is architected to transition to PostgreSQL persistence.

**Schema Validation**: Zod schemas generated from Drizzle tables using `drizzle-zod` for runtime type validation.

### Authentication and Authorization

**Current State**: Authentication infrastructure is partially configured but not fully implemented. The schema includes a users table with username and password fields, suggesting password-based authentication is planned.

**Session Management**: `connect-pg-simple` dependency indicates PostgreSQL-backed session storage is intended, though session middleware is not yet configured.

### Architectural Decisions

**Monorepo Structure**: Frontend (`client/`), backend (`server/`), and shared code (`shared/`) are colocated in a single repository for easier development and deployment.

**TypeScript Throughout**: Full TypeScript implementation across frontend and backend provides type safety and better developer experience.

**Path Aliases**: Configured aliases (`@/`, `@shared/`, `@assets/`) simplify imports and make code more maintainable.

**API Communication**: Centralized fetch wrapper in `lib/queryClient.ts` handles API requests with automatic error handling and credential management.

**Separation of Concerns**: Clear separation between presentation (React components), business logic (hooks/utilities), and data access (storage interface).

**Progressive Enhancement**: The in-memory storage implementation allows the application to function immediately while database integration can be added without restructuring.

## External Dependencies

**UI Framework**: 
- React 18+ with TypeScript
- Wouter for routing
- React Query for data fetching and caching

**Styling**:
- Tailwind CSS for utility-first styling
- shadcn/ui component library (Radix UI primitives)
- Google Fonts (Inter and JetBrains Mono)

**Backend**:
- Express.js for HTTP server
- Vite for development server and build tooling

**Database**:
- PostgreSQL (via Neon serverless driver)
- Drizzle ORM for database operations
- Drizzle Kit for schema migrations

**Development Tools**:
- Replit-specific plugins for runtime error handling, cartography, and dev banners
- ESBuild for production bundling
- TypeScript compiler for type checking

**Form Handling**:
- React Hook Form with Zod resolvers for validation
- Zod for schema validation

**Icons**:
- Lucide React for general icons
- React Icons (Simple Icons) for brand logos

**Date Utilities**:
- date-fns for date formatting and manipulation

**UI Components**:
- Extensive Radix UI component primitives (dialogs, dropdowns, tooltips, etc.)
- embla-carousel-react for carousels
- cmdk for command palette functionality
- vaul for drawer components