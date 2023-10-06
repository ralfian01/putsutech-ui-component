import React, { useState } from "react";
import "./Style.scss";
import * as ElemProps from "./ElemProps";

export { ElemProps };

interface Option {
    value: string;
    view: string;
}

interface Props {
    style?: React.CSSProperties;
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    // type?: ElemProps.OptionType;
    placeholder?: string;
    label?: string;
    options?: Option[];
}

const defaultProps: Props = {
    style: {},
    className: "",
    // type: ElemProps.OptionType.Normal,
    placeholder: "",
    disabled: false,
    label: "",
    options: [],
};

/**
 * UI Component
 * @param {Props} props - Component properties
 * @param {React.CSSProperties} props.style - Component style
 * @param {string} props.className - Component className
 * @param {ElemProps.OptionType} props.type - option type. (See optionType for valid value)value)
 * @param {string} props.placeholder - placeholder value (See placeholder for valid value)
 * @param {string} props.label - label value (See label for valid value)
 * @param {string[]} props.options - options value (See options for valid value)
 * @param {boolean} props.disabled - disabled value (See disabled for valid value)
 * @param {boolean} props.isOpen - isOpen value (See isOpen for valid value)
 * @param {string} props.selectedOption - selectedOption value (See selectedOption for valid value)
 */
const Component: React.FC<Props> = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(props.placeholder);

    // handle option click
    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    // toggle select
    const toggleSelect = () => {
        setIsOpen(!isOpen);
    };

    const keyDownHandler = (e: any) => {
        if(e.keyCode == 13 || e.keyCode == 32)
            toggleSelect();
    }

    // intial class
    const initialClass = `multi-option1`;

    // intial style
    const initialStyle = {};

    // Merge class name
    const componentClass = `${initialClass} ${props.className}
    }`;

    // Merge stylesheet
    const componentStyle = Object.assign(initialStyle, props.style);

    return (
        <div
            className={componentClass}
            style={componentStyle}
        >
            <div className="label">{props.label}</div>
            <div
                className={`dropdown ${props.disabled ? "opt-disabled" : ""}`}
                onClick={toggleSelect}
            >
                {selectedOption}
                <select
                    value={
                        props.options?.find(
                            (option) => option.view === selectedOption
                        )?.value
                    }
                    onChange={(e) => handleOptionClick(e.target.value)}
                    onKeyDown={keyDownHandler}
                    disabled={props.disabled}
                >
                    {props.options?.map((option) => (
                        <option
                            key={option.view}
                            value={option.value}
                        >
                            {option.view}
                        </option>
                    ))}
                </select>
                <div className="select-arrow">
                    {isOpen ? ElemProps.DropIcon.Up : ElemProps.DropIcon.Down}
                </div>
                <div className={`select-items ${isOpen ? "" : "select-hide"}`}>
                    {props.options?.map((option) => (
                        <div
                            key={option.view}
                            className={`select-option ${
                                option.view === selectedOption
                                    ? "same-as-selected"
                                    : ""
                            }`}
                            onClick={() => handleOptionClick(option.view)}
                        >
                            {option.view}
                        </div>
                    ))}
                </div>
            </div>
            <p>
                {
                    props.options?.find(
                        (option) => option.view === selectedOption
                    )?.value
                }
            </p>
        </div>
    );
};

// Apply default props
Component.defaultProps = defaultProps;

export default Component;
