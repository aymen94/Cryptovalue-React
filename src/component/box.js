import React,{Component} from 'react';
import '../style/bootstrap.min.css';
 class Box extends Component{
    percent(){
    if(this.props.percent<0)
      return <font color="red">{this.props.percent}%</font>;
      else
        return <font color="green">{this.props.percent}%</font>;
      }

    render(){
  return(
      <div>
       <div className="panel panel-default col-md-2 text-center" >
        <div className="panel-heading" >{this.props.name}</div>
        <div className="panel-body text-center ">
        <h1>{this.percent()}</h1>
        <div>${this.props.usd}</div>
       </div>
      </div>
     </div>
  );
    }
}


export default Box;