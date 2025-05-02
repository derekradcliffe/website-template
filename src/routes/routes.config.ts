import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/routes/config')({
  component: RouteComponent,
})

function RouteComponent() {
  // return <div>Hello "/routes/config"!</div>
}
