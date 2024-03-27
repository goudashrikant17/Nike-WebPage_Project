


function Header(){
    return(
        <>
        <div className="flex items-center md:justify-between px-20 w-screen h-[50px] sm:justify-evenly">

            <div id="logo" >
                <img className=" h-[45px] w-19" src="\public\images\logo.webp" alt="" />
            </div>

            <div id="list" className=" flex gap-6 font-bold">
                    <a href="">MENU</a>
                    <a href="">LOCATION</a>
                    <a href="">ABOUT</a>
                    <a href="">CONTACT</a>
            </div>

            <div id="button">
                <button className=" bg-red-600 px-3 py-1 rounded-md">Login</button>
            </div>
        </div>
        </>
    )
}


export default Header;