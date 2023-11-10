import React from "react";

interface DrawerContainerProps {
    children: React.ReactNode
}

const DrawerContainer: React.FC<DrawerContainerProps> = ({children}) => {
    return (
        <div className="w-full p-8 sm:p-0 sm:w-auto mt-24 flex justify-center">
            <div className="w-full sm:w-auto grid grid-cols-2 sm:grid-cols-3 gap-8 md:grid-cols-4">
                {children}
            </div>
        </div>
    )
}

export default DrawerContainer