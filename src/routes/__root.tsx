import { Outlet, createRootRoute } from '@tanstack/react-router';
// import Header from '../components/Header';
import NotFound from '../components/NotFound';

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
    </>
  ),
  notFoundComponent: () => <NotFound />
});
