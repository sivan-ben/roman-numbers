import  { useState } from "react"

export default function useCustomForm(initialState) {

    const [data, setData] = useState(initialState)

    const handleChange = (event) => {
        const {  value } = event.target;
        setData( value )
    }


    return [data, handleChange];

}