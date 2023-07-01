import ListItem from "../list-item/ListItem";

function List({ data, }) {
    return (
        <table>
            <tbody>
            {data.map(item => (<ListItem id={item.id} img={item.img}/>))}
            </tbody>
        </table>
    );
}

export default List;