import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    // const [count, setCount] = useState(0);
    //
    //   const increment = () => {
    //       setCount(count+1);
    //       // setCount((count) => count +1);
    //       // setCount((count) => count +1);
    //   }
    //   const desincrement = () => {
    //       setCount(count-1);
    //   }
    // return (
    //   <>
    //     <p>compteur : {count}</p>
    //       <button onClick={desincrement}>-</button>
    //       <button onClick={increment}>+</button>
    //   </>
    // )
    ////////////////////////////CHAMPS CONTROLE///////////////////////////////////////
    //   const [firstname,setFirstname] = useState('John Doe');
    //   const handleChange = (e)=>{
    //       setFirstname(e.target.value)
    //   }
    //   const reset = () =>{
    //       setFirstname('')
    //   }
    //   return <form>
    //       <input type="text" name="firstname" value={firstname} onChange={handleChange} />
    //       <button onClick={reset}>Reset</button>
    //   </form>

    ////////////////////////////CHAMPS NON CONTROLE///////////////////////////////////////
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(new FormData(e.target))
    // }
    // const [checked,setChecked] = useState(false);
    // const toggleCheck = ()=>{
    //     setChecked(!checked)
    // }
    //   return <form onSubmit={handleSubmit}>
    //       <input type="text" name="firstname" defaultValue="test"/>
    //       <input type="checkbox" checked={checked} onChange={toggleCheck}/>
    //       <button disabled={!checked}>Submit</button>
    //   </form>
    // // champ controlé si on veut modifier des trucs en temps reel ou controler les values ecrites en temps direct
    //////////////////////// flux de data////////////////
    // const [isTermAccepted,setIsTermAccepted] = useState(false);
    // return <form>
    //     <CGUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted}/>
    //     <button disabled={!isTermAccepted}>Submit</button>
    //
    // </form>




}
//////////////////////// flux de data////////////////
// function CGUCheckbox({checked,onCheck}) {
//     return <div>
//         <label>
//         {/*    quand je coche la case, je passe une valeur true ou false, ensuite le oncheck comme il est relier au parent, cela change la value dans le parents*/}
//         {/*    reverse dataflow*/}
//         <input type="checkbox" checked={checked} onChange={(e)=>onCheck(e.target.checked)}/>
//         Accepter les CGU
//         </label>
//     </div>
// }

export default App
