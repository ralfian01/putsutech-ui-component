import Radio1, { ElemProps as Radio1Props } from "./_1/Elem";

export default function Radio() {
    return (
        <>
            <Radio1
			type={Radio1Props.RadioType.Label}
			style={{margin: "auto", marginTop: "15px"}}
			>
				Radio Label
			</Radio1>
            <Radio1
                type={Radio1Props.RadioType.Description}
                style={{ margin: "auto", marginTop: "15px" }}
                mode="Lorem ipsum dolor sit amet."
            >
                Radio Label
            </Radio1>
            <Radio1
                type={Radio1Props.RadioType.DescriptionInline}
                style={{ margin: "auto", marginTop: "15px" }}
                mode="Lorem ipsum dolor sit amet."
            >
                Radio Label
            </Radio1>
        </>
    );
}
