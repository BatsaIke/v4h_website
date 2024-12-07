import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

// Placeholder for getCartItems: Adjust this to fetch cart items from localStorage or a backend API
const getCartItems = (): number | null => {
  const storedCartItems = localStorage.getItem("cartItems");
  return storedCartItems ? parseInt(storedCartItems, 10) : null;
};

// Define the shape of your context state
interface AppContextType {
  cartItems: number;
  setCartItems: (val: number) => void;
}

// Create the context with default values
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<number>(() => getCartItems() ?? 0);

  useEffect(() => {
    const updateCartItems = () => {
      const totalItems = getCartItems() ?? 0;
      setCartItems(totalItems);
    };

    // Perform an initial fetch of the cart items
    updateCartItems();

    // Handle localStorage changes (e.g., updates in other tabs)
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "cartItems") {
        updateCartItems();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <AppContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
