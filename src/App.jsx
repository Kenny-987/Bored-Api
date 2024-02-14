import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [category,setCategory]=useState("Education")
const [showCategory,setShowCategory]=useState(false)
const [activity,setActivity]=useState({})
const [connErr,setConnErr]=useState(false)

const fetchActivity= async()=>{
  try {
    const response = await fetch(`http://www.boredapi.com/api/activity?type=${category.toLowerCase()}`)
    const data = await response.json()
    if (response.ok){
      setActivity(data)
      setConnErr(false)
    }else{
      console.log('fetch error');
    }
  } catch (error) {
    console.error(error);
    setConnErr(true)
  }

}

  return (

<div className='container'>
<p className='heading'>Don't Know what to do, Click the <span>get activity</span> button</p>
<div className="category">
  <p><span><button onClick={()=>{
    setShowCategory(!showCategory)
  }}>Click to show Categories</button></span> <span className='selected'>{category}</span></p>
  {showCategory && <div className="cat">
  <button onClick={(e)=>{
setCategory(e.currentTarget.innerHTML)
setShowCategory(!showCategory)
  }}>Education</button>
  <button onClick={(e)=>{
setCategory(e.currentTarget.innerHTML)
setShowCategory(!showCategory)
  }}>Recreational</button>
  <button onClick={(e)=>{
setCategory(e.currentTarget.innerHTML)
setShowCategory(!showCategory)
  }}>Social</button>
  <button onClick={(e)=>{
setCategory(e.currentTarget.innerHTML)
setShowCategory(!showCategory)
  }}>Diy</button>
  <button onClick={(e)=>{
setCategory(e.currentTarget.innerHTML)
setShowCategory(!showCategory)
  }}>Charity</button>
  <button onClick={(e)=>{
setCategory(e.currentTarget.innerHTML)
setShowCategory(!showCategory)
  }}>Cooking</button>
  <button onClick={(e)=>{
setCategory(e.currentTarget.innerHTML)
setShowCategory(!showCategory)
  }}>Relaxation</button>
  <button onClick={(e)=>{
setCategory(e.currentTarget.innerHTML)
setShowCategory(!showCategory)
  }}>Music</button>
  <button onClick={(e)=>{
setCategory(e.currentTarget.innerHTML)
setShowCategory(!showCategory)
  }}>Busywork</button>
  </div> }
  
<div className="activity">
  <p className='p'>Activity</p>
  {Object.keys(activity).length===0?<p className='a'>No activity click the button</p>:<p className='a'>{activity.activity}</p> }
</div>

</div>
<button className="get" onClick={()=>{
  fetchActivity()
}}>Get Activity</button>
{connErr && <p className='error'>Could'nt Fetch Activity, check internet connection and try again</p>}
</div>  
  )
}

export default App
