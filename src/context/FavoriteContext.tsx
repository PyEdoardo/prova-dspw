import { createContext } from "react";
import type { FavoriteContextType } from "./FavoriteContextProvider";

export const FavoritesContext = createContext<FavoriteContextType | undefined>(undefined);