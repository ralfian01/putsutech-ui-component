import TextField1, { ElemProps as TextField1Props } from "./_1/Elem";

export default function Radio() {
	return (
		<>
			<TextField1 type={TextField1Props.RadioType.Label}>
				Radio Label
			</TextField1>
			<TextField1
				type={TextField1Props.RadioType.Description}
				// mode="Lorem ipsum dolor sit amet."
			>
				Radio Label
			</TextField1>
			<TextField1
				type={TextField1Props.RadioType.DescriptionInline}
				// mode="Lorem ipsum dolor sit amet."
			>
				Radio Label
			</TextField1>
		</>
	);
}
