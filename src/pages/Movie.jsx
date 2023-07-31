import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom'


// let key = process.env.REACT_APP_apiKey;




const Movie = () => {
   
const param= useParams()
console.log(param.id);

  return (
    <div>

Details
    </div>
  )
}

export default Movie