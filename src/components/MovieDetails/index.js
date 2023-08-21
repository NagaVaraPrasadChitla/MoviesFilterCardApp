import {Component} from "react"

//import CastDetails from "../CastDetails"

import Header from "../Header"
import "./index.css"



class MovieDetails extends Component{
    state={MovieDetails:"",CastDetails:""}
    

    componentDidMount(){
        this.getMovieDetails()
        this.getCastDetails()
    }

    getMovieDetails = async ()=>{
        const {match} = this.props
        const {params} = match
        const {id} = params
        //console.log(id)
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
        const options = {
            method : "GET"
        }
       const response = await fetch(url,options)
       const data = await response.json()
       //console.log(data)
       this.setState({MovieDetails: data})


    }

    getCastDetails= async()=>{
        const {match} = this.props
        const {params} = match
        const {id} = params
        //console.log(id)
        const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`

        const options = {
            method : "GET"
        }
       const response = await fetch(url,options)
       const data = await response.json()
       //console.log(data)
       this.setState({CastDetails: data.cast})

    }

    
    render(){

        const {MovieDetails,CastDetails} = this.state
        
      
        //console.log(MovieDetails)
        console.log(CastDetails)

        return(
            <>
         <Header/>
         <div className="HeaderContainer">
            <div className="section">
                <div className="page">
                    <div className="innerSection">
                        <img src={`https://image.tmdb.org/t/p/w500/${MovieDetails.poster_path}`} className="Image" alt="logo"/>
                        <div className="form">
                            <h1 className="head">{MovieDetails.original_title}</h1>
                            <p className="para">{MovieDetails.vote_average}</p>
                            <button className="btn">{MovieDetails.runtime} sec</button>
                            <p className="para">ReleaseDate:{MovieDetails.release_date}</p>
                        </div>
                    </div>
                        <div className="overview">
                            <h1 className="head">Overview</h1>
                            <p className="para">{MovieDetails.overview}</p>
                    </div>
                    
                </div>
                
                <img src={`https://image.tmdb.org/t/p/w500/${MovieDetails.backdrop_path}`}  className="image1" alt="logo"/>
            </div>
            
            {/* //<CastDetails /> */}
            <h1>Cast</h1>
        </div>
         </>

        )
    }
}
export default MovieDetails
