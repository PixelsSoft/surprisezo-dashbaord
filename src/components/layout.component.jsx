import Menu from '../components/menu.component'
import Header from '../components/header.component'

export default function Layout({ children }) {
    return (
        <>
            <div className="w-[400px] fixed">
                <Menu />
            </div>
            <div className="pl-[350px] mr-[54px]">
                {children}
            </div>
        </>
    )
}