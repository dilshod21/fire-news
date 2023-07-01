

function ListItem({ id, img }) {
    return (
        <tr>
            <td>{id}</td>
            <td>
                <img src={img} alt=""/>
            </td>
        </tr>
    );
}

export default ListItem;