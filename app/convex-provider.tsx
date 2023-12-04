'use client'

import { useAuth } from '@clerk/nextjs'
import { ConvexProviderWithClerk, convexClient } from 'backend'

const ConvexProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConvexProviderWithClerk client={convexClient} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  )
}

export default ConvexProvider
