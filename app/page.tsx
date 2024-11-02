"use client";
import Button from "@mui/material/Button";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="main">
      <h1>Todo List</h1>
      <p>Welcome to your Todo app! Start by adding tasks below.</p>
      <div className="main-btns">
      <Link href="add-todo">
        <Button variant="outlined">Добавить Задачу</Button>
      </Link>
      <Button variant="outlined">Список задач</Button>
      </div>
    </div>
  );
}

export default Home;