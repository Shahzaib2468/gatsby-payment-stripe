import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Home() {

    const data = useStaticQuery(graphql `
    query MyQuery {
      allStripePrice {
        edges {
          node {
            product {
              id
              description
              name
              images
            }
            id
            unit_amount
          }
        }
      }
    }
    
      
    `)    

    console.log(data)

  return <>
    <button className='snipcart-checkout'>Checkout</button>
    <button className='snipcart-items-count'>Item</button>
    <button className='snipcart-total-price'>Total Price</button>

  <div>
    <h1>My Products</h1>
  </div>

  {
    data.allStripePrice.edges.map(({node})=>{
     return <div key={node.id}>
        <p> {node.product.name} </p>
        <p> {node.product.description} </p>
        <img height="200px" src={node.product.images[0]} /> <br />

        {/* <button onClick={(e)=>redirectToCheckout(e,node.id)}>Buy {node.product.name} </button> */}

        <button className="snipcart-add-item"
  data-item-id={node.id}
  data-item-price={node.unit_amount}
  data-item-url="https://stupefied-babbage-3e7dc8.netlify.app/"
  data-item-description={node.product.description}
  data-item-image={node.product.images[0]}
  data-item-name= {node.product.name} >
  Add to cart
</button>

      </div>
    })
  }
    </>
}