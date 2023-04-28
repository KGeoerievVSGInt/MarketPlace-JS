function putRequest(url) {
  return async function (data, id, headers) {
    try {
      const res = await fetch(`https://localhost:7245${url}${id}`, {
        method: "PUT",
        body: data instanceof FormData ? data : JSON.stringify(data),
        ...(headers ? { headers: { "Content-Type": "application/json" } } : {}),
      });
      if (!res.ok) {
        throw await res.json();
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export const editItem = putRequest("/Inventory/Modify");
