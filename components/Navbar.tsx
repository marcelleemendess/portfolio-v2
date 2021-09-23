import { FunctionComponent, useEffect, useState } from "react"
import Link from 'next/link'
import { useRouter } from "next/dist/client/router"


//Navbar Item component
const NavItem: FunctionComponent<{
    activeItem: string,
    setActiveItem: Function,
    name: string,
    route: string
}> = ({activeItem, name, route, setActiveItem}) => {
    return (
        activeItem !== name ? (
            <Link href={route}>
                <a>
                    <span
                        onClick={() => setActiveItem(name)}
                        className="hover:text-purple">{name}
                    </span>
                </a>
            </Link>
        ):null
    )
}

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('')
    const { pathname } = useRouter()

    useEffect(() => {
        if (pathname === '/') setActiveItem('About')
        if (pathname === '/projects') setActiveItem('Projects')
    }, [pathname])
    return (
        <div className="flex justify-between px-5 my-3 ">
            <span className="text-xl font-bold border-b-4 text-purple border-purple md:text-2xl">
                {activeItem}
            </span>
            <div className="flex space-x-3 text-lg">    
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="About" route="/"
                />
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="Projects" route="/projects"
                />
            </div>
        </div>
    )
}

export default Navbar
