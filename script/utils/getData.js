import { getRequest } from "./toggleFuncts/getRequest.js";

function getData(url) {
  return async function (element, callback, id) {
    const data = await getRequest(url, id);
    if (Array.isArray(data)) {
      data.forEach((product) => {
        element.appendChild(callback(product));
      });
    } else {
      element.appendChild(callback(data));
    }
  };
}
export const getMarket = getData("/Marketplace");
export const getInventory = getData("/Inventory");
export const getPending = getData("/PendingOrders");
export const getMyOrders = getData("/MyOrders");
