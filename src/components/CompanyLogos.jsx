import React from 'react'
import { companyLogos } from '../constant'

const CompanyLogos = ({className}) => {
  return (
    <div className={className}>
        <h5 className='tagline mb-6 text-center text-n-1/50'>helping people create beautiful content at</h5>
        <ul className='flex'>
            {companyLogos.map((logo, id)=>(
                <li key={id} className='flex items-center justify-center flex-1 h-[8.5rem]'><img src={logo} width={134} height={28} alt='logo'/></li>
            ))}
        </ul>
    </div>
  )
}

export default CompanyLogos