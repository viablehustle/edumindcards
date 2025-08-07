# Overview

This is a full-stack educational flashcard application built with React, Express, and PostgreSQL. The application allows users to study flashcards across different subjects (geology, math, science) with an interactive learning interface that includes hints, progress tracking, and subject filtering. The frontend uses modern React with TypeScript and shadcn/ui components, while the backend provides a REST API for flashcard data management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack React Query for server state and local React state for component state
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation resolvers

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful API with endpoints for flashcard operations
- **Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Hot reload with Vite middleware integration
- **Error Handling**: Centralized error handling middleware

## Data Storage
- **Database**: PostgreSQL configured with Drizzle ORM
- **Schema**: Defined flashcard and user tables with proper relationships
- **Migration**: Drizzle Kit for schema migrations
- **Connection**: Neon Database serverless PostgreSQL adapter
- **Current State**: Using in-memory storage with seeded data, database integration ready

## Component Architecture
- **Design System**: Consistent component library following shadcn/ui patterns
- **Composition**: Modular components with clear separation of concerns
- **Reusability**: Shared UI components with variant-based styling
- **Accessibility**: Built-in accessibility features from Radix UI

## Development Workflow
- **Monorepo Structure**: Client and server code in same repository with shared schema
- **Build Process**: Vite for frontend, esbuild for backend production builds
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Development Server**: Integrated development experience with proxy setup

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting platform
- **Drizzle ORM**: TypeScript ORM for database operations and migrations

## UI and Styling
- **Radix UI**: Unstyled, accessible UI components
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe variant styling

## Development Tools
- **Vite**: Frontend build tool and development server
- **TypeScript**: Type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Plugins**: Development environment integration

## State Management
- **TanStack React Query**: Server state management and caching
- **Wouter**: Lightweight routing library
- **React Hook Form**: Form state management and validation

## Runtime Dependencies
- **Express**: Web server framework
- **Date-fns**: Date manipulation library
- **Zod**: Schema validation library
- **Connect-pg-simple**: PostgreSQL session store (for future session management)