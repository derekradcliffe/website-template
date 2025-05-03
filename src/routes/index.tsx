import { createFileRoute } from "@tanstack/react-router";
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

import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <Carousel>
        <CarouselContent>
            <CarouselItem className="h-[100vh] w-[100%]">
              <img src="https://placehold.co/1920x1080" alt="Image 1" className="w-full h-full object-cover" />
            <Button className="md:absolute relative left-1/2 transform -translate-x-1/2 md:bottom-0 bottom-20 bg-black text-white hover:bg-gray-500 cursor-pointer md:mb-10 md:mt-0 mt-5 mb-0 md:w-[10%] w-[30%]">Button 1</Button>
            </CarouselItem>
          <CarouselItem className="h-[100vh] w-[100%]">
            <img src="https://placehold.co/1920x1080" alt="Image 2" className="w-full h-full object-cover" />
          </CarouselItem>
          <CarouselItem className="h-[100vh] w-[100%]">
            <img src="https://placehold.co/1920x1080" alt="Image 3" className="w-full h-full object-cover" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="bg-white text-black text-5xl font-bold uppercase w-full text-center pt-24 md:pb-20 pb-10 md:pl-12 pl-12 md:pr-12 pr-12">Add some test here now</div>

      <Separator className="my-6" />

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
    </>
  );
}

export default App;