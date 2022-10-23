import React, { useState } from 'react';

import Wrapper from "./ui/Wrapper";
import Screen from "./ui/Screen";
import ButtonContainer from "./ui/ButtonContainer";
import Button from "./ui/Button";

const Calculator = ({props}) => {
  let [calc, setCalc] = useState({
    oprt: '',
    num: 0,
    ret: 0,
  });
  
  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num:
        (calc.num === 0) && (value === "0")
         ? "0"
          : calc.num % 1 === 0
          ? Number(calc.num + value)
          : calc.num + value,
      ret: !calc.oprt ? 0 : calc.ret,
    });
  }

  const oprtClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value)

    setCalc({
      ...calc,
      oprt: value,
      ret: !(calc.ret && calc.num) ? calc.num : calc.ret,
      num: 0
    })
  }

  const equalsClickHandler = () => {
    if (calc.oprt && calc.num) {
      const math = (v1, v2, oprt) =>
        oprt === '+'
          ? v1 + v2
          : oprt === '-'
          ? v1 - v2
          : oprt === 'x'
          ? v1 * v2
          : v1 / v2

        setCalc({
          ...calc,
          ret:
            (calc.num === '0') && (calc.oprt === '÷')
              ? 'ERROR: Not divided by zero'
              : math(Number(calc.ret), Number(calc.num), calc.oprt),
          oprt: '',
          num: 0
        })
    }
  }

  const delClickHandler = () => {
    if (calc.num !== 0) {
      calc.num = Number(calc.num.toString().slice(0,-1))

      setCalc({
        ...calc,
        oprt: '',
        num: calc.num,
        ret: 0
      })
    }
  }

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      oprt: '',
      num: 0,
      ret: 0
    })
  }

  return (
    <Wrapper>
      <Screen value = {calc.num ? calc.num : calc.ret} />
      <ButtonContainer>
        { props.flat().map((btn, key_id) => {
          return (
            <Button
              key = {key_id}
              value = {btn}
              onClick = {
                (btn === 'C')
                  ? resetClickHandler
                  : (btn === '←')
                  ? delClickHandler
                  : (btn === '=')
                  ? equalsClickHandler
                  : (btn === '÷') || (btn === 'x') || (btn === '-') || (btn === '+')
                  ? oprtClickHandler
                  : numClickHandler
              }
            />
          )
        })
      }
      </ButtonContainer>
    </Wrapper>
  );
};

export default Calculator