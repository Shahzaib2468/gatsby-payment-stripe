import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { graphql, useStaticQuery } from "gatsby"

export default function Home() {

  const redirectToCheckout = async (event, pID) => {
    event.preventDefault()
    const stripe = await loadStripe("pk_test_51HnPUXAQYZGJ5PHzaPe5cxgbeIJaUZ6Q51w68yzipGhrQjsXNhcgnxrurTodMrGFKRUsaLuIqXuaoMO92R3jARZ300nBUHlrSw")
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: pID, quantity: 1 }],
      successUrl: `http://localhost:8000/payment-success`,
      cancelUrl: `http://localhost:8000/payment-error`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }

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
          }
        }
      }
    }
    
      
    `)    

    console.log(data)

  return <>

  <div>
    <h1>My Products</h1>
  </div>

  {
    data.allStripePrice.edges.map(({node})=>{
     return <div key={node.id}>
        <p> {node.product.name} </p>
        <p> {node.product.description} </p>
        <img height="200px" src={node.product.images[0]} /> <br />

        <button onClick={(e)=>redirectToCheckout(e,node.id)}>Buy {node.product.name} </button>

      </div>
    })
  }
    </>
}
