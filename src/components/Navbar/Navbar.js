import { useState } from "react"
import Dropdown from './DropdownQ1/Dropdown'
import DropdownK from "./DropdownK/DropdownK";
import { NavToggler, Nav, SideSection, NavUL, NavLink, NavSpan, LogoWrapper, Logo, LogoCrown, SideIcons } from "./navbar.style"
import { FaBars, FaTimes, FaCaretDown, FaCaretUp } from "react-icons/fa"
import { IoSearchOutline, IoPersonOutline, IoHeartOutline, IoHeartSharp, IoCartOutline, IoCartSharp } from "react-icons/io5";

import crown from '../assets/images/crown.png'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const [isActive, setIsActive] = useState('')
    const [dropdown, setDropdown] = useState(false)
    const [dropdownK, setDropdownK] = useState(false)

    return (
        <>
            <NavToggler onClick={() => setNavbar(!navbar)} navbar={navbar}>
                {navbar ? <FaTimes /> : <FaBars />}
            </NavToggler>
            <Nav navbar={navbar}>
                <NavUL>
                    <SideSection>
                        <NavSpan
                            className={`${0 === isActive && 'active'}`}
                            to="#"
                            onMouseEnter={() => { setDropdownK(!dropdownK); setIsActive(0) }}
                            onMouseLeave={() => { setDropdownK(!dropdownK) }}
                        >
                            kings {dropdownK ? <FaCaretUp /> : <FaCaretDown />}
                            {dropdownK && <DropdownK />}
                        </NavSpan>
                        <NavSpan
                            className={`${1 === isActive && 'active'}`}
                            to="#"
                            onMouseEnter={() => { setDropdown(!dropdown); setIsActive(1) }}
                            onMouseLeave={() => { setDropdown(!dropdown) }}
                        >
                            queens {dropdown ? <FaCaretUp /> : <FaCaretDown />}
                            {dropdown && <Dropdown />}
                        </NavSpan>
                        <NavLink
                            to="/kids"
                            onClick={() => { setIsActive(2); setDropdown(false); setNavbar(!navbar) }}
                            className={`${2 === isActive && 'active'}`}
                        >
                            kids
                        </NavLink>
                        <NavLink
                            to="/sale"
                            onClick={() => { setIsActive(3); setDropdown(false); setNavbar(!navbar) }}
                            className={`${3 === isActive && 'active'}`}
                        >
                            sale
                        </NavLink>
                    </SideSection>
                    <LogoWrapper>
                        <LogoCrown src={crown} />
                        <Logo to="/">mylogo</Logo>
                    </LogoWrapper>
                    <SideSection>
                        <SideIcons>
                            <IoSearchOutline />
                        </SideIcons>
                        <SideIcons>
                            <IoPersonOutline />
                        </SideIcons>
                        <SideIcons>
                            <IoHeartOutline />
                        </SideIcons>
                        <SideIcons>
                            <IoCartOutline />
                        </SideIcons>
                    </SideSection>
                </NavUL>
            </Nav>
        </>
    )
}

export default Navbar

/**
 * onClick={() => { setDropdown(!dropdown) }}
   onClick={() => setIsActive(1)}
 */