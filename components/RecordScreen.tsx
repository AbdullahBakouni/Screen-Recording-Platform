import { ICONS } from '@/constants'
import Image from 'next/image'
import React from 'react'

const RecordScreen = () => {
  return (
    <div className="record">
      <button  className="primary-btn">
        <Image src={ICONS.record} alt="record" width={16} height={16} />
        <span className="truncate">Record a video</span>
      </button>
    </div>
  )
}

export default RecordScreen
