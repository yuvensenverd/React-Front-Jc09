import React from 'react'
import SongButton from './components/SongButton'

class Home extends React.Component{
    render(){
    return(
        <div>
            <div className="column border border-primary" style={{height : "100vh"}}>
        
                <div className="row-md-6 border border-warning" style={{height : "50vh"}} >
            
                <SongButton></SongButton>

                </div>
                <div className="row-md-6 border border-warning" style={{height : "100vh"}} >

                Menu 2 

                </div>
            </div>
        </div>
    )
  }
}

export default Home;