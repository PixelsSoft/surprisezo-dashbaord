import Menu from '../components/menu.component'

export default function Layout({children}) {
    return (
        <>
            <Menu />
            <div className="pt-8 pl-[250px] md:pl-[340px] pr-3 font-lato">
                {children}
            </div>
        </>
    )
}