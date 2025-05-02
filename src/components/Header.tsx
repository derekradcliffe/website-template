import { Link } from '@tanstack/react-router';
import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <div className="flex flex-row bg-white w-full p-2 fixed top-0 z-5 shadow-md">
      <div className="logo pl-3 justify-center self-center">
      <Link to="/"><img src="https://placehold.co/200x50" alt="Logo" className="top-0 left-0 z-5" /></Link>
        {/* <div className="textLogo">Your logo</div> */}
      </div>
        <NavigationMenu className="bg-white w-[100%] justify-end p-[0.5rem]">
          <NavigationMenuList>
            {/* Home */}
            <NavigationMenuItem>
                <NavigationMenuLink>
                  <Link to="/">Home</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            {/* About or Gallery */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <Link to="/about">About Us</Link>
                </NavigationMenuLink>
                <NavigationMenuLink>
                  <Link to="/about">Gallery</Link>
                </NavigationMenuLink>
                <NavigationMenuLink>
                  <Link to="/about">Another Link</Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* Contact */}
            <NavigationMenuItem>
                <NavigationMenuLink>
                  <Link to="/contact">Contact</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
    </div>
  )
}
