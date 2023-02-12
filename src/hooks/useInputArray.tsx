import React, {useCallback} from "react";

export const useInputArray = () => {
    const [text, setText] = React.useState('')
    const [array, setArray] = React.useState([])
    const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 10) {
            return
        }
        setText(e.target.value.trim())
    }

    const handleAdd = useCallback(() => {
            if (array.some((item) => item === text)) {
                alert('同じ値があります')
                return array;
            }

            // @ts-ignore
            setArray((array) => [...array, text])
            setText('')
        }
        , [array, text])

    return {text, array, handleChanged, handleAdd}
}