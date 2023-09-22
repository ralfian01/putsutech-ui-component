import Toggle1, { ElemProps as Toggle1Props } from "./_1/Elem";

export default function Toggle() {
	return (
		<>
		{/*normal checkbox  checked */}
			<Toggle1
				type={Toggle1Props.CheckboxType.Normal}
				style={{ margin: "10px", marginTop: "15px" }}
				label="CheckBox label"
				description="lorem ipsum sit amet"
				checked
			/>

			{/* normal checkbox no checked */}
			<Toggle1
				type={Toggle1Props.CheckboxType.Normal}
				style={{ margin: "10px", marginTop: "15px" }}
				label="CheckBox label"
				description="lorem ipsum sit amet"
				
			/>

			{/* normal checkbox disabled checked */}
			<Toggle1
				type={Toggle1Props.CheckboxType.Normal}
				style={{ margin: "10px", marginTop: "15px" }}
				label="CheckBox label"
				description="lorem ipsum sit amet"
				disabled
				checked
			/>

			{/*normal checkbox  disabled no checked*/}
			<Toggle1
				type={Toggle1Props.CheckboxType.Normal}
				style={{ margin: "10px", marginTop: "15px" }}
				label="CheckBox label"
				description="lorem ipsum sit amet"
				disabled
			/>

			{/* inline checkbox checked */}
			<Toggle1
				type={Toggle1Props.CheckboxType.Inline}
				style={{ margin: "10px", marginTop: "15px" }}
				label="CheckBox label"
				description="lorem ipsum sit amet"
				checked
			/>

			{/* inline checkbox no checked */}
			<Toggle1
				type={Toggle1Props.CheckboxType.Inline}
				style={{ margin: "10px", marginTop: "15px" }}
				label="CheckBox label"
				description="lorem ipsum sit amet"
			/>

			{/* inline checkbox disabled checked */}
			<Toggle1
				type={Toggle1Props.CheckboxType.Inline}
				style={{ margin: "10px", marginTop: "15px" }}
				label="CheckBox label"
				description="lorem ipsum sit amet"
				disabled
				checked
			/>

			{/* inline checkbox disabled no checked */}
			<Toggle1
				type={Toggle1Props.CheckboxType.Inline}
				style={{ margin: "10px", marginTop: "15px" }}
				label="CheckBox label"
				description="lorem ipsum sit amet"
				disabled
			/>
		</>
	)
}