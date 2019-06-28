import React from 'react'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'

export default class SongButton extends React.Component{
    render(){
        return (
            <div style={{height : "100%"}}> 
            <Link to='/components/SongPage'>
                <input type="button" value="Song List" style={{height : "100%", fontSize : "40px"}} className="btn btn-block btn-outline-primary"/>
            </Link>
            </div>
        )
    }
}