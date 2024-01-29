import "./styles/ListItem.css";

interface ListItemProp {
    key: number;
    id: number;
    title: string;
    addedDate: string;
    delFunc: (id: number) => void;
}

function ListItem(props: ListItemProp) {
    return (
        <li key={props.key} className="list__item">
            <label htmlFor="remove-button">
                <span id="item__remove">X</span>
            </label>
            <button
                className="hidden"
                id="remove-button"
                onClick={() => props.delFunc(props.id)}
            >
                Remove
            </button>
            <div className="item__main-block">
                <div className="item__block1">
                    <input type="checkbox" />
                    <h4>{props.title}</h4>
                </div>
                <p className="item__date">
                    Added: <br /> {props.addedDate}
                </p>
            </div>
        </li>
    );
}

export default ListItem;
