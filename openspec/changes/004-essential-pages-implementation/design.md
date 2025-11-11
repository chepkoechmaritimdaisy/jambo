# Essential Pages Design Document

## Design System Analysis

### Color Schemes Identified
From analyzing the design files, three primary color variants were found:

1. **Teal Variant** (homepage_1):
   - Primary: `#4FD1C5` (teal)
   - Background Light: `#FFFFFF`
   - Background Dark: `#1A2E35`
   - Text Primary: `#1A2E35`
   - Text Secondary: `#718096`
   - Accent Light: `#E6FFFA`

2. **Blue Variant** (tattoo_removal_packages_1):
   - Primary: `#13a4ec` (blue)
   - Background Light: `#f6f7f8`
   - Background Dark: `#101c22`
   - Card Dark: `#1a2831`

3. **Navy Variant** (package_details_page_1):
   - Primary: `#003366` (navy blue)
   - Secondary: `#F0F2F5` (light grey)
   - Accent: `#FF7F50` (coral)
   - Text Dark: `#333333`
   - Text Light: `#617c89`

**Recommendation**: Use the Teal Variant as primary, incorporating coral accents from Navy variant for CTAs.

### Typography
- **Font Family**: Manrope (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800
- **Characteristics**: Modern, clean, highly readable

### Icon System
- **Icon Set**: Material Symbols Outlined
- **Configuration**: `font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24`

### Border Radius
- **Default**: 0.5rem (8px)
- **Large**: 0.75rem (12px)
- **Extra Large**: 1rem (16px)
- **Full**: 9999px (circular)

## Page Layout Patterns

### Header Pattern
```typescript
interface HeaderProps {
  sticky?: boolean;
  transparent?: boolean;
  showAuth?: boolean;
}
```
- Sticky navigation with backdrop blur
- Logo on left, navigation center, auth buttons right
- Mobile hamburger menu
- Dark mode toggle

### Hero Section Pattern
```typescript
interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  backgroundImage?: string;
  showTrustIndicators?: boolean;
}
```
- Large headline with supporting text
- Primary CTA button
- Trust indicators (ratings, certifications)
- Optional background image or video

### Card Component Pattern
```typescript
interface CardProps {
  variant: 'package' | 'service' | 'testimonial' | 'admin';
  image?: string;
  title: string;
  description?: string;
  price?: number;
  features?: string[];
  actions?: React.ReactNode;
}
```

## Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## Animation Guidelines
- **Page Transitions**: 300ms ease-in-out
- **Hover States**: 200ms ease
- **Modal Transitions**: 250ms ease
- **Loading States**: Gentle fade-in (400ms)

## Component Architecture

### Layout Components
1. **AppLayout**: Main application wrapper
2. **PageLayout**: Standard page structure
3. **AdminLayout**: Admin-specific layout with sidebar
4. **CheckoutLayout**: Minimal layout for checkout flow

### UI Components
1. **Button**: Multiple variants (primary, secondary, outline, ghost)
2. **Card**: Flexible card component for different content types
3. **Input**: Form inputs with validation states
4. **Modal**: Overlay dialogs for confirmations and forms
5. **Badge**: Status indicators and tags
6. **Avatar**: User profile images and placeholders

### Business Components
1. **PackageCard**: Service package display
2. **BookingCalendar**: Appointment scheduling
3. **CheckoutForm**: Payment processing
4. **Testimonial**: Customer reviews
5. **Gallery**: Before/after image display

## Dark Mode Implementation
- **CSS Variables**: For theme switching
- **Tailwind Dark Class**: `dark:` prefix for dark styles
- **System Preference**: Respect `prefers-color-scheme`
- **Manual Toggle**: User-controlled theme switcher

## Performance Considerations
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Route-based and component-based
- **Font Loading**: Google Fonts with display=swap
- **CSS Purging**: Tailwind CSS purging in production

## Accessibility Requirements
- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Tab order and focus management
- **Color Contrast**: WCAG AA compliance
- **Reduced Motion**: Respect user preferences