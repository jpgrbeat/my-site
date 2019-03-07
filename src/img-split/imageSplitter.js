import React,{Component} from 'react'
import bl from '../assets/bottom-left-me.png'
import br from '../assets/bottom-right-me.png'
import tl from '../assets/left-top-me.png'
import tr from '../assets/right-top-me.png'


class ImageSplitter extends Component{
  componentDidMount(){
    console.log('yes')
  }
    render(){
        return(
            <div className='is'>
              <img
              className='tl' src={tr}/>
              <img
              className='tr' src={tl}/>
              <img
              className='bl' src={br}/>
              <img
              className='br' src={bl}/>
            </div>
        )
    }
}
export default ImageSplitter
