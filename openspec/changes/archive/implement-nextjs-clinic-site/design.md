# System Architecture Design

## Overview
A self-contained Next.js application using App Router with integrated backend via Route Handlers, designed for eventual migration to Elixir-based Jambo-SAAS.

## Technology Stack
- **Framework**: Next.js 
- **Styling**: Tailwind CSS with custom design system
- **Database**: Vercel Postgres or Supabase
- **Authentication**: NextAuth.js with role-based access
- **Payments**: m-pesa 
- **Date Handling**: date-fns + react-day-picker
- **Deployment**: Vercel

## Architecture Patterns

### 1. Separation of Concerns
```
/app
├── (auth)/           # Authentication routes
├── (admin)/          # Admin panel routes
├── (customer)/       # Customer-facing routes
├── api/              # Route handlers (backend logic)
└── globals.css       # Global styles
```

### 2. Database Schema Design
```sql
-- Core entities
Users (auth integration + roles)
Packages (tattoo removal packages)
Orders (purchase records)
Bookings (appointments)

-- Availability system
Specialists (service providers)
Stations (treatment rooms)
Availability (time slots)
Bookings (reserved slots)

-- Ambassador program
Ambassadors (affiliate users)
CouponCodes (generated codes)
Commissions (tracking)
```

### 3. API Layer Strategy
we can work with api or without api dor mvp 
we can make only nextjs without api for mvp
- `/api/packages/*` - Package management
- `/api/bookings/*` - Booking operations
- `/api/availability/*` - Slot management
- `/api/ambassadors/*` - Affiliate program
- `/api/webhooks/mpesa` - Payment processing

### 4. Component Architecture
```
/components
├── ui/              # Reusable UI primitives
├── forms/           # Form components
├── layout/          # Layout components
├── admin/           # Admin-specific components
└── customer/        # Customer-facing components
```

## Key Design Decisions

### 1. Self-Contained Architecture
- All backend logic in Next.js Route Handlers
- Database directly accessible from Next.js
- Clean separation for future Elixir migration
- Minimal external dependencies

### 2. Modern UI/UX Requirements
- SaaS-quality interactions and animations
- Frictionless booking experience
- Real-time availability updates
- Mobile-first responsive design

### 3. Availability System Design
Complex availability calculation:
- Base availability from admin settings
- Dynamic slot generation based on bookings
- Real-time conflict prevention
- Specialist and station pairing

### 4. E-Commerce Integration
- Stripe Checkout for secure payments
- Webhook-driven order fulfillment
- Automatic user account creation
- Booking credit allocation

## Migration Strategy for Phase 2
All API endpoints designed as thin wrappers:
```javascript
// Current: Direct database access
export async function GET() {
  const data = await db.query('SELECT * FROM packages')
  return Response.json(data)
}

// Future: Elixir API call
export async function GET() {
  const data = await fetch('https://api.jambo-saas.com/packages')
  return Response.json(data)
}
```

## Performance Considerations
- ISR for static content pages
- Database connection pooling
- Image optimization with Next.js Image
- Caching strategy for availability data
- Bundle optimization with dynamic imports

## Security Measures
- Role-based access control (RBAC)
- Input validation and sanitization
- Rate limiting on API endpoints
- Secure webhook signature verification
- Environment variable management