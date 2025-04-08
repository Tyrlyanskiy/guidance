export const getJsonObject = async (url: string) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data && data.length > 0 ? data : [];
  } catch (err) {
    console.error("getJsonObject got error --->", err);
    return null;
  }
};
