import Nav from "@/components/Nav"
import { useSession, signIn, signOut } from "next-auth/react"
export default function Layout({children}) {
  const { data: session } = useSession()
  if(!session){
    return (
      <div className="bg-indigo-600 h-screen flex items-center justify-center">
      <button className="bg-indigo-800 px-3 py-1 capitalize rounded-full text-2xl ring-1 hover:scale-110 duration-200" onClick={()=>signIn('google')}>log in to google</button>
    </div>
    )
  }
  return (
    <div className="bg-blue-900 min-h-screen flex">
    <Nav></Nav>
   <div className="bg-white text-black flex-grow m-4 rounded-lg p-4">{children}</div>
   <button className="bg-indigo-800 px-3 py-1 capitalize rounded-full text-2xl ring-1 hover:scale-110 duration-200" onClick={()=>signOut()}>log in to google</button>
    </div>
  )
}
