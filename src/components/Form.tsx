import { useState } from "react";

function Form({ onGoingTaskList, setOngoingTaskList }) {
    const [itemTitleInput, setItemTitleInput] = useState("");

    const itemObj = {
        id: onGoingTaskList.length + 1,
        title: itemTitleInput,
        addedDate: new Date().toLocaleDateString(),
    };

    function handleSubmit(e) {
        e.preventDefault();

        setOngoingTaskList((onGoingTaskList) => [...onGoingTaskList, itemObj]);

        setItemTitleInput("");
    }

    return (
        <form action="submit" onSubmit={(e) => handleSubmit(e)}>
            <input
                type="text"
                value={itemTitleInput}
                onChange={(e) => setItemTitleInput(e.target.value)}
            />
            <button type="submit">Adicionar Tarefa</button>
        </form>
    );
}

export default Form;
