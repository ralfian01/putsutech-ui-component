import React from 'react';
import * as ElemProps from "./ElemProps";
import "./Style.scss";

// Export ElemProps
export { ElemProps };

// ElemProps Prop for component
interface Props {
    style?: React.CSSProperties,
    children?: React.ReactNode,
    className?: string,

    // ### Additional props
    type?: ElemProps.ButtonType,
    level?: ElemProps.ButtonLevel,
    size?: ElemProps.ButtonSize
};

// Default value for props component
const defaultProps: Props = {
    style: {},
    className: '',
    type: ElemProps.ButtonType.Regular,
    level: ElemProps.ButtonLevel.Primary,
    size: ElemProps.ButtonSize.Normal,
}

/**
 * UI Component
 * @param {Props} props - Component properties
 * @param {React.CSSProperties} props.style - Component style
 * @param {string} props.className - Component className
 * @param {ElemProps.ButtonType} props.type - Button type. (See ButtonType for valid value)
 * @param {ElemProps.ButtonLevel} props.level - Button level. (See ButtonLevel for valid value)
 * @param {ElemProps.ButtonSize} props.size - Button size. (See ButtonSize for valid value)
 */
const Component: React.FC<Props> = (props: Props) => {
    
    const initialClass = `button1 btn-${props.level} btn-${props.type} btn-${props.size}`;
    const initialStyle = {};
    
    // Merge class name
    const componentClass = `${initialClass} ${props.className}`;

    // Merge stylesheet
    const componentStyle = Object.assign(initialStyle, props.style);

    return (
        <button
            className={componentClass}
            style={componentStyle}
        >
            {props.children}
        </button>
    );
};

// Apply default props
Component.defaultProps = defaultProps;

export default Component;