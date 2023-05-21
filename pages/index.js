import Layout from "@/components/Layout";
import { useSession } from 'next-auth/react'
export default function index() {
  const {data:session} = useSession()
  return (
    <Layout>
      <div className="text-blue-800 flex justify-between">
        <h1> Hello, 
          <b>
          {session?.user?.name}
          </b>
        </h1>
        <div className="flex items-center bg-gray-300 gap-1 rounded-full pr-2 text-black">
          <img src={session?.user?.image} className="w-8 h-8 rounded-full ring-2 " />
          <span>{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  )
}
