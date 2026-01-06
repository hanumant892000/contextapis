import React, { useState } from 'react'
import balanceContext from './balanceContext'

function BalanceState({children}) {

    const [balance, setBalance] = useState(500)

    // const obj = {
    //     money:balance,
    //     setBalance
    // }
    

  return (
    <balanceContext.Provider value={{balance, setBalance}}>
      {children}
    </balanceContext.Provider>
  )
}

export default BalanceState


