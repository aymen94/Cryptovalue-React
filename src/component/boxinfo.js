import React,{Component} from 'react';
import axios from 'axios';
import CoinsConvert from '../data/data';
import Error from './error';
import '../style/bootstrap.min.css';
import '../style/style.css';


class BoxInfo extends Component{

  constructor(){
    super();
    this.state={
      dataC:{},
    }

  }
  componentDidMount(){
        let code=CoinsConvert[this.props.match.params.coin_url.toUpperCase()];
        axios.get(`https://www.cryptocompare.com/api/data/coinsnapshotfullbyid/?id=${code}`)
        .then(da=>this.setState({dataC:da.data})).catch(()=>{return(<Error/>);})
  }


 render(){
     let dataC=this.state.dataC;
     const check = dataC.Data && dataC.Data.General;
    if(!check)
      return <div className='loader'></div>;
     else
     return(
      <div className="container">
       <div className="panel panel-default text-center col-md-12">
        <div className="panel-heading" ><strong>{check && dataC.Data.General.H1Text}</strong></div>
        <div className="panel-body col-md-6 ">
          <img className="img-rounded" alt={dataC.Data && dataC.Data.General.name}  width="300" height="300" src={`https://www.cryptocompare.com${check && dataC.Data.General.ImageUrl}`}/>
        </div>
        <div className="col-md-6">
           <p><strong>Algorithm:</strong> {check && dataC.Data.General.Algorithm}</p>
           <p><strong>StartDate:</strong> {check && dataC.Data.General.StartDate}</p>
           <p><strong>Website:</strong> <div dangerouslySetInnerHTML={{ __html: check && dataC.Data.General.Website}}/></p>
           <p><strong>Description:</strong> <div dangerouslySetInnerHTML={{ __html: check && dataC.Data.General.Description}}/></p>
        </div>
       </div>
      </div>
);
  }
}

export default BoxInfo;