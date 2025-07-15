# Animation Architecture Documentation

## Overview

This document describes the anti-flickering animation system implemented in the portfolio to eliminate card flickering during scroll.

## Problem

The original implementation used Framer Motion's `whileInView` which caused cards to flicker during fast scrolling due to repeated triggering of animations.

## Solution

### 1. Custom Animation Hooks

#### `useStaticAnimation(items)`
- **Purpose**: Animate lists of items (publications, projects, experiences)
- **Behavior**: Triggers once when container enters viewport, animates all items simultaneously
- **Usage**: Research, Experience, Projects sections

#### `useNoFlickerAnimation(targetRef)`
- **Purpose**: Animate single sections or containers
- **Behavior**: Triggers once when section enters viewport, sets visibility state
- **Usage**: Hobbies, About sections

### 2. Implementation Details

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

### 3. Component Structure

#### CSS Classes
```css
.research-container,
.experience-container,
.hobbies-container {
  will-change: auto;
  backface-visibility: hidden;
  perspective: 1000px;
}
```

#### Animation Pattern
```jsx
const { containerRef, animatedItems } = useStaticAnimation(items)

// In render:
<div
  className={`transition-all duration-700 ease-out transform ${
    animatedItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
  style={{
    transitionDelay: animatedItems.has(index) ? `${index * 100}ms` : '0ms',
    willChange: 'transform, opacity'
  }}
>
```

## Implementation Status

| Component | Hook Used | Status |
|-----------|-----------|--------|
| Research | `useStaticAnimation` | ✅ |
| Experience | `useStaticAnimation` | ✅ |
| Hobbies | `useNoFlickerAnimation` | ✅ |
| Projects | `useStaticAnimation` | ✅ |

## Performance Benefits

1. **Reduced Re-renders**: One-time animation trigger
2. **Better Performance**: CSS transitions instead of JS animations
3. **Smoother Scrolling**: No interference with scroll events
4. **Memory Efficiency**: Automatic cleanup of event listeners

## Files Modified

- `/src/hooks/useOptimizedAnimation.js` - Animation hooks
- `/src/index.css` - Anti-flickering CSS
- `/src/components/Research.jsx` - Research section
- `/src/components/Experience.jsx` - Experience section  
- `/src/components/Hobbies.jsx` - Hobbies section
- `/src/components/Projects.jsx` - Projects section

## Testing

To verify the fix:
1. Scroll rapidly up and down through sections
2. Cards should animate only once when entering viewport
3. No flickering or re-loading should occur
4. Smooth transitions on all devices
