import React from 'react'
import daily from './daily.png'

const Logo = ()=> {
        return (
            <div>
                <img src={daily} alt="DailyBugle" style={{height:'50px', background:'none', display: 'inline'}}/>
            </div>
        )
}

export default Logo