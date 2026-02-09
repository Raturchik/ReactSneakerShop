import { useEffect, useState } from "react";
import { AppContext } from "./index";
import { REST_API } from "../constants/index";

export function AppContextProvider({ children }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`${REST_API}items `)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Данные с сервера:", data);
        setItems(data);
      })
      .catch((error) => {
        console.error("Ошибка запроса:", error);
      });
  }, []);
  return <AppContext.Provider value={items}>{children}</AppContext.Provider>;
}
