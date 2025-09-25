import Todo from "@/components/Todo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { TodoProp } from "@/models/Todo";
import { useState } from "react";

export const MainPage = (): React.JSX.Element => {

    const [todos, setTodos] = useState<TodoProp[]>([]);
    const [textTodo, setTextTodo] = useState<string>("");
    const [idAtual, setIdAtual] = useState<number>(0);

    const adicionarTodo = (): void => {
        const novoTodo: TodoProp = {
            id: idAtual,
            text: textTodo,
            isDone: false,
            isFavorite: false
        }
        setTodos((anteriores) => [...anteriores, novoTodo]);
        setIdAtual((anteriores) => anteriores + 1);
    };

    return (
        <>
        <div className="justify-items-center grid w-full max-w-sm items-center gap-3">
            <div className="">
                <Label htmlFor="text-todo">Digite o texto do todo</Label>
                <Input value={textTodo} onChange={(e) => setTextTodo(e.target.value)} id="text-todo"></Input>
                <Button onClick={() => adicionarTodo()}>Adicionar Todo</Button>
            </div>
        </div>
        {todos.map((todo, idx) => (
            <Todo id={idx} text={todo.text} isDone={todo.isDone} isFavorite={todo.isFavorite}/>
        ))}
        </>
    );
};