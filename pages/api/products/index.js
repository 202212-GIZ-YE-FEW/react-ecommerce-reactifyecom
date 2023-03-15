<<<<<<< HEAD
export async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
    const data = await response.json();
    return data;
  }

// export async function getProducts(){
//     const req = await fetch('https://fakestoreapi.com/products/category/jewelery')

//     const data = await req.json()
//     return {
//         props:{data}
//     }
// }
=======
// export async function getProducts() {
//     const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
//     const data = await response.json();
//     return data;
//   }

export async function getProducts(){
    const req = await fetch('https://fakestoreapi.com/products/category/jewelery')

    const data = await req.json()
    return {
        props:{data}
    }
}
>>>>>>> a227ad01d890b56cd9e40345f4a2d550a8c240d2
