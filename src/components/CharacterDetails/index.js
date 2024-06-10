import { useEffect, useState } from "react";

const CharacterDetails = props => {
    const {url} = props
    const [characterData, setCharacterData] = useState([])
    useEffect(() => {
        const getApiData = async() => {
            const response = await fetch(url)
            const data = await response.json()
            const fetchedCharacterData = {
                name: data.name,
            }
            setCharacterData(fetchedCharacterData)
        }
        getApiData()
    },[])
    return(
        <div>
            <h1>Syed</h1>
        </div>
    )
}

export default CharacterDetails