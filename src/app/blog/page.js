"use client"
import React from 'react';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useEffect, useState } from 'react';


export default function blog() {
const [posts, setPosts] = useState([]);
useEffect(() =>{
fetch(process.env.NEXT_PUBLIC_API_URL+'/posts')
.then((res) => res.json())
.then(res => setPosts(res))
},[]);
return ( 
<div>
 <Header />
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-8">
{posts.map((posts) => ( 
<div className="p-8 bg-gray-100 rounded-md"> <h4 className='mb-5 font-bold'> {posts.title}</h4>
<p className='mb-5'>{posts.description}</p>

</div>
))}

</div>


<Footer />
</div>

  );
};
