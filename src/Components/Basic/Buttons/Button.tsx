import Button1, { ElemProps as Btn1Props } from "./_1/Elem";

import Button2, { ElemProps as Btn2Props } from "./_2/Elem";
import { ButtonIcon } from "./_2/ElemProps";


export default function Button() {
  return (
    <>
      <Button1
        type={Btn1Props.ButtonType.Regular}
        size={Btn1Props.ButtonSize.Normal}
        style={{ margin: "auto", marginTop: "15px" }}
      >
        Testing
      </Button1>

      <Button1
        type={Btn1Props.ButtonType.Regular}
        size={Btn1Props.ButtonSize.Normal}
        style={{ margin: "auto", marginTop: "15px" }}
      >
        Button text
      </Button1>

      <Button2
        type={Btn2Props.ButtonType.Regular}
        size={Btn2Props.ButtonSize.Normal}
        style={{ margin: "auto", marginTop: "15px" }}
        icon={ButtonIcon.Loader}
        >
        text
      </Button2>

      <Button1
      type={Btn1Props.ButtonType.Regular}
      >
        Text
      </Button1>
    </>
  );
}
