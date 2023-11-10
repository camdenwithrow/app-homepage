import { Edit } from "../icons/Icons"
import { AppData } from "../App"

interface SelectedAppDialogProps {
    selectedApp: AppData | null
    setSelectedApp: React.Dispatch<React.SetStateAction<AppData | null>>
}

const SelectedAppDialog = (props: SelectedAppDialogProps) => {
    return (
        <>
            {props.selectedApp &&
                <div className='absolute p-6 z-10 inset-0 flex justify-center items-center bg-slate-500/50'>
                    <div className='w-full sm:w-[500px] px-10 py-6 bg-slate-900/95 rounded-lg'>
                        <div className='grid grid-cols-12 overflow-hidden text-ellipsis'>
                            <div className='col-span-12 sm:col-span-2 text-sm'>name: </div>
                            <div className='col-span-10 sm:col-span-9 font-extrabold uppercase text-ellipsis overflow-hidden'>{props.selectedApp.name}</div>
                            <button>
                                <Edit className='ml-3 h-4 w-4 stroke-slate-200' />
                            </button>
                            <div className='col-span-12 sm:col-span-2 text-sm'>url: </div>
                            <div className='col-span-10 sm:col-span-9 font-extrabold text-ellipsis overflow-hidden'>{props.selectedApp.url}</div>
                            <button>
                                <Edit className='ml-3 h-4 w-4 stroke-slate-200' />
                            </button>
                            <div className='col-span-12 sm:col-span-2 text-sm'>logo url: </div>
                            <div className='col-span-10 sm:col-span-9 w-full font-extrabold text-ellipsis overflow-hidden'>{props.selectedApp.logo}</div>
                            <button>
                                <Edit className='ml-3 h-4 w-4 stroke-slate-200' />
                            </button>
                        </div>
                        <div className='w-full mt-6 flex justify-end items-center'>
                            <button onClick={() => props.setSelectedApp(null)} className='mr-3 px-2 py-1 border border-slate-200 rounded-lg'>Close</button>
                            <button onClick={() => props.setSelectedApp(null)} className='px-2 py-1 text-slate-800 bg-slate-400 border border-slate-400 rounded-lg'>Apply</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SelectedAppDialog