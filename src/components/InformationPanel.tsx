import React from 'react'

interface InformationPanelProps {
    content: string;
}

const InformationPanel: React.FC<InformationPanelProps> = ({ content }) => {
  return (
    <div className='bg-[#FAEDEF] w-full p-5 relative before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-[#C6485D]'>
        <h5 className='font-sintony font-bold text-xl leading-[1.875rem] text-[#1A1A1A]'>{ content }</h5>
    </div>
  )
}

export default InformationPanel