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
}

// Default value for props component
const defaultProps: Props = {
    style: {},
    className: "",
    mode: "",
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
    const initialClass = `radio1 radio-${props.type}`;
    const initialStyle = {};

    // Merge class name
    const componentClass = `${initialClass} ${props.className} ${
        props.disabled ? `${initialClass} radio-disabled` : ""
    }`;

    // Merge stylesheet
    const componentStyle = Object.assign(initialStyle, props.style);

    return (
        <div
            className={componentClass}
            style={componentStyle}
        >
            <input
                type="radio"
                name={props.type}
            />
            {props.children}
            <div className={`radio-${props.type}`}>
                {props.type === "description"
                    ? props.mode
                    : props.type === "description-inline"
                    ? props.mode
                    : null}
            </div>
        </div>
    );
};

// Apply default props
Component.defaultProps = defaultProps;

export default Component;
