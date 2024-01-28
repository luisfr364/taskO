import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form.tsx";
import OngoingList from "./components/OngoingList.tsx";

function App() {
    const [onGoingTaskList, setOngoingTaskList] = useState([]);

    function updateLocalStorage() {
        localStorage.setItem("onGoingTaskList", JSON.stringify(onGoingTaskList));
    }

    function checkLocalStorage() {
        const list = localStorage.getItem("onGoingTaskList");

        if (list && list !== "[]") {
            setOngoingTaskList(JSON.parse(list));
        }
    }

    function deleteTask(id: number) {
        const filteredList = onGoingTaskList.filter((el: object) => el.id != id);
        setOngoingTaskList(filteredList);
    }

    useEffect(checkLocalStorage, []);
    useEffect(updateLocalStorage);

    return (
        <>
            <Form onGoingTaskList={onGoingTaskList} setOngoingTaskList={setOngoingTaskList} />
            <OngoingList onGoingTaskList={onGoingTaskList} deleteTask={deleteTask} />
        </>
    );
}

export default App;
