import React from "react"
import { loadStripe } from "@stripe/stripe-js"

export default function Home() {

  const redirectToCheckout = async (event) => {
    event.preventDefault()
    const stripe = await loadStripe("pk_test_51HnPUXAQYZGJ5PHzaPe5cxgbeIJaUZ6Q51w68yzipGhrQjsXNhcgnxrurTodMrGFKRUsaLuIqXuaoMO92R3jARZ300nBUHlrSw")
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1HnPf7AQYZGJ5PHzqt72ZeDf", quantity: 1 }],
      successUrl: `http://localhost:8000/payment-success`,
      cancelUrl: `http://localhost:8000/payment-error`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }

  return <button onClick={redirectToCheckout}>Buy laptop</button>
}
