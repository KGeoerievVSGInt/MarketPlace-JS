export async function getRequest(url, id) {
  try {
    const res = await fetch(`https://localhost:7245${url}${id ?? ""}`);
    if (!res.ok) {
      throw await res.json();
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
