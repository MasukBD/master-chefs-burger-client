import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Master - Chefs - Burger`
    }, [title])
};

export default useTitle;