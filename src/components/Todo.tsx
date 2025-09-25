import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useFavorites } from "@/hooks/useFavorites";
import type { TodoProp } from "@/models/Todo";

import { Star, Trash, Check } from "lucide-react";
import { useEffect, useState } from "react";

export const Todo = ({ id, text, isDone, isFavorite}: TodoProp) => {

  const [done, setDone] = useState<boolean>(isDone);
  const contextFav = useFavorites();

  const completarTarefa = () => {
    setDone(!done);
  };

  const wrapperFav = () => {
    isFavorite = true;
    contextFav.addFav({id, text, isDone, isFavorite});
  };

  useEffect(() => {
    if (isFavorite){
      setInterval(() =>{
        alert(`A Tarefa ${text} foi adicionada aos favoritos`);
      }, 3000);
    }
  }, [isFavorite]);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="leading-tight line-clamp-1">{id}</CardTitle>
          <div className="flex items-center gap-1">
            <Button onClick={() => completarTarefa()}>
                <Check size={16} color="green"/>
            </Button>
            {isFavorite ? <Button onClick={() => contextFav.removerFav(id)}>
                <Star size={16} color="red"></Star>
            </Button> : <Button onClick={() => wrapperFav()}>
                <Star size={16} color="yellow"></Star>
            </Button>}
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="pt-6">
        <CardDescription className={isDone ? `line-clamp-3 line-through` : `line-clamp-3`}>
          {text}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default Todo;