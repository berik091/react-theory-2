import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

    // Создали объект и с массивами
    state={
        car:[
            {name: 'Ford', year:2001},
            {name: 'Audi', year:2016},
            {name: 'Bmw', year:2017}
        ],
        pageTitle: 'React components'
    }

    changeTitleHandle=()=>{
        const oldTitle=this.state.pageTitle
        const newTitle=oldTitle+'(changed)'

       this.setState({pageTitle:newTitle
       })
    }


  render (){
        const divStyle ={
            textAlign: 'center'
        }
const cars = this.state.car
        return (
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>
                <button onClick={this.changeTitleHandle}>Change title</button>

                <Car
                    name={cars[0].name}
                    year={cars[0].year} />
                <Car
                    name={cars[1].name}
                    year={cars[1].year} />
                <Car
                    name={cars[2].name}
                    year={cars[2].year} />
            </div>
        );
    }
}

export default App;
