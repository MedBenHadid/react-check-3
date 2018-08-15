import React, {Component} from "react";

class Member extends React.Component{
	render(){
		return(
			<div className="box">
				<img src={this.props.image} width="100%"/>
     			<h2>{this.props.name}</h2>
    			<p>{this.props.role}</p>
     		</div>
		)
	}
}

export default Member;