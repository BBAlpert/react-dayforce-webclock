import React, { useState } from "react";

export default function BadgeEntry(props) {
  //imported function for success (start shift, start meal, end meal, etc)
  const badgeNumbers = [111, 222, 333, 123, 999];
  const [enteredNumber, setEnteredNumber] = useState("");
  const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const setPanel = props.setPanel;

  const myButtonPanel = myNumbers.map((thisnum) => (
    <div className="NumberButton" onClick={() => pressNumber({ thisnum })}>
      {thisnum}
    </div>
  ));

  function pressNumber(number) {
    setEnteredNumber((enteredNumber) => enteredNumber + number);
    /*
      if (enteredNumber.length == 3) {
      //doesn't trigger until you select the FOURTH number
      submitNumber();
    }
    */
  }

  /*
  function addNumber(number) {
    setEnteredNumber((enteredNumber) => enteredNumber + number);
  }
  */

  function submitNumber() {
    let numberValue = Number(enteredNumber);
    if (badgeNumbers.includes(numberValue)) {
      //How to make new frame show up instead temporarily?
      alert(enteredNumber + " found!");
    } else {
      alert(enteredNumber + " not found");
    }
  }

  return (
    <div className="BadgeEntry">
      <div className="TaskTitle">Start Shift</div>
      {/*<NumberEntry />*/}
      <div className="EnteredNumber">
        {enteredNumber ? enteredNumber : "Enter Your Badge"}
      </div>
      {
        <ButtonPanel /> /*not used because it makes numbers into [object Object]*/
      }
      {/*<div className="ButtonPanel">{myButtonPanel}</div>  not used because it makes numbers into [object Object]*/}
      <div className="ButtonPanel">
        <div className="ButtonRow">
          <div className="NumberButton" onClick={() => pressNumber(1)}>
            {/*hard coding numbers instead of mapping*/}1
          </div>
          <div className="NumberButton" onClick={() => pressNumber(2)}>
            2
          </div>
          <div className="NumberButton" onClick={() => pressNumber(3)}>
            3
          </div>
          <div className="NumberButton" onClick={() => pressNumber(4)}>
            4
          </div>
          <div className="NumberButton" onClick={() => pressNumber(5)}>
            5
          </div>
        </div>
        <div className="ButtonRow">
          <div className="NumberButton" onClick={() => pressNumber(6)}>
            6
          </div>
          <div className="NumberButton" onClick={() => pressNumber(7)}>
            7
          </div>
          <div className="NumberButton" onClick={() => pressNumber(8)}>
            8
          </div>
          <div className="NumberButton" onClick={() => pressNumber(9)}>
            9
          </div>
          <div className="NumberButton" onClick={() => pressNumber(0)}>
            0
          </div>
        </div>
      </div>
      <div className="ButtonRow">
        <div className="NumberButton" onClick={() => setEnteredNumber("")}>
          Clear Entry
        </div>
        <div className="NumberButton" onClick={() => submitNumber()}>
          Submit Entry
        </div>
      </div>
      <p>Valid badge numbers are: 111, 222, 333, 123, and 999.</p>
      <button onClick={() => setPanel("menu")}>Back</button>
    </div>
  );

  function ButtonPanel() {
    let row1 = [1, 2, 3, 4, 5];
    let row2 = [6, 7, 8, 9, 0];
    return (
      <div className="ButtonPanel">
        <div className="ButtonRow">
          {row1.map((thisnum) => (
            <div
              className="NumberButton"
              onClick={() => pressNumber({ thisnum })}
            >
              {thisnum}
              {console.log({ thisnum })}
            </div>
          ))}
        </div>
        <div className="ButtonRow">
          {row2.map((thisnum) => (
            <div
              className="NumberButton"
              onClick={() => pressNumber({ thisnum })}
            >
              {thisnum}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
