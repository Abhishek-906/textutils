import React ,{useState} from 'react'

export default function TexthtmlForm(coc){

const [cuurr,updated] = useState("enter");

const handleupperclick=()=>{
  console.log("uppercase changed is done")
  let aa = cuurr.toUpperCase() ;
  updated(aa);
}
 const handleonchange=(e)=>{
  console.log('change is done')
  updated(e.target.value);
 }

 const handlelowerclick=()=>{
  let bb = cuurr.toLowerCase()  ;
  updated(bb);
 }
 

return (

    <>
     <div>
     <div className="mb-3">
       <label htmlFor="examplehtmlFormControlTextarea1" className="htmlForm-label">Example textarea</label>
       <textarea className="form-control" value={cuurr} id="examplehtmlFormControlTextarea1" onChange={handleonchange}  style={{backgroudColor:coc.dark==="light"?"grey":"white"}} rows="3"></textarea>
     </div>
     <button className='btn btn-primary mx-2 my-1'  onClick={handleupperclick} >Convert to Uppercase</button>
     <button className='btn btn-primary mx-2 my-1'  onClick={handlelowerclick} >Convert to Lowercase</button>
     </div>

     <div className='container my-3'>
         <h1 className="text" >Your text Summary</h1>
         <p className="text" > {cuurr.split(/\s+/).length} words , {cuurr.length} characters , Average time to read this - {cuurr.split(" ").length*(0.008)} min </p> 
     </div>


    </>
);

}







// import React ,{useState} from 'react'

// export default function TexthtmlForm(coc){

//   const [cuurr,updated] = useState("enter");

// const handleupperclick=()=>{
//   console.log("uppercase changed is done")
//   let aa = cuurr.toUpperCase() ;
//   updated(aa);
// }
//  const handleonchange=(e)=>{
//   console.log('change is done')
//   updated(e.target.value);
//  }

//  const handlelowerclick=()=>{
//   let bb = cuurr.toLowerCase()  ;
//   updated(bb);
//  }
 

// return (

//     <>
//      <div>
//      <div className="mb-3">
//        <label htmlFor="examplehtmlFormControlTextarea1" className="htmlForm-label">Example textarea</label>
//        <textarea className="form-control" value={cuurr} id="examplehtmlFormControlTextarea1" onChange={handleonchange}  style={{backgroudColor:coc.dark==="light"?"grey":"white"}} rows="3"></textarea>
//      </div>
//      <button className='btn btn-primary mx-2'  onClick={handleupperclick} >Convert to Uppercase</button>
//      <button className='btn btn-primary mx-2'  onClick={handlelowerclick} >Convert to Lowercase</button>
//      </div>

//      <div className='container my-3'>
//          <h1 className="text" >Your text Summary</h1>
//          <p className="text" > {cuurr.split(" ").length} words , {cuurr.length} characters , Average time to read this - {cuurr.split(" ").length*(0.008)} min </p> 
//      </div>
//     </>
// );

// }


 