import React from 'react'
import { Table } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class Song{
    constructor(a,b,c){
        this.id = a
        this.name = b

    }
}


class SongPage extends React.Component{
    state={
        data : [new Song(11, "ColdPLay"),
                new Song(12, "PlanetShakers"),
                new Song(13, "Artist"),
                new Song(14, "ABC"),
                new Song(15, "WOW"),
                new Song(16, "asdav"),
                new Song(17, "afgfdgd"),
                new Song(18, "Hillsong"),
                new Song(19, "rnyt"),
                new Song(21, "alliance"),
                new Song(31, "pes20192"),
                new Song(32, "idjfsidf"),
                new Song(33, "sdgisjdigjs")],

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