import { useState } from "react"
import { DropdownUL, DropdownLink, NavSpanDropdown } from "./dropdown.style"
import { dropdownData } from "./dropdownData"
import { FaCaretDown, FaCaretUp } from "react-icons/fa"
import Subdropdown from "./Subdropdown/Subdropdown"

const Dropdown = () => {
    const [subDropdown, setSubDropdown] = useState(false)


    return (
        <DropdownUL>
            <NavSpanDropdown
                to="#"
                onMouseEnter={() => setSubDropdown(!subDropdown)}
                onMouseLeave={() => { setSubDropdown(!subDropdown) }}
            >
                brands {subDropdown ? <FaCaretUp /> : <FaCaretDown />}
                {subDropdown && <Subdropdown />}
            </NavSpanDropdown>
            {dropdownData.map(item => (
                <DropdownLink
                    key={item.id}
                    to={item.path}
                >
                    {item.title}
                </DropdownLink>
            ))}
        </DropdownUL>
    )
}

export default Dropdown
