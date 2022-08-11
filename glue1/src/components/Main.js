import React, { Component } from 'react';
import Image from './prom.jpg' //do this if putting the local image directly in the source doesn't work


export default class Main extends Component {
    render(){
        return (
          <>
          <img src={Image} width='345' height='420' alt='image of me' />
          <p>I am currently in Code Crew Code School. I have a dog named Belle, a hampster named Rosalie, and 3 red eye tetras. 
          I have too many interests to list</p>
          <a href='https://github.com/pollan-lindsey' target='_blank'>My Github page</a>
          <br></br>
          <iframe width={420} height={345} src="https://www.youtube.com/embed/koUpqQRkJis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </>
        )
    }
    }