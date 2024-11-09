'use client';

import { createContext, useContext, useState } from "react";
import clsx from "clsx";
import styles from './Accordion.module.css';


// Step 1: Create Accordion Context
const AccordionContext = createContext();

function Panel({ title, children, activeIndex }) {
    const { setActiveIndex, activeIndexFromContext } = useContext(AccordionContext);

    const toggle = () => setActiveIndex(activeIndex);

    return (
        <div className={styles.panel}>
        <h2 className={styles.title}>{title}</h2>
        <div className={clsx(styles.content, {
            hidden: activeIndexFromContext !== activeIndex,
        })}>{children}</div>
        {activeIndexFromContext !== activeIndex && (
            <button className={styles.showButton} onClick={toggle}>
                Show more
            </button>
        )}
    </div>
    )
};

// Step 2: Create Accordion Component to provide Context
export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <AccordionContext.Provider value={{ activeIndexFromContext: activeIndex, setActiveIndex }}>
            <div className={'flex flex-col border border-black rounded'}>
                <Panel title={'Section 1'} activeIndex={1}>
                    Content 1
                </Panel>
                <Panel title={'Section 2'} activeIndex={2}>
                    Content 2
                </Panel>
                <Panel title={'Section 3'} activeIndex={3}>
                    Content 3
                </Panel>
                <Panel title={'Section 4'} activeIndex={4}>
                    Content 4
                </Panel>
            </div>
        </AccordionContext.Provider>
    );
}
