import React, { FC } from "react";
import "../styles.css";

type TabsProps = {
    tabs: {
        index: number;
    }[];
    selectedTab: number;
    onClick: (index: number) => void;
    orientation?: "horizontal" | "vertical";
    className?: string;
};

const Tabs: FC<TabsProps> = ({
    className = "tabs-component",
    tabs = [],
    selectedTab = 0,
    onClick,
    orientation = "horizontal"
}) => {
    const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);

    return (
        <div
            className={
                orientation === "vertical" ? className + " vertical" : className
            }
        >
            <div role="tablist" aria-orientation={orientation}>
                {tabs.map((tab) => (
                    <button
                        className={selectedTab === tab.index ? "active" : ""}
                        onClick={() => onClick(tab.index)}
                        key={tab.index}
                        type="button"
                        role="tab"
                        aria-selected={selectedTab === tab.index}
                        aria-controls={`tabpanel-${tab.index}`}
                        tabIndex={selectedTab === tab.index ? 0 : -1}
                        id={`btn-${tab.index}`}
                    >
                    </button>
                ))}
            </div>
            <div
                role="tabpanel"
                aria-labelledby={`btn-${selectedTab}`}
                id={`tabpanel-${selectedTab}`}
            >
            </div>
        </div>
    );
};
export default Tabs;