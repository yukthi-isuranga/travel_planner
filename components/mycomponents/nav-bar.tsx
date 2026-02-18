import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import Link from 'next/link';
import SignIn from './sign-in';

export function NavBar() {
  return (
    <div className="w-full bg-white shadow-2xl py-4 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="./">
              <Image src="/next.svg" alt="Logo" width={50} height={50} />
            </Link>
            <span className="text-xl font-bold">Travel Planner</span>
          </div>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {/* Item one */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="./myTrips"
                  className="text-slate-900 hover:text-sky-500"
                >
                  My Trips
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* Item Two */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="./globe"
                  className="text-slate-900 hover:text-sky-500"
                >
                  Globe
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* Item Three */}
              <NavigationMenuItem>
                <SignIn />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}
