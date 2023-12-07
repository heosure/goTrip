export default function List({ listItem, i, openModal, delItem }) {
  return (
    <li className="list">
      <p
        onClick={() => {
          openModal(i);
        }}
      >
        <span>{i + 1}</span> {listItem}
      </p>
      <i
        className="fa-solid fa-trash-can"
        onClick={() => {
          delItem(i);
        }}
      ></i>
    </li>
  );
}
