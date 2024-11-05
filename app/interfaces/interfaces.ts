export interface Todo {
    id: number;
    name: string;
    description: string;
    completed: boolean;
}

export interface TodoState {
    todos: Todo[];
}