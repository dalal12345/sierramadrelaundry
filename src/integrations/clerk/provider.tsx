import React from 'react'
import { ClerkProvider } from '@clerk/tanstack-react-start'

export default function AppClerkProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const publishableKey =
    typeof process !== 'undefined'
      ? process.env.VITE_CLERK_PUBLISHABLE_KEY ||
        process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
        process.env.CLERK_PUBLISHABLE_KEY
      : undefined

  if (!publishableKey) {
    // If Clerk environment variables are not configured in Vercel, safely render children
    return <>{children}</>
  }

  return <ClerkProvider publishableKey={publishableKey}>{children}</ClerkProvider>
}
