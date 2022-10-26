import { useEffect, useState } from "react";

export const useLocalStorage = (itemName, initialContent) => {

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(initialContent)

  useEffect(()=>{
    setTimeout(() => {
      try {
        let itemList;
        const localStorageItems = localStorage.getItem(itemName);
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialContent))
          itemList = initialContent
        } else {
          itemList = JSON.parse(localStorageItems);
        }
        setItems(itemList)
      } catch (error) {
        setError(error)
      } finally{
        setLoading(false)
      }
    }, 1000);
  })

  const saveItems = (updatedItems) => {
    const stringifyItems = JSON.stringify(updatedItems);
    localStorage.setItem(itemName,stringifyItems);
    setItems(updatedItems);
  }

  return {
    items,
    saveItems,
    loading,
    error,
  }
}