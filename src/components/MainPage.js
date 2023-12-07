import { useState } from "react";
import NoList from "./Nolist";
import List from "./List";
import "../css/MainPage.css";
export default function MainPage() {
  let [list, setList] = useState([
    "인천 을왕리 해수욕장",
    "송도 센트럴파크",
    "파주 프로방스 /헤이리",
    "춘천 소양강 스카이워크",
    "이천 별빛정원우주",
  ]);
  let [modal, setModal] = useState(false);
  let [titleNum, setTitleNum] = useState();
  let [inputText, setInputText] = useState();

  function openModal(i) {
    setModal(true);
    setTitleNum(i);
  }

  let closeModal = () => {
    setModal(false);
  };

  let addItem = () => {
    let copy = [...list];
    copy.unshift(inputText);
    setList(copy);
    setInputText("");
  };

  let delItem = (i) => {
    let copy = [...list];
    copy.splice(i, 1);
    setList(copy);
  };

  return (
    <main>
      <div className="inputCon">
        <input
          value={inputText}
          placeholder="가고싶은 여행지를 등록하세요"
          onChange={(e) => {
            setInputText(e.target.value);
            console.log(inputText);
          }}
        ></input>
        <button onClick={addItem}>add</button>
      </div>
      <div className="listArea">
        <p>
          <strong>total</strong>
          <span>{list.length}</span>
        </p>
        {list.length === 0 ? (
          <NoList />
        ) : (
          <ul className="listCon">
            {list.map((listItem, i) => {
              return (
                <List
                  listItem={listItem}
                  i={i}
                  openModal={openModal}
                  delItem={delItem}
                  key={i}
                />
              );
            })}
          </ul>
        )}
      </div>
      {modal === true ? (
        <Modal list={list} titleNum={titleNum} closeModal={closeModal} />
      ) : null}
    </main>
  );
}

function Modal({ list, titleNum, closeModal }) {
  return (
    <div className="modal">
      <h2>{list[titleNum]}</h2>
      <p>모달내용</p>
      <button onClick={closeModal}>모달 닫기</button>
    </div>
  );
}
