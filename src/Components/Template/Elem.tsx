import React, { ReactNode } from 'react';
import * as Enum from "./Enum";
import "./Style.scss";

// Export Enum
export { Enum };

// Enum Prop for component
interface Props {
    prop1?: Enum.Prop1,
    prop2: Enum.Prop2,
    style?: Object,
    children?: ReactNode,
    className?: String
};

// Default value for props component
const defaultProps: Props = {
    prop1: Enum.Prop1.Enum1,
    prop2: Enum.Prop2.Enum1,
    style: {},
    className: ''
}

// Component
const Component: React.FC<Props> = (props: Props) => {
    
    const className = `class-component css-${props.prop1} css-${props.prop2}`;
    const cssStyle = props.style;

    return (
        <button
            className={className}
            style={cssStyle}
        >
            {props.children}
        </button>
    );
};

// Apply default props
Component.defaultProps = defaultProps;

export default Component;