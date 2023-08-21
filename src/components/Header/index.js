import {Component} from "react"

import Appcontent from "../../ReactConent/Appcontent"

import './index.css'


class Header extends Component{
   state={Search:"", FilterData: ""}

  Search= event =>{
    this.setState({Search: event.target.value})
    //console.log(event.target.value)


   }


      
      Button= async () => {
         const {Search } = this.state
         const url=`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${Search}&page=1`
         const options = {
             method : 'GET'
         }  
         
         const response = await fetch(url, options)
 
         const data = await response.json()
         console.log(data)
         this.setState({FilterData: data.results})
      }

   

   render(){
      const {Search}=this.state
      console.log(Search)

      return(
   <Appcontent.Provider value={{
      Search,
      FilterData
    }}>
   
    <nav className='header'>
        {/* <img sr
        c="" alt='' />
         */}
         <h1 className='logo'>MovieHD</h1>

         <ul className='nav-items-list'>
            <li className='nav-item'>Popular</li>
            <li className='nav-item'>Top Rated</li>
            <li  className='nav-item'>UpComing</li>
         </ul>

         <div className='search-container'>
            <input type="search" className='search-input' placeholder='Movie Name' value={Search} onChange={this.Search}/>
            <div>
                  <button className='button' type="button" onClick={this.Button} >Search</button>
            </div>
         </div>

    </nav>
    </Appcontent.Provider>
)}}


export default Header