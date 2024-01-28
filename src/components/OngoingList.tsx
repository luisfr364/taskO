import ListItem from "./ListItem.tsx";
import "./styles/List.css";

function OngoingList({ onGoingTaskList, deleteTask }) {
    return (
        <ul className="list">
            {onGoingTaskList.map((item) => (
                <ListItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    addedDate={item.addedDate}
                    delFunc={deleteTask}
                />
            ))}
        </ul>
    );
}

export default OngoingList;
