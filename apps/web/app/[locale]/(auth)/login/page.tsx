import { LoginForm } from '@/components/auth/login-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
}

export default function LoginPage() {
  return (
    <div className="relative isolate flex flex-col items-center">
      <p className="mt-4 mb-4 text-xl font-semibold tracking-tight">Login</p>
      <LoginForm />
    </div>
  )
}
