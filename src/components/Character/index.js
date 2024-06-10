import {Link} from 'react-router-dom'
import CharacterDetails from '../CharacterDetails'
import "./index.css"


const Character = props => {
    const {resultData} = props
    const {name,birthYear,created,edited,eyeColor,skinColor,hairColor,height,gender} = resultData
    return(
        <div className='card-container'>
            <img className='avatar-image' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar"/>
            <h1 className='name'>{name}</h1>
            <div>
            <p><b>Gender</b>: {gender}</p>
            <p><b>Birth Year</b>: {birthYear}</p>
            <p><b>Skin Color</b>: {skinColor}</p>
            <p><b>Eye Color</b>: {eyeColor}</p>
            <p><b>Hair Color</b>: {hairColor}</p>
            <p><b>Height</b>: {height}</p>
            </div>
        </div>
    )
}

export default Character