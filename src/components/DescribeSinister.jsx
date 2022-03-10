import React from 'react'
import HeaderBack from './HeaderBack'
/* import { 
  getStorage, 
  ref, 
  uploadString, 
  uploadBytes,
  getDownloadURL } from 'firebase/storage'; */


const DescribeSinister = () => {

  const [describe, setDescribe] = React.useState('')

 


  return (
    <div>
      < HeaderBack/>
    
      <div className="container mt-3">
  <h2>Describe el suceso</h2>
  <p> Escribe un breve relato de los hechos, empleando un máximo de 154 caracteres. </p>
  <form action="/action_page.php">
    <div className="mb-3 mt-3">
      <textarea className="form-control" rows="5" id="comment" name="text" value = {describe} onChange= {(e)=> setDescribe( e.target.value)}></textarea>
    </div>
    <button type="button" className="btn btn-primary" >Siguiente</button>
  </form>
</div>
    
    </div>
  )
}

export default DescribeSinister