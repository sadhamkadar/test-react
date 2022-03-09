import React from "react"

const HOC =(WrappedComponent,number)=>
{
 class newComponent extends React.Component
 {
     constructor(props)
     {
super(props)
this.state ={count : 0}
     }

     Increment =()=>
     {
this.setState(prevState=>
    {
        return{count: prevState.count+number}
    })
     }
     render()
     {
         return<WrappedComponent 
         count={this.state.count} 
         increment={this.Increment} 
         {...this.props}></WrappedComponent>
             
         
     }
 }
 return newComponent
}
export default HOC