import { useState } from "react"
import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Items from "./components/Items.jsx";
import List from "./components/List.jsx";
import Button from "./components/Button.jsx";
import Input from "./components/Input.jsx";
import Section from "./components/Section.jsx";
import Lista from "./components/Lista";
import Form from "./components/Form";
import LoadingData from "./components/LoadingData";



function App() {


  const [nameList, setNameList] = useState(["Mary", "Lisi"]);
  const [newName, setNewName] = useState("");

  const handleChange = (e) => {
    setNewName(e.target.value);
  }

  const addNewName = (name) => {
    setNameList((prev) => [...prev, name]);
  }

  return (
    <>
      <Header>
        <h1>Hello there!</h1>
      </Header>


      {/* <Main nameList={nameList} addNewName={addNewName}>
      </Main> */}

      {/* <Main addNewName={addNewName}>
        <Section handleChange={handleChange} addNewName={addNewName} newName={newName}></Section>
        <List>
          {nameList.map((name, index) => {
            return <Items key={index}>{name}</Items>
          })}
        </List>
      </Main> */}

      {/* <Main>
        <Section>
          <Input onChange={handleChange}></Input>
          <Button onClick={() => addNewName(newName)}>Click Here!</Button>
        </Section>
        <List>
          {nameList.map((name, index) => {
            return <Items key={index}>{name}</Items>
          })}
        </List>
      </Main> */}

      <Main>
        <Main.Section>
          <Main.Section.Input onChange={handleChange}></Main.Section.Input>
          <Main.Section.Button onClick={() => addNewName(newName)}>Click Here!</Main.Section.Button>
        </Main.Section>
        <Main.List>
          {nameList.map((name, index) => {
            return <Main.List.Items key={index}>{name}</Main.List.Items>
          })}
        </Main.List>
      </Main>

      <Form onSubmit={(e) => {
        e.preventDefault();
        addNewName(newName);
      }}>
        <Form.Input onChange={handleChange} value={newName} />
        <Form.Button>Add Name</Form.Button>
      </Form>

      <Lista>
        {nameList.map((name, index) => (
          <Lista.Item key={index}>{name}</Lista.Item>
        ))}
      </Lista>
      <LoadingData />
    </>
  )
}

export default App
