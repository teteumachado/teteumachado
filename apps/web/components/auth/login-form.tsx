'use client'

import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import { useRouter } from '@/i18n/navigation'
import { Button } from '@workspace/ui/components/button'
import { Input } from '@workspace/ui/components/input'
import { toast } from 'sonner'
import { IconMail, IconLock } from '@tabler/icons-react'
import { authClient } from '@workspace/auth/client'

const formSchema = z.object({
  email: z.string().email('Email must be valid.'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .max(32, 'Password must be at most 32 characters.'),
})

export function LoginForm() {
  const router = useRouter()

  const form = useForm({
    defaultValues: { email: '', password: '' },
    validators: { onSubmit: formSchema },
    onSubmit: async ({ value }) => {
      await authClient.signIn.email(
        {
          email: value.email,
          password: value.password,
        },
        {
          onError(context) {
            toast.error(context.error.message)
          },
          onSuccess() {
            toast.success('Signed in successfully.')
            router.push('/')
          },
        }
      )
    },
  })

  return (
    <div className="w-full">
      <form
        id="login-form"
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
      >
        <div className="flex flex-col gap-4">
          <form.Field name="email">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <div
                  className="flex flex-col gap-1.5"
                  data-invalid={isInvalid || undefined}
                >
                  <label
                    htmlFor={field.name}
                    className="text-sm font-medium tracking-tight text-foreground"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <IconMail className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid || undefined}
                      placeholder="john@doe.com"
                      autoComplete="email"
                      className="pl-8"
                    />
                  </div>
                  {isInvalid && (
                    <p className="text-xs text-destructive">
                      {field.state.meta.errors.join(', ')}
                    </p>
                  )}
                </div>
              )
            }}
          </form.Field>
          <form.Field name="password">
            {(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid
              return (
                <div
                  className="flex flex-col gap-1.5"
                  data-invalid={isInvalid || undefined}
                >
                  <label
                    htmlFor={field.name}
                    className="text-sm font-medium tracking-tight text-foreground"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <IconLock className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid || undefined}
                      type="password"
                      placeholder="Most secure password..."
                      autoComplete="current-password"
                      className="pl-8"
                    />
                  </div>
                  {isInvalid && (
                    <p className="text-xs text-destructive">
                      {field.state.meta.errors.join(', ')}
                    </p>
                  )}
                </div>
              )
            }}
          </form.Field>
        </div>
      </form>
      <Button type="submit" form="login-form" size="lg" className="mt-6 w-full">
        Sign in
      </Button>
    </div>
  )
}
