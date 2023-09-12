import React from "react";
import * as ElemProps from "./ElemProps";
import "./Style.scss";
import {
	RiUploadCloud2Line,
	RiUploadCloud2Fill,
	RiLoader4Line,
} from "react-icons/ri";

// Export ElemProps
export { ElemProps };

// ElemProps Prop for component
interface Props {
	style?: React.CSSProperties;
	children?: React.ReactNode;
	className?: string;

	// ### Additional props
	type?: ElemProps.ButtonType;
	level?: ElemProps.ButtonLevel;
	size?: ElemProps.ButtonSize;
	icon?: ElemProps.ButtonIcon;
	mode?: ElemProps.ButtonMode;
}

// Default value for props component
const defaultProps: Props = {
	style: {},
	className: "",
	type: ElemProps.ButtonType.Regular,
	level: ElemProps.ButtonLevel.Primary,
	size: ElemProps.ButtonSize.Normal,
	icon: ElemProps.ButtonIcon.Upload,
};

/**
 * UI Component
 * @param {Props} props - Component properties
 * @param {React.CSSProperties} props.style - Component style
 * @param {string} props.className - Component className
 * @param {ElemProps.ButtonType} props.type - Button type. (See ButtonType for valid value)
 * @param {ElemProps.ButtonLevel} props.level - Button level. (See ButtonLevel for valid value)
 * @param {ElemProps.ButtonSize} props.size - Button size. (See ButtonSize for valid value)
 * @param {ElemProps.ButtonIcon} props.icon - Button icon. (See ButtonIcon for valid value)
 */
const Component: React.FC<Props> = (props: Props) => {
	const initialClass = `button2 btn-${props.level} btn-${props.type} btn-${props.size}`;
	const initialStyle = {};
	const initialIcon =
		ElemProps.ButtonIcons[props.icon || ElemProps.ButtonIcon.Upload];

	// Merge class name
	const componentClass = `${initialClass} ${props.className}`;

	// Merge stylesheet
	const componentStyle = Object.assign(initialStyle, props.style);

	// Merge icon
	const componentIcon = initialIcon;

	return (
		<button className={componentClass} style={componentStyle}>
			{props.mode == "loader" ? (
				<RiLoader4Line className="loader" />
			) : (
				props.children
			)}
		</button>
	);
};

// Apply default props
Component.defaultProps = defaultProps;

export default Component;
