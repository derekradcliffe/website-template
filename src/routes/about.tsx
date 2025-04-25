import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";

export const Route = createFileRoute("/about")({
    component: About,
  });

export default function About() {
  return (
    
    <>
    <Header />
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-center max-w-2xl">
            Welcome to our website! We are dedicated to providing the best service
            possible. Our team is committed to excellence and we strive to exceed
            your expectations.
          </p>
        </div>
    </>
  );
}
