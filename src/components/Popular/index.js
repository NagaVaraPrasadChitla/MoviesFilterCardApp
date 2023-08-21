import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import Appcontent from '../../ReactConent/Appcontent'

import './index.css'

export default class Popular extends Component {
    state = {apiStatus: 'initial', allMovies: []}

    componentDidMount(){
        this.getAllMovies()
        
    }

    getAllMovies = async () => {
        const url='https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1'
        const options = {
            method : 'GET'
        }  
        
        const response = await fetch(url, options)

        const data = await response.json()
        //console.log(data)
        this.setState({allMovies: data.results})
     }

    

    render(){
        const {allMovies} = this.state
        return(
            <Appcontent.Consumer >
                {value =>{
                    const { FilterData } = value
                    console.log(FilterData)

                    return(
                
                <div className='poopular-container'>
                    <Header />
                    
                    <div className='popular-movies-section'>
                        <ul className='container'>{ allMovies.length>0 ? FilterData.length<1 ? (allMovies.map(item=>(
                        
                                <li key={item.id}>
                                    <Link to={`/movies/${item.id}`}>
                                        <div className='container1'>
                                            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className='image' alt='none' />
                                            <h1 className='heading'>{item.title}</h1>
                                            <p className='rating'>{item.vote_average}</p>
                                        </div>
                                    </Link>
                                </li>
                    
                        ))):
                            (FilterData.map(item=>(
                        
                                <li key={item.id}>
                                    <Link to={`/movies/${item.id}`}>
                                        <div className='container1'>
                                            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className='image' alt='none' />
                                            <h1 className='heading'>{item.title}</h1>
                                            <p className='rating'>{item.vote_average}</p>
                                        </div>
                                    </Link>
                                </li>
                    
                        )  
                        )) : null }</ul>
                    </div>
                
                </div>)
    }}</Appcontent.Consumer>
        )
    }
    
}