function fetcher(method) {
  return async function (data, id) {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id ?? ""}`, {
        method,
        ...(data && { body: JSON.stringify(data) }),
      });
      if (!res.ok) {
        throw await res.json();
      }
      if (method == "GET") {
        return res.json();
      }
    } catch (e) {
      console.log(e);
    }
  };
}

export const get = fetcher("GET");
export const post = fetcher("POST");
export const put = fetcher("PUT");
export const del = fetcher("DELETE");
