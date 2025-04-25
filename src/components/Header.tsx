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
    <NavigationMenu className="bg-white w-[100%] justify-end p-[0.5rem] fixed top-0 z-5 shadow-md">
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem>
            <NavigationMenuLink>
              <Link to="/">Home</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
        {/* About or Gallery */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <NavigationMenuLink>
              <Link to="/about">About</Link>
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
  )
}
