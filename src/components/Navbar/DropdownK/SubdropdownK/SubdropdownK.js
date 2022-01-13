import { SubUL, SubLink } from "../../DropdownQ1/Subdropdown/subDropdown.style"
import { subDropdownData } from "./subDropdownData"

const SubdropdownK = () => {
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

export default SubdropdownK
