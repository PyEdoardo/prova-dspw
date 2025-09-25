import { useState, type ReactNode } from "react";
import type { TodoProp } from "@/models/Todo";
import { FavoritesContext } from "./FavoriteContext";

export interface FavoriteContextType {
    favorites: Array<TodoProp>
    addFav: (card: TodoProp) => void
    removerFav: (indice: number) => void
    show: () => Array<TodoProp>
};

interface FavoritesProviderProps {
    children: ReactNode
}

export const FavoritesProvider = ( { children }: FavoritesProviderProps ) => {
    const [favorites, setFavorites] = useState<Array<TodoProp>>(() => {
        const stored = localStorage.getItem('favorites');
        return stored ? JSON.parse(stored) : [];
    });

    const addFav = (card: TodoProp) => {
        setFavorites(prev => {
            const updated = [...prev, card];
            localStorage.setItem('favorites', JSON.stringify(updated));
            return updated;
        });
    };

    const removerFav = (indice: number) => {
        setFavorites(prev => {
            const updated = prev.filter((_, i) => i !== indice);
            localStorage.setItem('favorites', JSON.stringify(updated));
            return updated;
        });
    };

    const show = (): Array<TodoProp> => {     
        return favorites;
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addFav, removerFav, show }}>
            {children}
        </FavoritesContext.Provider>
    );
}
