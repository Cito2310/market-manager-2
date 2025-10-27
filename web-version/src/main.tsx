import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import { ProductManagement } from './ProductManagement/Main'
import { CategoryManagement } from './CategoryManagement/Main'
import { POScreen } from './screen/pos/Main'
import { ModalAddProduct } from './ModalDesigns/ModalAddProduct'
import { ModalCashSession } from './ModalDesigns/ModalCashSession'
import { ModalCashOpen } from './ModalDesigns/ModalCashOpen'
import { ModalCashClosedPartOne } from './ModalDesigns/ModalCashClosedPartOne'
import { ModalCashClosedPartTwo } from './ModalDesigns/ModalCashClosedPartTwo'
import { ModalLastSells } from './ModalDesigns/ModalLastSells'
import { ModalCancelSell } from './ModalDesigns/ModalCancelSell'
import { ModalPay } from './ModalDesigns/ModalPay'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <ModalLastSells /> */}
    {/* <ModalAddProduct /> */}
    {/* <ModalCashSession /> */}
    {/* <ModalCashOpen /> */}
    {/* <ModalCashClosedPartOne /> */}
    {/* <ModalCashClosedPartTwo /> */}
    {/* <ModalCancelSell /> */}
    {/* <ModalPay /> */}



    <POScreen />
    {/* <ProductManagement /> */}
    {/* <CategoryManagement /> */}
  </React.StrictMode>,
)
