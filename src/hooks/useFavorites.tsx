import { useContext } from "react";
import { FavoritesContext } from "@/context/FavoriteContext";

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) throw new Error("useFavorites deve ser usado dentro do Provedor");
    return context;
};