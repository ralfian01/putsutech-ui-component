import MultiOption1 from "./_1/Elem";

export default function MultiOption() {
    const carOptions = [
        {value: "opt1", view: "Option 1"},
        {value: "opt2", view: "Option 2"},
        {value: "opt3", view: "Option 3"},
        {value: "opt4", view: "Option 4"},
        {value: "opt5", view: "Option 5"},
    ];
    return (
        <>
        <MultiOption1
            style={{ margin: "10px", marginTop: "20px"}}
            label="Text Field Label"
            placeholder="Select option"
            options={carOptions}
            disabled={true}
        />
        <MultiOption1
            style={{ margin: "10px", marginTop: "20px"}}
            label="Text Field Label"
            placeholder="Select option"
            options={carOptions}
        />
        </>
    );
}
