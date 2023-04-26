import { get } from "./fetcher.js";

export async function getData(element, callback, id) {
  const data = await get(undefined, id);
  if (Array.isArray(data)) {
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
  } else {
    element.appendChild(callback(data));
  }
}
