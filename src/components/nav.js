
const navMap = ["Home", "About", "Team", "Connect"]

function Nav() {
            
    return (
        <nav className={'flex flex-row flex-wrap justify-between bg-white h-8'}>
                <h1 className={'text-black text-3xl m-2 p-2'}>SONVR DESIGN</h1>
                <ul className={'flex flex-row  flex-wrap'}>
                       {navMap.map((item, idx) => {
                    return (
                        <li className={'flex p-4 text-lg font-sans font-semibold'} key={idx}>{item}</li>
                    )
                })}
                </ul>
             
        </nav>
    )
}

export default Nav