import { SubUL, SubLink } from "./subDropdown.style"
import { subDropdownData } from "./subDropdownData"

const Subdropdown = () => {
    return (
        <SubUL>
            {subDropdownData.map(item => (
                <SubLink
                    key={item.id}
                    to={item.path}
                >
                    {item.title}
                </SubLink>
            ))}
        </SubUL>
    )
}

export default Subdropdown
