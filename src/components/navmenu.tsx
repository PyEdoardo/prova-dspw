import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { useNavigate } from "react-router-dom"

export const NavBar = (): React.JSX.Element => {

    return <>
    <div className="w-full flex justify-center fixed top-0">
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuTrigger>Páginas</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink href="/">Página Principal</NavigationMenuLink>
                        <NavigationMenuLink href="/favoritos" >Favoritos</NavigationMenuLink>
                    </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
    </div>
    </>
}