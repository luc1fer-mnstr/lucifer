// utils/cn.js
// Utility to merge Tailwind classes conditionally
// Usage: cn("base-class", isActive && "active-class", "other-class")

export const cn = (...classes) => classes.filter(Boolean).join(" ");
