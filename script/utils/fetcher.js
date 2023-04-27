function fetcher(method) {
  return async function (data, id, url) {
    try {
      const res = await fetch(`https://localhost:7245${url}${id ?? ""}`, {
        method,
        ...(data && {
          body: data instanceof FormData ? data : JSON.stringify(data),
          ...(!data instanceof FormData && {
            headers: { "Content-Type": "application/json" },
          }),
        }),
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
