import React, { ReactNode } from 'react';
import * as Enum from "./Enum";
import "./Style.scss";

// Export Enum
export { Enum };

// Enum Prop for component
interface Props {
    type?: Enum.ButtonType,
    level?: Enum.ButtonLevel,
    size?: Enum.ButtonSize,
    style?: Object,
    children?: ReactNode,
    className?: String
};

// Default value for props component
const defaultProps: Props = {
    type: Enum.ButtonType.Regular,
    level: Enum.ButtonLevel.Primary,
    size: Enum.ButtonSize.Normal,
    style: {},
    className: ''
}

// Component
const Component: React.FC<Props> = (props: Props) => {
    
    const className = `button1 btn-${props.level} btn-${props.type} btn-${props.size}`;
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