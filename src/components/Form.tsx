import { useState } from "react";
import "./styles/form.css";

interface formProps {
    onGoingTaskList: never[];
    setOngoingTaskList: (param: Array<itemObj>) => void;
}

interface itemObj {
    id: number;
    title: string;
    addedDate: string;
}

function Form({ onGoingTaskList, setOngoingTaskList }: formProps) {
    const [itemTitleInput, setItemTitleInput] = useState("");

    const itemObj = {
        id: onGoingTaskList.length + 1,
        title: itemTitleInput,
        addedDate: new Date().toLocaleDateString(),
    };

    function handleSubmit(e: Event): void {
        e.preventDefault();

        setOngoingTaskList((onGoingTaskList) => [...onGoingTaskList, itemObj]);

        setItemTitleInput("");
    }

    return (
        <form className="form" action="submit" onSubmit={(e) => handleSubmit(e)}>
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
