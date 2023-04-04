import React from 'react'
import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../app/CartSlice';

const CartCount = ({ onCartToggle, totalQTY}) => {

    const dispatch = useDispatch();
    
  return (
   <>
      <div className='bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full'>
        <div className='flex items-center gap-3'>
            <div className='grid items-center cursor-pointer' >
                <ChevronDoubleLeftIcon className='w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]' />
            </div>
            <div className='grid items-center'>
                <h1 className='text-base font-medium text-slate-900'>Your Cart <span className='bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-sm'>{`${totalQTY} Items`}</span></h1>
            </div>
        </div>
        <div className='flex items-center gap-2'>
            <button onClick={() => dispatch(clearCart())} className="button-theme bg-slate-900 text-slate-200">clear cart</button>
            <button onClick={onCartToggle} type='button' className='rounded bg-theme-cart active:scale-90 p-0.5'>
                <XMarkIcon className='w-5 h-5 text-white stroke-[2]' />
            </button>
        </div>
      </div>
   </>
  )
}

export default CartCount