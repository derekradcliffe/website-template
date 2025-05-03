import { Outlet, createRootRoute } from '@tanstack/react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from '../components/NotFound';

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
  notFoundComponent: () => <NotFound />
});
