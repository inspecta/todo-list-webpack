const retrieveFromStorage = (key) => {
  const retrievedData = localStorage.getItem(key);
  return retrievedData;
};

export default retrieveFromStorage;