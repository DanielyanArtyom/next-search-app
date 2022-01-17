import React from 'react'
import Image from 'next/image'

const GithubElement = React.memo(({ img, fullName, login, link }) => {
    return (
        <li className='element'>
            <div className='element__img'>
                <Image src={img} alt={fullName} width={80} height={80} />
            </div>
            <div className='element__texts'>
                <h4 className='element__texts-heading'>{fullName}</h4>
                <p className='element__texts-paragraph'>{login}</p>
            </div>
            <a href={link} className='element__btn' target='_blank'>Github page</a>
        </li>
    )
})

export default GithubElement
