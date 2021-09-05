import { db } from "./firebase";

const getDataFromDB = (collectionName) => {
  const collection = db.collection(collectionName);
  const items = [];

  collection.onSnapshot((querySnapshot) => {
    querySnapshot.forEach((document) => {
      items.push(document.data());
    });
  });
  return items;
};

export default getDataFromDB;
