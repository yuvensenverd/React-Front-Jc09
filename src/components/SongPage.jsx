import React from 'react'
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';



class SongPage extends React.Component{
    state={
        data : [{id: 11, name: "ColdPLay"},
                {id: 12, name: "PlanetShakers"},
                {id: 13, name: "Artist"},
                {id: 14, name: "ABC"},
                {id: 15, name: "WOW"},
                {id: 16, name: "asdav"},
                {id: 17, name: "afgfdgd"},
                {id: 18, name: "Hillsong"},
                {id: 19, name: "rnyt"},
                {id: 21, name: "alliance"},
                {id: 31, name: "pes2019"},
                {id: 32, name: "idjfsidf"},
                {id: 33, name: "sdgisjdigjs"}],

        filtertext : ""
        
    }

    filterUpdate = (value)=> {
        this.setState({
          filtertext: value
        });
      }

    printSongData = () => {
        // Catch Data from API 
        //BLM ADA


        // Print
        var list = this.state.data
        .filter((val)=>{
            return (
                val.name.toLowerCase().indexOf(this.state.filtertext.toLowerCase()) !== -1
            )
        })
        
        .map((val)=>{
            return (
                <Row>
                        <Col xs="3" className="border border-primary">{val.id}</Col>
                        <Col xs="9" className="border border-primary">{val.name}</Col>
                </Row>
            )
        })
        
        return list 

    }
    

    render(){
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                        <input type="text" placeholder="type to filter" ref="filter" className="form-control text-center" onChange={() => {this.filterUpdate(this.refs.filter.value)}}/>
                        </tr>
                    </thead>
                    <tbody>
                      
                        {this.printSongData()}
                        
                    </tbody>
                </Table>
                
                
                
            </div>
        )
    }
}

export default SongPage;