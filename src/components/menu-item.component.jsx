import { Link } from "react-router-dom"

export default function MenuItem({ item }) {
    return (
        <div>
            <Link to={item.to} className="flex justify-start items-center space-x-[43px] font-[900] text-[20px] text-white">
                <img src={item.icon} />
                <span>{item.name}</span>
            </Link>
        </div>
    )
}