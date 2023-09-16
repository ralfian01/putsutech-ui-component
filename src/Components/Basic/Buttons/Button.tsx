import Button1, { ElemProps as Btn1Props } from "./_1/Elem";
import Button2, { ElemProps as Btn2Props } from "./_2/Elem";

export default function Button() {
	// opriweaopriuaveropweiu
	return (
		<>
			<Button1
				type={Btn1Props.ButtonType.Regular}
				size={Btn1Props.ButtonSize.Normal}
				style={{ margin: "auto", marginTop: "15px" }}>
				Button text
			</Button1>

			{/* Primary */}
			<div style={{ display: "flex" }}>
				<Button2
					type={Btn2Props.ButtonType.Regular}
					size={Btn2Props.ButtonSize.Big}
					style={{ margin: "auto", marginTop: "15px" }}
					icon={Btn2Props.ButtonIcon.Google}>
					text
				</Button2>
				<Button2
					type={Btn2Props.ButtonType.Circle}
					size={Btn2Props.ButtonSize.Normal}
					style={{ margin: "auto", marginTop: "15px" }}></Button2>
				<Button2
					type={Btn2Props.ButtonType.Capsule}
					size={Btn2Props.ButtonSize.Normal}
					style={{
						margin: "auto",
						marginTop: "15px",
					}}
					icon={Btn2Props.ButtonIcon.Upload}>
					Capsule
				</Button2>
			</div>

			<div style={{ display: "flex" }}>
				<Button2
					type={Btn2Props.ButtonType.Regular}
					size={Btn2Props.ButtonSize.Big}
					style={{ margin: "auto", marginTop: "15px" }}
					icon={Btn2Props.ButtonIcon.Google}
					disabled>
					text
				</Button2>
				<Button2
					type={Btn2Props.ButtonType.Circle}
					size={Btn2Props.ButtonSize.Normal}
					disabled
					style={{ margin: "auto", marginTop: "15px" }}></Button2>
				<Button2
					type={Btn2Props.ButtonType.Capsule}
					size={Btn2Props.ButtonSize.Normal}
					disabled
					style={{
						margin: "auto",
						marginTop: "15px",
					}}
					icon={Btn2Props.ButtonIcon.Upload}>
					Capsule
				</Button2>
			</div>

			{/* Secondary */}
			<div style={{ display: "flex" }}>
				<Button2
					type={Btn2Props.ButtonType.Regular}
					size={Btn2Props.ButtonSize.Big}
					level={Btn2Props.ButtonLevel.Secondary}
					style={{ margin: "auto", marginTop: "15px" }}
					icon={Btn2Props.ButtonIcon.Google}>
					text
				</Button2>

				<Button2
					type={Btn2Props.ButtonType.Circle}
					size={Btn2Props.ButtonSize.Normal}
					level={Btn2Props.ButtonLevel.Secondary}
					style={{ margin: "auto", marginTop: "15px" }}></Button2>

				<Button2
					type={Btn2Props.ButtonType.Capsule}
					size={Btn2Props.ButtonSize.Normal}
					level={Btn2Props.ButtonLevel.Secondary}
					style={{ margin: "auto", marginTop: "15px" }}
					icon={Btn2Props.ButtonIcon.Upload}>
					Capsule
				</Button2>
			</div>
			{/* Secondary Disabled */}
			<div style={{ display: "flex" }}>
				<Button2
					type={Btn2Props.ButtonType.Regular}
					size={Btn2Props.ButtonSize.Big}
					level={Btn2Props.ButtonLevel.Secondary}
					disabled
					style={{ margin: "auto", marginTop: "15px" }}
					icon={Btn2Props.ButtonIcon.Google}>
					text
				</Button2>

				<Button2
					type={Btn2Props.ButtonType.Circle}
					size={Btn2Props.ButtonSize.Normal}
					level={Btn2Props.ButtonLevel.Secondary}
					disabled
					style={{ margin: "auto", marginTop: "15px" }}></Button2>

				<Button2
					type={Btn2Props.ButtonType.Capsule}
					size={Btn2Props.ButtonSize.Normal}
					level={Btn2Props.ButtonLevel.Secondary}
					disabled
					style={{ margin: "auto", marginTop: "15px" }}
					icon={Btn2Props.ButtonIcon.Upload}>
					Capsule
				</Button2>
			</div>

			{/* Secondary-BW */}
			<div style={{ display: "flex" }}>
				<Button2
					type={Btn2Props.ButtonType.Regular}
					size={Btn2Props.ButtonSize.Big}
					level={Btn2Props.ButtonLevel.SecondaryBW}
					style={{ margin: "auto", marginTop: "15px" }}
					icon={Btn2Props.ButtonIcon.Google}>
					text
				</Button2>

				<Button2
					type={Btn2Props.ButtonType.Circle}
					size={Btn2Props.ButtonSize.Normal}
					level={Btn2Props.ButtonLevel.SecondaryBW}
					style={{ margin: "auto", marginTop: "15px" }}></Button2>

				<Button2
					type={Btn2Props.ButtonType.Capsule}
					size={Btn2Props.ButtonSize.Normal}
					level={Btn2Props.ButtonLevel.SecondaryBW}
					style={{ margin: "auto", marginTop: "15px" }}
					icon={Btn2Props.ButtonIcon.Upload}>
					Capsule
				</Button2>
			</div>

			{/* Secondary-Flat */}
			<div style={{ display: "flex" }}>
				<Button2
					type={Btn2Props.ButtonType.Regular}
					size={Btn2Props.ButtonSize.Big}
					level={Btn2Props.ButtonLevel.SecondaryFlat}
					style={{ margin: "auto", marginTop: "15px" }}
					icon={Btn2Props.ButtonIcon.Google}>
					text
				</Button2>

				<Button2
					type={Btn2Props.ButtonType.Circle}
					size={Btn2Props.ButtonSize.Normal}
					level={Btn2Props.ButtonLevel.SecondaryFlat}
					style={{ margin: "auto", marginTop: "15px" }}></Button2>

				<Button2
					type={Btn2Props.ButtonType.Capsule}
					size={Btn2Props.ButtonSize.Normal}
					level={Btn2Props.ButtonLevel.SecondaryFlat}
					style={{ margin: "auto", marginTop: "15px" }}
					icon={Btn2Props.ButtonIcon.Upload}>
					Capsule
				</Button2>
			</div>
		</>
	);
}
