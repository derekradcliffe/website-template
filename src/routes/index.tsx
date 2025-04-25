import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <Header />

      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img src="https://placehold.co/1920x800" alt="Image 1" />
          </CarouselItem>
          <CarouselItem>
            <img src="https://placehold.co/1920x800" alt="Image 2" />
          </CarouselItem>
          <CarouselItem>
            <img src="https://placehold.co/1920x800" alt="Image 3" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="text-5xl font-bold uppercase w-full text-center mt-16 mb-16">Add some test here now</div>

      <Separator className="my-10" />

      <div className="cardWrapper flex md:flex-row flex-col justify-evenly md:w-[80%] w-full mx-auto">
        <Card className="w-full md:max-w-[33%] max-w-[90%] md:m-5 mb-12 pt-0 justify-center self-center">
          <CardHeader className="p-0">
            <img className="rounded-t-xl" src="https://placehold.co/1920x800" alt="Card img 1" />
            <CardTitle className="text-center pt-3">Card Title</CardTitle>
            <CardDescription className="text-center">Card Description</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardContent>
        </Card>

        <Card className="w-full md:max-w-[33%] max-w-[90%] md:m-5 mb-12 pt-0 justify-center self-center">
          <CardHeader className="p-0">
            <img className="rounded-t-xl" src="https://placehold.co/1920x800" alt="Card img 2" />
            <CardTitle className="text-center pt-3">Card Title</CardTitle>
            <CardDescription className="text-center">Card Description</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardContent>
        </Card>

        <Card className="w-full md:max-w-[33%] max-w-[90%] md:m-5 mb-12 pt-0 justify-center self-center">
          <CardHeader className="p-0">
            <img className="rounded-t-xl" src="https://placehold.co/1920x800" alt="Card img 3" />
            <CardTitle className="text-center pt-3">Card Title</CardTitle>
            <CardDescription className="text-center">Card Description</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardContent>
        </Card>
      </div>

      <footer>
        <div className="text-center text-white bg-gray-800 p-4 mt-10">
          <h2 className="text-2xl font-bold">Footer Title</h2>
          <p className="text-lg">Footer Subtitle</p>
          <p className="text-xs mt-6">Designed by <a className="hover:underline" href="https://derekradcliffe.com">DRD</a></p>
        </div>
      </footer>
    </>
  );
}
