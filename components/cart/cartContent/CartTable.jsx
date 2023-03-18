import React, { useEffect, useState } from "react";
import {
  ButtonsDiv,
  ImageDiv,
  ImageTitle,
  ItemCell,
  QuantitiyDiv,
  TabRow,
  TableDiv,
  TableHeader,
  TableLayout,
} from "./Table.styled";
import { IoClose } from "react-icons/io5";

// this for making data simulation to display cart items,
// once the localStorage is ready when 
// "adding to cart", this array can be removed.
export const data = [
  {
    id: 1,
    quantity: 10,
    name: "bottle",
    imageUrl:
      "https://www.petainer.com/wp-content/uploads/2021/12/0_35L-Spirit-Bottle-000843-scaled.jpg",
    price: 10,
  },
  {
    id: 12,
    quantity: 4,
    name: "sth",
    imageUrl:
      "https://www.petainer.com/wp-content/uploads/2021/12/0_35L-Spirit-Bottle-000843-scaled.jpg",
    price: 10,
  },
];

const CartContent = () => {
  const [items, setCartItems] = useState([]);
  // console.log(items);
  
  function updateCart(updatedCart) {
    // console.log(updatedCart);
    setCartItems(updatedCart);
    localStorage.setItem("items", JSON.stringify(updatedCart));
  }
 
  useEffect(() => {
    const grapedItems = JSON.parse(localStorage.getItem("items"));
    if (grapedItems !== null) {
      setCartItems(grapedItems);
    }
  }, []);

  function increaseQuantity(index, operator) {
    const updatedQuantity = items.map((item, i) => {
      if (index === i) {
        if (operator === "+") {
          return { ...item, quantity: item.quantity + 1 };
        } else if (operator === "-") {
          return { ...item, quantity: item.quantity - 1 };
        }
      } else {
        return item;
      }
    });
    updateCart(updatedQuantity);
  }

  function deleteItem(index, item) {
    console.log(index, item);
    const filteredItems = items.filter((item) => {
      return item.id !== index;
    });
    updateCart(filteredItems);
  }

  function clearCart(){
    setCartItems([])
    localStorage.removeItem("items")
  }

  return (
    <TableLayout>
      <TableDiv>
        <TabRow>
          <TableHeader>Product</TableHeader>
          <TableHeader>Price</TableHeader>
          <TableHeader>Quantity</TableHeader>
          <TableHeader>Total</TableHeader>
          <TableHeader></TableHeader>
        </TabRow>
        { items ?
          items.map((item, i) => {
            return (
              <TabRow key={i}>
                <ImageTitle>
                  <ImageDiv>
                    <img src={item.imageUrl} alt="item pic" />
                  </ImageDiv>
                  <p className="p-2 flex justify-center items-center">{item.name}</p>
                  </ImageTitle>
                <ItemCell>${item.price}</ItemCell>
                <ItemCell>
                  <QuantitiyDiv>
                    <button
                      className="w-full border-2 p-2 text-center"
                      onClick={() => {
                        increaseQuantity(i, "-");
                      }}
                    >
                      -
                    </button>
                    <span className="w-full border-2 p-2 text-center">
                      {item.quantity}
                    </span>
                    <button
                      className="w-full border-2 p-2 text-center"
                      onClick={() => {
                        increaseQuantity(i, "+");
                      }}
                    >+
                    </button>
                  </QuantitiyDiv>
                </ItemCell>
                <ItemCell>${item.price * item.quantity}</ItemCell>
                <ItemCell>
                  <button onClick={() => deleteItem(item.id, item)}>
                    <IoClose size={20} />
                  </button>
                </ItemCell>
              </TabRow>
            );
          }):
          <p className="p-10">There're no items in the cart</p>
        }

      {items?
      <ButtonsDiv >
        <button onClick={clearCart}
          className="bg-yellow-50 shadow-md rounded-md p-4"
          >Clear Cart
        </button>
      </ButtonsDiv>:
      null
      }
      </TableDiv>
      
    </TableLayout>
  );
};

export default CartContent;
