import React, { FC, ReactNode } from 'react';

interface MainContentProps {
    children?: ReactNode;
}

const MainContent: FC<MainContentProps> = ( { children }) => {
    return (
        <div className="flex-1 px-4 md:px-6 lg:px-8">
            {children}
        </div>
    )
}

export default MainContent;