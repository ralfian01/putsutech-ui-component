import Button1, { ElemProps as Btn1Props } from "./_1/Elem";
import Button2, { ElemProps as Btn2Props } from "./_2/Elem";
import { useState } from "react";

export default function Button() {
	const [mode, setMode] = useState(Btn1Props.ButtonMode.Default);
	const [disabled, setDisabled] = useState(false);

	const loaderMode = function () {
		setMode(Btn1Props.ButtonMode.Loading);
		setDisabled(true);
	};

	return (
		<>
			<div
				style={{
					fontFamily: "var(--fontNormal)",
					lineHeight: "var(--lineHeightParagraph)",
					margin: "auto",
					marginTop: "30px",
					textAlign: "center",
				}}>
				Klik tombol untuk ganti ke mode loading
			</div>

			<Button1
				type={Btn1Props.ButtonType.Regular}
				size={Btn1Props.ButtonSize.Normal}
				style={{ margin: "auto", marginTop: "15px" }}
				mode={mode}
				onClick={loaderMode}
				disabled={disabled}>
				Button1 text
			</Button1>

			<Button2
				type={Btn2Props.ButtonType.Regular}
				size={Btn2Props.ButtonSize.Normal}
				style={{ margin: "auto", marginTop: "15px" }}>
				Button2 text
			</Button2>
		</>
	);
}
