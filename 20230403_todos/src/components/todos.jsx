import { useRef, useState } from "react";
import styled from "styled-components";
import TodoHeader from "./TodoHeader";

const listProperty = [
  { id: 1, text: "해야할일..", done: true },
  { id: 2, text: "해야할일..", done: false },
  { id: 3, text: "해야할일..", done: false },
];
let nextID = 4;

function Todos() {
  const [todos, setTodos] = useState(listProperty);
  const [text, setText] = useState("");
  const [edit, setEdit] = useState(false);
  const focusRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      setTodos(todos.concat({ id: nextID++, text: text, done: false }));
      focusRef.current.focus();
      setEdit(edit);
    } else {
      setEdit(!edit);
    }
    setText("");
  };
  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleRemove = (id) => {
    if (window.confirm("삭제하십니까."))
      setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  return (
    <Container>
      <TodoHeader todos={todos} />

      <Main>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                onClick={() => handleToggle(todo.id)}
                style={{ textDecoration: todo.done && "line-through" }}
              >
                {todo.text}
              </span>
              <DeleteBtn
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(todo.id);
                }}
              >
                삭제
              </DeleteBtn>
            </li>
          ))}
        </ul>
      </Main>

      <Footer>
        <form onSubmit={handleSubmit}>
          {edit && (
            <input
              type="text"
              placeholder="해야할 일을 입력해주세요"
              ref={focusRef}
              onChange={handleText}
              value={text}
            />
          )}

          <AddBtn>{edit ? "Add" : "submit"}</AddBtn>
        </form>
      </Footer>
    </Container>
  );
}
const Container = styled.div`
  width: 350px;
  height: 700px;
  border: 1px solid #000;
  border-radius: 8px;

  display: grid;
  grid-template-rows: 94px 1fr 45px;
`;

const Main = styled.main`
  overflow-y: auto;
  ul {
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 10px;
      border-bottom: 1px solid #000;
      span {
        flex: 1;
      }
    }
  }
`;

const Footer = styled.footer`
  border-top: 1px solid #000;
  padding: 10px;

  form {
    position: relative;
    display: flex;
    height: 25px;
    gap: 10px;

    input[type="text"] {
      flex: 1;
      /* z-index: 1; */
    }
  }
`;

const DeleteBtn = styled.button`
  background-color: rgba(255, 0, 0, 0.5);
`;

const AddBtn = styled.button`
  background-color: rgba(29, 133, 255, 0.5);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;

  /* width: 100%; */
`;

export default Todos;
