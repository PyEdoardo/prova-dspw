import Todo from "@/components/Todo";
import { useFavorites } from "@/hooks/useFavorites";

export const Favoritos = (): React.JSX.Element => {

    const fav = useFavorites();

    return (
        <>
            {fav.show().map((favorito, idx) => (
                <Todo id={idx} text={favorito.text} isDone={favorito.isDone} isFavorite={favorito.isFavorite}/>
            ))}
        </>
    );
};