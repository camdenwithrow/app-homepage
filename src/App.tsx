function App() {

  const apps = [
    { id: 0, name: "Life Dash", url: "https://www.camdenwithrow.com", logo: "https://img.logoipsum.com/300.svg" },
    { id: 1, name: "Finance", url: "https://www.camdenwithrow.com", logo: "https://img.logoipsum.com/300.svg" },
    { id: 2, name: "Health", url: "https://www.camdenwithrow.com", logo: "https://img.logoipsum.com/300.svg" },
    { id: 3, name: "Fitness", url: "https://www.camdenwithrow.com", logo: "https://img.logoipsum.com/300.svg" },
    { id: 4, name: "Wishlist", url: "https://www.camdenwithrow.com", logo: "https://img.logoipsum.com/300.svg" },
    { id: 5, name: "Recipes", url: "https://www.camdenwithrow.com", logo: "https://img.logoipsum.com/300.svg" },
    { id: 6, name: "Scheduler", url: "https://www.camdenwithrow.com", logo: "https://img.logoipsum.com/300.svg" },
    { id: 7, name: "Meal Plan", url: "https://www.camdenwithrow.com", logo: "https://img.logoipsum.com/300.svg" },
  ]

  return (
    <div className="min-h-screen w-screen bg-slate-800 text-slate-200">
      <div className="w-full py-4 px-8 flex items-center justify-between shadow-lg bg-slate-900">
        <h2 className=" text-xl font-bold">App Drawer</h2>
        <button className="py-2 px-3 rounded-lg border border-slate-200 transition hover:bg-slate-200 hover:text-slate-900 active:bg-slate-600 active:text-slate-200 active:border-slate-600">Log out</button>
      </div>
      <div className="w-full p-8 sm:p-0 sm:w-auto mt-24 flex justify-center">
        <div className="w-full sm:w-auto grid grid-cols-3 gap-8 md:grid-cols-4">
          {apps.map((app) => (
            <a 
              key={app.id} 
              // href={app.url}
              href="#" 
              className="relative p-4 flex flex-col justify-center items-center cursor-pointer rounded-lg group"
            >
              <span className="absolute inset-0 shadow shadow-slate-900 rounded-lg group-active:opacity-0"></span>
              <span className="absolute inset-0 rounded-lg shadow-lg shadow-slate-900 opacity-0 duration-100 transition-opacity group-hover:opacity-100 group-active:opacity-0 active:transition-none"></span>
              <img src={app.logo} alt={`${app.name} logo`} className="h-32 w-32" />
              <h4 className="font-extrabold text-xs uppercase">{app.name}</h4>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
