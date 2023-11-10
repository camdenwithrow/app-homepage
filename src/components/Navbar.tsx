const Navbar = () => {
    return (
        <div className="w-full py-4 px-8 flex items-center justify-between ">
            <h2 className=" text-xl font-bold">App Drawer</h2>
            <button className="py-2 px-3 rounded-lg border border-slate-200 transition hover:bg-slate-200 hover:text-slate-900 active:bg-slate-600 active:text-slate-200 active:border-slate-600">Log out</button>
        </div>
    )
}

export default Navbar