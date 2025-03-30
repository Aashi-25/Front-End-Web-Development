import { Component } from "react";

//class based components are not used anymore...learning to just get an overview of react framework
//many old class based components are also getting converted to functional components now. 

class ClassBasedComponents extends Component {

    //state   
    state = {
        showText : false,
        changeColor : false,
        count : 0,
        changeCountStyle : false
    };  //Method-1

    // constructor (props){  
    //     super(props);
    //     this.state = {
    //         showText : false
    //     };
    // }  //Method-2

    handleClick = () => {
        console.log("button clicked!");
        //this is not recommended for toggling
        //this.state.showText = !this.state.showText; 

        const{showText , changeColor} = this.state; //through destructuring of objects...a simpler and more organised approach
        
        this.setState({
            showText : !showText,
            changeColor : !changeColor 
        })
    }
    
    //LIFE CYCLE METHODS IN CLASS COMPONENTS
    //componentDidMount
    //componentDidUpdate
    //componentWillUnmount

    //performs operations on page load - real world application:- calling some api or doing some animation effect on page load
    componentDidMount(){
        this.setState ({
            showText : !this.state.showText,
            changeColor : !this.state.changeColor
        });
    }

    componentDidUpdate(prevProps , prevState) {
        console.log(prevState , this.state);

        if(prevState && prevState.count !== this.state.count && this.state.count === 10){
            this.setState({
                ...this.state,
                changeCountStyle : true,
            })
        }
    }

    componentWillUnmount(){
        console.log('component is getting unmounted!');
    }

    handleCount = () => {
        this.setState({
            ...this.state ,
            count : this.state.count + 1
        })
    }

    render(){
        // console.log(this.state);

        const {showText , changeColor , count , changeCountStyle} = this.state ;
        console.log(changeCountStyle) ;

        return <div>
            
            {
            showText ? 
            <h3 style = {{ color : changeColor ? "grey" : "blue"}}> These are my class based components </h3> : null 
            } 

            <button onClick = {this.handleClick}>Toggle Text</button>

            <button onClick = {this.handleCount} style = {{marginLeft : "20px"}}>Increase count value</button>

            <h3 style = {{color : changeCountStyle ? 'blue' : 'white' , fontSize : changeCountStyle ? '30px' : '15px' }}>Count is {count}</h3>

        </div>
    }
}    

export default ClassBasedComponents