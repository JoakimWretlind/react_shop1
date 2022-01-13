import { useState } from "react"
import { DropdownUL, DropdownLink, NavSpanDropdown } from "../DropdownQ1/dropdown.style"
import { dropdownDataK } from "./dropdownDataK"
import { FaCaretDown, FaCaretUp } from "react-icons/fa"
import SubdropdownK from './SubdropdownK/SubdropdownK'

const DropdownK = () => {
    const [subDropdown, setSubDropdown] = useState(false)

    return (
        <DropdownUL>
            <NavSpanDropdown
                to="#"
                onMouseEnter={() => setSubDropdown(!subDropdown)}
                onMouseLeave={() => { setSubDropdown(!subDropdown) }}
            >
                brands {subDropdown ? <FaCaretUp /> : <FaCaretDown />}
                {subDropdown && <SubdropdownK />}
            </NavSpanDropdown>
            {dropdownDataK.map(item => (
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

export default DropdownK
