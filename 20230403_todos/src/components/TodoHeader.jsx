import styled from "styled-components";

function TodoHeader({ todos }) {
  const today = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "long",
  });
  const undoneCount = todos.filter((todo) => !todo.done).length;
  return (
    <Container>
      <h1>{today}</h1>
      <p>
        해야할일 : {undoneCount} / {todos.length}
      </p>
    </Container>
  );
}
const Container = styled.header`
  border-bottom: 1px solid #000;
  padding: 20px 10px;
  p {
    padding-top: 10px;
    color: rgba(136, 136, 136, 1);
  }
`;
export default TodoHeader;
