export async function getSingleItem(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    } else {
      const data = await res.json();
      return data;
    }
  } catch (e) {
    console.log(e);
  }
}
