export async function getData(element, callback) {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();

    data.forEach((product) => {
      const updated = {
        ...product,
        total: 5,
        forSale: 3,
        orderedBy: "smechkov@vsgbg.com",
        orderDate: "2023-03-13 16:30",
        status: "Pending",
      };
      element.appendChild(callback(updated));
    });
  } catch (e) {
    console.log(e);
  }
}
