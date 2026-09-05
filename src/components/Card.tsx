import type { ReactElement } from "react"

interface layout {
    children: ReactElement,
    width: string
}
const Card = ({ children, width }: layout) => {
    return <>
        <div className={`${width} border-1 border-gray-200 p-5 rounded-lg`}>
            {children}
        </div>
    </>
}
export default Card