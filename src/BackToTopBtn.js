import React, { useEffect, useState } from "react";
import "./BackToTopBtn.css";

export default function BackToTopBtn() {

    const [backToTopBtn, setBackToTopBtn] = useState(false);

    useEffect(() => {
        const handleBackToTopBtn = () => {
            if (window.pageYOffset > 300) {
                setBackToTopBtn(true);
            } else {
                setBackToTopBtn(false);
            }
        };

        window.addEventListener('scroll', handleBackToTopBtn);

        return () => {
            window.removeEventListener('scroll', handleBackToTopBtn);
        }
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        }
            );
    }

    return (
        <div>
            { backToTopBtn &&
                <button onClick={scrollUp} className="backToTop" title="Back to top">
                ↑
            </button>
            }
        </div>
    );
}