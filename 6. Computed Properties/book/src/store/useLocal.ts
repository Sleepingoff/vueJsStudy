const useLocal = () => {
  const getLocal = (key: string) => {
    const rawItem = localStorage.getItem(key);
    if (rawItem) return JSON.parse(rawItem);
    else [];
  };
  const setLocal = (key: string, item: Array<any>) => {
    const rawItem = JSON.stringify(item);
    localStorage.setItem(key, rawItem);
  };

  return {
    getLocal,
    setLocal,
  };
};

export default useLocal;
