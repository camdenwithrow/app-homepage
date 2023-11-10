import { AppData } from "../App"
import { MoreInfo } from "../icons/Icons"

interface AppCardProps {
    appData: AppData
    setSelectedApp: React.Dispatch<React.SetStateAction<AppData | null>>
}

const AppCard = (props: AppCardProps) => {
    const { appData, setSelectedApp } = props
    return (
        <a
            key={appData.id}
            // href={app.url}
            href="#"
            className="relative p-4 flex flex-col justify-center items-center bg-slate-500/20 cursor-pointer rounded-lg group"
        >
            <span className="absolute inset-0 shadow shadow-slate-500 rounded-lg group-active:opacity-0"></span>
            <span className="absolute inset-0 rounded-lg shadow-lg shadow-slate-500 opacity-0 duration-100 transition-opacity group-hover:opacity-60 group-active:opacity-0 active:transition-none"></span>
            <img src={appData.logo} alt={`${appData.name} logo`} className="h-24 w-24 sm:h-32 sm:w-32" />
            <h4 className="mt-2 font-extrabold text-xs uppercase">{appData.name}</h4>
            <button onClick={() => setSelectedApp(appData)} className='absolute top-2 right-1 h-8 w-8 z-1'>
                <MoreInfo className="stroke-slate-200 w-8 h-8 border-none" />
            </button>
        </a>
    )
}

export default AppCard