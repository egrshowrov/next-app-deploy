import Layout from '@/components/Layout'
import axios from 'axios'
import React, { useState } from 'react'
export default function NewProducts() {
    const [title,setTitle] = useState()
    const [description,setDescription] = useState()
    const [price,setPrice] = useState()
    async function createProducts(){
      const data = {title,description,price}
      await axios.post('/api/products',data)
    }
  return (
    <Layout>
      <form onSubmit={createProducts}>
    <h1>new product</h1>
    <label htmlFor="">Product Name</label>
    <input type="text" value={title}
     onChange={ev => setTitle(ev.target.value)}
      placeholder='New Products' />
    <label htmlFor="">Description</label>
    <textarea value={description} 
    onChange={ev => setDescription(ev.target.value)} 
    placeholder='Description'></textarea>
    <label htmlFor="">Price(in USD)</label>
    <input value={price} type="number"
    onChange={ev => setPrice(ev.target.value)} 
     placeholder='Price'/>
    <button className='btn-primary' type='submit'>Save</button>
      </form>
    </Layout>
  )
}
