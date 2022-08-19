import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services';
import logo from '../public/logo-1000px.png';
import Image from 'next/image';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);

  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className="border-b w-full inline-block border-emerald-700 py-8">
        <div className='block md:float-left md:hidden'>
        <Link href="/">
            <Image 
              src={logo}
              alt="BJ Minecraft"
              // height={75}
              // width={350}
              className='cursor-pointer block'
              />
          </Link>
          </div>
          <div className='hidden md:float-left md:inline-block'>
        <Link href="/">
            <Image 
              src={logo}
              height={50}
              width={250}
              alt="BJ Minecraft"
              // height={75}
              // width={350}
              className='cursor-pointer block'
              />
          </Link>
          </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => 
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
              {category.name}
            </span>
          </Link>)}
        </div>
      </div>
    </div>
  )
}

export default Header