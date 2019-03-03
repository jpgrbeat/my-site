import React,{Component} from 'react'
import BL from '../assets/bottom-left-me.png'
import BR from '../assets/bottom-right-me.png'
import TR from '../assets/top-right-me.png'
import TL from '../assets/top-left-me.png'


class imageSplitter extends Component{
    render(){
        return(
            <div>
            <img src={TR}/>
            <img src={TL}/>
            <img src={BR}/>
            <img src={BL}/>
            </div>
        )
    }
}
export default imageSplitter