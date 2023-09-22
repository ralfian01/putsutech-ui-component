import Checkbox1, { ElemProps as Checkbox1Props } from "./_1/Elem";

export default function CheckBox() {
	return (
		<>
		{/*normal checkbox  checked */}
			<Checkbox1
				type={Checkbox1Props.CheckboxType.Normal}
				style={{ margin: "10px", marginTop: "15px" }}
				label="CheckBox label"
				description="lorem ipsum sit amet"
				checked
			/>

			{/* normal checkbox no checked */}
			<Checkbox1
				type={Checkbox1Props.CheckboxType.Normal}
				style={{ margin: "10px", marginTop: "15px" }}
				label="CheckBox label"
				description="lorem ipsum sit amet"
				
			/>

			{/* normal checkbox disabled checked */}
			<Checkbox1
				type={Checkbox1Props.CheckboxType.Normal}
				style={{ margin: "10px", marginTop: "15px" }}
				label="CheckBox label"
				description="lorem ipsum sit amet"
				disabled
				checked
			/>

			{/*normal checkbox  disabled no checked*/}
			<Checkbox1
				type={Checkbox1Props.CheckboxType.Normal}
				style={{ margin: "10px", marginTop: "15px" }}
				label="CheckBox label"
				description="lorem ipsum sit amet"
				disabled
			/>

			{/* inline checkbox checked */}
			<Checkbox1
				type={Checkbox1Props.CheckboxType.Inline}
				style={{ margin: "10px", marginTop: "15px" }}
				label="CheckBox label"
				description="lorem ipsum sit amet"
				checked
			/>

			{/* inline checkbox no checked */}
			<Checkbox1
				type={Checkbox1Props.CheckboxType.Inline}
				style={{ margin: "10px", marginTop: "15px" }}
				label="CheckBox label"
				description="lorem ipsum sit amet"
			/>

			{/* inline checkbox disabled checked */}
			<Checkbox1
				type={Checkbox1Props.CheckboxType.Inline}
				style={{ margin: "10px", marginTop: "15px" }}
				label="CheckBox label"
				description="lorem ipsum sit amet"
				disabled
				checked
			/>

			{/* inline checkbox disabled no checked */}
			<Checkbox1
				type={Checkbox1Props.CheckboxType.Inline}
				style={{ margin: "10px", marginTop: "15px" }}
				label="CheckBox label"
				description="lorem ipsum sit amet"
				disabled
			/>
		</>
	)
}