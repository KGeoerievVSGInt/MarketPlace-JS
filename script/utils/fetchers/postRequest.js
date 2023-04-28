function postRequest(url) {
  return async function (data, headers) {
    try {
      const res = await fetch(`https://localhost:7245${url}`, {
        method: "POST",
        body: data instanceof FormData ? data : JSON.stringify(data),
        ...(headers ? { headers: { "Content-Type": "application/json" } } : {}),
      });
      if (!res.ok) {
        throw await res.json();
      }
    } catch (e) {
      console.log(e);
    }
  };
}

export const postOrder = postRequest("/Marketplace/Buy");
export const postNewItem = postRequest("/Inventory/AddItem");
