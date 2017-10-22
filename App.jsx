import React from 'react'
import Hello from './Hello.jsx'

export default class App extends React.Component{
    render(){
        return(
        <div>
           <Hello name='Thanh'/>
           <Hello name='Hien'/>
        </div>
        )
    }
}