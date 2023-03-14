import "../styles/Carts.css"

const Cart = ({cart,setCart,handleChange}) => {
    const handleRemove=(id)=>{
        const arr=cart.filter((item)=>item.id!==id);
        setCart(arr)
        console.log(arr)
    }
    
  return (
    <article>
        {
            cart?.map((item)=>(
                <div className='cart-box' key={item.id}>
                 <div className='cart-img'>
                    <img src={item.image}/>
                    <p>{item.name}</p>
                    </div>  
                    <div>
                        <button onClick={()=>handleChange(item,+1)}>Add Item</button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item,-1)}>Decrease Item</button>
                    </div>
                    <div className="remove">
                        <span>{item.price}</span>  
                        <button onClick={()=>handleRemove(item.id)}>Remove Item</button>  
                    </div> 
                </div>
            ))

        }   
    </article>
  )
}

export default Cart
