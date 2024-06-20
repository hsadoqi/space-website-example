import { useEffect, useState } from 'react';

const useScrollSpy = (items: string[], offset = 0) => {
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            let currentActiveId = null;

            for (const item of items) {
                const section = document.getElementById(item.toLowerCase());
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= offset && rect.bottom >= offset) {
                        currentActiveId = item.toLowerCase();
                        break;
                    }
                }
            }

            setActiveId(currentActiveId);
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll(); // Call it once to set the initial state

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [items, offset]);

    return activeId;
};

export default useScrollSpy;
