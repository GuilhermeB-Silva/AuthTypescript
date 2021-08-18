import { GetServerSideProps } from 'next';
import { FormEvent, useState,useContext } from 'react'
import { AuthContext} from '../context/AuthContext';
import { parseCookies} from 'nookies'
import { withSSRGuest } from '../utils/wuthSSRGuest';


 

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
      <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
      <button>Entrar</button>

    </form>
  )
}


export const getServerSideProps = withSSRGuest( async (ctx) =>{

  return  { 
    props:{}
  }

})
