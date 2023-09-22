import React,{useState} from "react";
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
    checked?: boolean; // Perbaikan ejaan di sini

    // ### Additional props
    type?: ElemProps.CheckboxType;
    label: string;
    description?: string;
}

// Default value for props component
const defaultProps: Props = {
    style: {},
    className: "",
    label: "",
    description: "",
    checked: false, // Perbaikan ejaan di sini
};

/**
 * UI Component
 * @param {Props} props - Component properties
 * @param {React.CSSProperties} props.style - Component style
 * @param {string} props.className - Component className
 * @param {ElemProps.CheckboxType} props.type - Checkbox type. (See CheckboxType for valid value)
 * @param {Boolean} props.checked - Checkbox checked (Perbaikan ejaan di sini)
 * @param {Boolean} props.disabled - Checkbox disabled
 */

const Component: React.FC<Props> = (props: Props) => {
    const initialClass = `checkbox1 check-${props.type}`;
    const initialStyle = {};

    //pemberian state pada checkbox
    const [isChecked, setIsChecked] = useState(props.checked); 

    // Merge class name
    const componentClass = `${initialClass} ${props.className}`;

    // Merge stylesheet
    const componentStyle = Object.assign(initialStyle, props.style);

    // Generate id random
    const checkId = Math.random().toString(); 

    // Fungsi penanganan perubahan checkbox
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); 
    };

    return (
        <label
            className={componentClass}
            style={componentStyle}
            htmlFor={checkId}
        >
            <div className="check">
                <input
                    id={checkId}
                    type="checkbox"
                    disabled={props.disabled}
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
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
