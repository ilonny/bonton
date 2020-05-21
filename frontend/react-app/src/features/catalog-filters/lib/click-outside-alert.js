import { useEffect } from "react";
export const useOutsideAlerter = (ref, callback) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            console.log('click', event.target, ref);
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback]);
}