import React, { useState, useEffect } from "react";


const ProductDisplay = () => (
  <section style={{width: "175px", marginLeft:"75px", paddingTop:"15px"}}>
    <div className="product">
      <img
        src="/images/donate.png"
        alt="donatations"
        style={{margin:"auto"}}
      />
      <div className="description" style={{margin:"auto"}}>
        <h3 style={{textAlign: "center"}}>Buy your Developers<br/> a Beer!</h3>
      </div>
    </div>
    <form action="https://donatetrader-6968094a5822.herokuapp.com/create-checkout-session" method="POST">
      <button type="submit" style={{textAlign: "center", marginLeft:"50px", width: "75px"}}>
        Donate!
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Contributions() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}