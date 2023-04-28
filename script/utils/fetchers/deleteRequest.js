function deleteRequest(url) {
  return async function (id) {
    try {
      const res = await fetch(`https://localhost:7245${url}${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw await res.json();
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export const deleteOrder = deleteRequest("/DeleteItem/");
