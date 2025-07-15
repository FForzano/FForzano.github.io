# Animation Architecture Documentation

## Overview

This document describes the anti-flickering animation system implemented in the portfolio to eliminate card flickering during scroll and provide excellent accessibility support.

## Problem

The original implementation used Framer Motion's `whileInView` which caused cards to flicker during fast scrolling due to repeated triggering of animations.

## Solution

### 1. Custom Animation Hooks

#### `useStaticAnimation(items)`
- **Purpose**: Animate lists of items (publications, projects, experiences)
- **Behavior**: Triggers once when container enters viewport, animates all items simultaneously
- **Accessibility**: Respects `prefers-reduced-motion` preference
- **Usage**: Research, Experience, Projects sections

#### `useNoFlickerAnimation(targetRef)`
- **Purpose**: Animate single sections or containers
- **Behavior**: Triggers once when section enters viewport, sets visibility state
- **Accessibility**: Respects `prefers-reduced-motion` preference
- **Usage**: Hobbies, About, Skills, Contact sections

### 2. Performance Monitoring

#### Development Tools
- **FPS Monitoring**: Tracks frame rate and warns when below 30 FPS
- **Animation Budget**: Monitors if animations exceed 16ms budget
- **Memory Usage**: Logs memory consumption for debugging
- **Scroll Performance**: Optimized scroll handlers with throttling

#### Accessibility Features
- **Reduced Motion**: Automatically disables animations for users who prefer reduced motion
- **Focus Management**: Utilities for keyboard navigation and focus trapping
- **Screen Reader Support**: Announcement utilities for dynamic content
- **High Contrast**: Detection and support for high contrast mode

### 3. Implementation Details

#### Viewport Detection
- Uses `getBoundingClientRect()` instead of IntersectionObserver for better control
- Triggers when element is 80% visible from top and 20% from bottom
- Implements immediate visibility check + scroll listener

#### One-Time Trigger
- Uses `isInitializedRef` to prevent re-execution
- Removes scroll listener after first trigger
- Cleanup timeout on unmount

#### CSS Optimization
- `will-change: auto` for performance
- `backface-visibility: hidden` prevents rendering artifacts
- `pointer-events: none` during animations
- `transform-style: preserve-3d` for smooth transitions

### 4. Component Structure

All animated sections now use the pattern:
```jsx
const { ref: sectionRef, isVisible } = useNoFlickerAnimation()

// Apply to section
<section ref={sectionRef} className="section-container">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.8 }}
  >
    Content
  </motion.div>
</section>
```

### 5. Performance Benefits

- **Eliminated Flickering**: Cards no longer flicker during fast scrolling
- **Improved Performance**: Reduced re-renders and optimized scroll handling
- **Better Accessibility**: Respects user preferences for motion
- **Development Tools**: Built-in performance monitoring and debugging

### 6. Sections Updated

- ✅ Research (useStaticAnimation)
- ✅ Experience (useStaticAnimation)
- ✅ Projects (useStaticAnimation)
- ✅ Hobbies (useNoFlickerAnimation)
- ✅ About (useNoFlickerAnimation)
- ✅ Contact (useNoFlickerAnimation)
- ✅ Footer (original implementation maintained)
- ❌ Skills (removed - skills integrated into Experience section)

### 7. CSS Classes

All sections include anti-flickering CSS classes:
- `.research-container`
- `.experience-container`
- `.projects-container`
- `.hobbies-container`
- `.about-container`
- `.contact-container`

### 8. Navigation Enhancement

Added custom sailing boat navigation indicators:
- **SailingBoat Component**: Displays boats with different sail configurations based on progress
- **8 Different Boat Orientations**: 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°
- **SVG-based**: Organized SVG files in `/src/assets/svg/sailing/`
- **Progress Mapping**: Each section corresponds to a specific boat heading
- **Accessibility**: Proper ARIA labels and hover states
