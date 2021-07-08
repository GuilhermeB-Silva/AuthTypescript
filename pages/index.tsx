
import { FormEvent, useState,useContext } from 'react'
import { AuthContext} from '../context/AuthContext';


 

export default function Home() {
  const {signIn } =  useContext(AuthContext)
  const [ email,setEmail] = useState("")
  const [ password,setPassword] = useState("")
  

  
  async function handleSubmit(e:FormEvent){
    e.preventDefault()
    const data = {email,password}

    await signIn(data)
  }


  return (
    <form action="" onSubmit={handleSubmit}>

      <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
      <input type="password"  value={password} onChange={e=>setPassword(e.target.value)}/>
      <button>Entrar</button>

    </form>
  )
}
