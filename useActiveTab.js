import { useState } from "react";
import { useEventListener } from './useEventListener'

export function useOnFocus(handleEventActive, handleEventInActive) {
    const [windowFocus, setWindowFocus] = useState(false);
    useEventListener("visibilitychange", handleFocus)

    function handleFocus(event) {
        if (event.target.visibilityState == "visible") {
            setWindowFocus(true)
            handleEventActive()
        } else {
            setWindowFocus(false)
            handleEventInActive()
        }
    }
    return windowFocus;
}
