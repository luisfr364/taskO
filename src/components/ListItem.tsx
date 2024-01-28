import "./styles/ListItem.css";

interface ListItemProp {
    key: number;
    id: number;
    title: string;
    addedDate: string;
    delFunc: any;
}

function ListItem(props: ListItemProp) {
    return (
        <li key={props.key} className="list__item">
            <div className="item__main-block">
                <div className="item__block1">
                    <input type="checkbox" />
                    <h4>{props.title}</h4>
                </div>
                <p>{props.addedDate}</p>
                <button onClick={() => props.delFunc(props.id)}>Remove</button>
            </div>
        </li>
    );
}

export default ListItem;
