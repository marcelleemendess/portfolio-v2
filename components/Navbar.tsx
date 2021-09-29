import { FunctionComponent, useState } from "react"
import { useRouter } from "next/dist/client/router"


//Navbar Item component
const NavItem: FunctionComponent<{
    activeItem: string,
    // setActiveItem: Function,
    toggleContent: boolean,
    setToggleContent: Function,
    // name: string,

}> = ({toggleContent, setToggleContent}) => {
    return (     
        <a>
            <span
                onClick={() => ( setToggleContent(s=>!s))}
                className="cursor-pointer hover:text-purple "
            >
                {!toggleContent ? 'Projects': 'About'}
            </span>
        </a>
    )
}

const Navbar = ({ toggleContent, setToggleContent}) => {
    const [activeItem, setActiveItem] = useState<string>('')
    const { pathname } = useRouter()

    // useEffect(() => {
    //     if (!toggleContent) setActiveItem('About')
    //     if (toggleContent) setActiveItem('Projects')
    // }, [toggleContent])
  
    return (
        <div className="flex justify-between px-5 my-3 ">
            <span className="text-xl font-bold border-b-4 text-purple border-purple md:text-2xl">
                {toggleContent ? 'Projects':'About'}
            </span>
            <div className="flex space-x-3 text-lg">    
                <NavItem
                    activeItem={activeItem}
                    toggleContent={toggleContent}
                    setToggleContent={setToggleContent}
                />
            </div>
        </div>
    )
}

export default Navbar
