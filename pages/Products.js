import Layout from '@/components/Layout'
import Link from 'next/link'
import React from 'react'

export default function Products() {
  return (
    <Layout>
       <Link href={'/Products/new'} className='bg-blue-800 text-white px-3 py-1 rounded-md font-medium'>Add new Products</Link>
    </Layout>
  )
}
