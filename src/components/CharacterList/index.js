import {Component} from 'react'
import './index.css'
import Character from '../Character'
import {Link} from 'react-router-dom'

class CharacterList extends Component {
    state = {resultArray:[], apiUrl :"https://swapi.dev/api/people", nextPage: "", previousPage: '' }

    onChangingPage = () => {
        this.setState(prevState => ({apiUrl: prevState.nextPage}), this.callingApi)
    }

    toPreviousPage = () => {
        this.setState(prevState => ({apiUrl: prevState.previousPage}), this.callingApi)
    }

    componentDidMount() {
        this.callingApi()
    }

    callingApi = async () => {
        const {apiUrl} = this.state
        const response = await fetch(apiUrl)
        const data = await response.json()
        if (response.ok === true){
            const fetchedData = data.results.map(eachResult => (
                {
                    name: eachResult.name,
                    url: eachResult.url,
                    birthYear: eachResult.birth_year,
                    created:eachResult.created,
                    edited:eachResult.edited,
                    eyeColor:eachResult.eye_color,
                    skinColor:eachResult.skin_color,
                    hairColor:eachResult.hair_color,
                    height:eachResult.height,
                    gender:eachResult.gender,
                }
            ))
            this.setState({resultArray: fetchedData})
            this.setState({nextPage: data.next})
            this.setState({previousPage: data.previous})
        }
        
    }
    

    modalRendering = () => {
        const {resultArray} = this.state
        return(
            <div className='character-container'>
                {resultArray.map((eachData,i) => (
                    <Character resultData = {eachData} id={i}/>
                ))}
            </div>
        )
    }

    render() {
        return(
            <div className='list-container'>
            <h1 className='main-heading'>PEOPLE LIST</h1>
            <div className='next-previous'>
            <button className='next-previous-buttons' onClick={this.toPreviousPage}>Previous</button>
            <button className='next-previous-buttons' onClick={this.onChangingPage}>Next</button>
            </div>
            {this.modalRendering()}
            <Link to="/login"><button>Logout</button></Link>
            </div>
        )
    }
}

export default CharacterList