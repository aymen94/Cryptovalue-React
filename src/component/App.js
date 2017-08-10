import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Box from './box';
import '../style/bootstrap.min.css';


class App extends Component{
 constructor()
 {
   super();
   this.state={
     data:[],
    }
}
 fetchData(){
   axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=100').then(
      d=>this.setState({data: d.data}));
 }
   
 componentDidMount() {
  this.fetchData();
  this.update = setInterval(()=>this.fetchData(),4000)
  }

  componentWillUnmount() {
    clearInterval(this.update);
  }

 render(){
    return (
        <div>
        {this.state.data.map(
          d=><Link to={`/coin/${d.symbol.toLowerCase()}`} key={d.id}>
              <Box  name={d.name} usd={d.price_usd}  data={d} percent={d.percent_change_1h} symbol={d.symbol}/>
             </Link>)
        }
        </div>
     );
   }


}

export default  App;