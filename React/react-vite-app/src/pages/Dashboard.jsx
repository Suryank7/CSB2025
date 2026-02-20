// import React, { useEffect, useState } from "react";

// function Dashboard() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const serverresponse = await fetch("https://fakestoreapi.com/products");
//       const jsonResponse = await serverresponse.json();
//       console.log(jsonResponse);
//       setData(jsonResponse);
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {data.length === 0 ? (
//         <h2>Data could not fetch</h2>
//       ) : (
//         <div>
//           {data.map((ele) => (
//             <div style={{ height: "300px", width: "300px" }}>
//               <img src={ele.image} height={100} width={100} />
//               <h3>{ele.title}</h3>
//               <button>Add to Cart</button>
//             </div>
//           ))}
//         </div>
//       )}
//       {
//       /* {
//       JSON.stringify(data)
//      } */
//       }
//     </div>
//   );
// }

// export default Dashboard;


import React, { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("all");
  const [extraProducts, setExtraProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const serverresponse = await fetch("https://fakestoreapi.com/products");
        const jsonResponse = await serverresponse.json();
        setData(jsonResponse);
      } catch (error) {
        console.log("API crashed harder than my WiFi:", error);
      }
    }

    fetchData();
  }, []);


  useEffect(() => {
    if (data.length > 0) {
      let filtered =
        category === "all"
          ? data
          : data.filter((item) => item.category === category);

      setExtraProducts(filtered.slice(0, 3));
    }
  }, [category, data]);


  function shoppingCart(ele) {
    // alert(ele.title);
    setCart(data => [...data, ele]);
    // alert(cart.length);
    alert("Item added in Cart");
    
    // <h2>Total Amount:{To + ele.price}</h2>;

  
    const total = cart.reduce((sum, item) => sum + ele.price, 0);
    alert("sum");

    

  }


  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Dashboard</h2>
      <div>
        {cart.length === 0
          ? <h4>Cart is Empty!</h4>
          : cart.map((ele) => (
              <h3 style={{ backgroundColor: "color" }}>{ele.title} </h3>
            ))}
      </div>
      <select
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: "10px", margin: "20px 0" }}
      >
        <option value="all">All Categories</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>

      {data.length === 0 ? (
        <h2>Data could not fetch 😢</h2>
      ) : (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {extraProducts.map((ele) => (
            <div
              key={ele.id}
              style={{
                height: "320px",
                width: "300px",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <img src={ele.image} height={120} width={120} alt="item" />
              <h4>{ele.title.slice(0, 40)}...</h4>
              <p style={{ color: "gray" }}>{ele.category}</p>
              <p style={{ color: "gray" }}>{ele.price}</p>
              <button
                onClick={() => shoppingCart(ele)}
                style={{ padding: "8px", cursor: "pointer" }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
