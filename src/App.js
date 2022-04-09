import "./styles.css";
import ButtonComponent from "./components/button.component";
import InputComponent from "./components/input.component";
import TextAreaComponent from "./components/text-area.component";
import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Panel,
  SmallLane,
  Lane,
  BlockLane
} from "./App.styles";

export default function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    // console.log("title: " + title);
    console.log("list: " + todo);
  }, [todo]);

  function addList() {
    title && setTodo((prevTodo) => [...prevTodo, { title: title, desc: desc }]);
    setDesc("");
    title && setTitle("");
    // console.log(Boolean(title));

    // title && setTodo(...todo, title);
  }

  function removeList(idx) {
    console.log(idx);
    console.log(todo.filter((item, index) => index !== idx));
    setTodo(todo.filter((item, index) => index !== idx));
  }

  return (
    <Panel>
      <h1>a todo list</h1>
      <h2>a helping hand to keep you reminded</h2>
      <Container>
        <BlockLane>
          <span>whats your thought? write below </span>
          <SmallLane>
            <label>Title</label>
            <InputComponent
              typeProps="text"
              nameProps="input-1"
              idProps="input1"
              onChangeProps={(e) => setTitle(e.target.value)}
              // onKeyDown={(e) => {
              //   if (e.key === "Enter") {
              //     addList();
              //   }
              // }}
              value={title}
            />
          </SmallLane>
          <SmallLane>
            <label>Desc</label>
            <TextAreaComponent
              rowProps={5}
              maxProps={250}
              nameProps="input-2"
              idProps="input2"
              onChangeProps={(e) => setDesc(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addList();
                }
              }}
              value={desc}
            />
          </SmallLane>
        </BlockLane>
        <Lane>
          <ButtonComponent
            // onClickProps={() => title && alert(title)}
            onClickProps={addList}
            textProps="Add List"
            buttonIdProps="alert-button"
          />
          <ButtonComponent
            onClickProps={() => setTitle("")}
            textProps="Clear Input"
            buttonIdProps="clear-button"
          />
          <ButtonComponent
            onClickProps={() => setTodo([])}
            textProps="Reset List"
            buttonIdProps="reset-button"
          />
        </Lane>
      </Container>
      <div>
        {todo.map((card, index) => (
          <Card key={"container" + index}>
            <SmallLane>
              <label>Title</label>
              <InputComponent
                key={"input" + index}
                typeProps="text"
                nameProps={"input-" + index}
                idProps={"input" + index}
                readOnly={true}
                value={card.title}
              />
            </SmallLane>
            <SmallLane>
              <label>Desc</label>
              <TextAreaComponent
                key={"input" + index}
                rowProps={5}
                maxProps={250}
                nameProps={"input-" + index}
                idProps={"input" + index}
                readOnly={true}
                value={card.desc}
              />
            </SmallLane>
            <ButtonComponent
              style={{ width: "100%" }}
              key={"button" + index}
              onClickProps={() => removeList(index)}
              textProps="Remove"
              buttonIdProps="reset-button"
            />
          </Card>
        ))}
      </div>
    </Panel>
  );
}
