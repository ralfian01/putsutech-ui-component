import React from "react";
import * as ElemProps from "./ElemProps";
import "./Style.scss";

// Export ElemProps
export { ElemProps };

// ElemProps Prop for component
interface Props {
	style?: React.CSSProperties;
	children?: React.ReactNode;
	className?: string;
	disabled?: boolean;
	mode?: string;

	// ### Additional props
	type?: ElemProps.RadioType;
	label: string;
	description?: string;
}

// Default value for props component
const defaultProps: Props = {
	style: {},
	className: "",
	mode: "",
	label: "",
	description: "",
};

/**
 * UI Component
 * @param {Props} props - Component properties
 * @param {React.CSSProperties} props.style - Component style
 * @param {string} props.className - Component className
 * @param {ElemProps.RadioType} props.type - Radio type. (See RadioType for valid value)
 * @param {ElemProps.RadioLevel} props.level - Radio level. (See RadioLevel for valid value)
 * @param {ElemProps.RadioSize} props.size - Radio size. (See RadioSize for valid value)
 */

const Component: React.FC<Props> = (props: Props) => {
	const initialClass = `radio2 radio-${props.type}`;
	const initialStyle = {};

	// Merge class name
	const componentClass = `${initialClass} ${props.className}`;

	// Merge stylesheet
	const componentStyle = Object.assign(initialStyle, props.style);

	const radioId = Math.random().toString();

	return (
		<label className={componentClass} htmlFor={radioId}>
			<div className="radio">
				<input id={radioId} type="radio" disabled={props.disabled} />
			</div>

			<div className="info">
				<div className="label">{props.label}</div>
				<div className="description">{props.description}</div>
			</div>
		</label>
	);
};

// Apply default props
Component.defaultProps = defaultProps;

export default Component;
