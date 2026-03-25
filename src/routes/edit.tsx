import { createFileRoute } from '@tanstack/react-router'
import { EditPage } from '../components/Header/EditPage'

export const Route = createFileRoute('/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <EditPage />;
}
