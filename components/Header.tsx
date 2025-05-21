import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RecordScreen from './RecordScreen'

const Header = ({subHeader,title,userImg}:SharedHeaderProps) => {
  return (
   <header className='header'>
    <section className='header-container'>
        <div className='details'>
            {userImg && (
                <Image 
                src="/assets/images/dummy.jpg"
                alt="User Image"
                width={66}
                height={66}
                />
            )}
            <article>
                <h1>{subHeader}</h1>
                <p>{title}</p>
            </article>
        </div>
        <aside>
          <Link href="/upload">
            <Image
              src="/assets/icons/upload.svg"
              alt="upload"
              width={16}
              height={16}
            />
            <span>Upload a video</span>
          </Link>
          <RecordScreen />
        </aside>
    </section>
     <section className="search-filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for videos, tags, folders..."
          />
          <Image
            src="/assets/icons/search.svg"
            alt="search"
            width={16}
            height={16}
          />
        </div>
       {`"DropDown list"`}
      </section>
   </header>
  )
}

export default Header
