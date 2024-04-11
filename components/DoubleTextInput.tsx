import TextInput from "@/components/TextInput";

const DoubleTextInput = ({id, suggestionLabel, id2, suggestionLabel2}:
                             { id: string, suggestionLabel: string, id2: string, suggestionLabel2: string }) => {
    return (
        <div className="grid md:grid-cols-2 md:gap-6">
            <TextInput type="text" id={id} suggestionLabel={suggestionLabel} />
            <TextInput type="text" id={id2} suggestionLabel={suggestionLabel2} />
        </div>
    );
}

export default DoubleTextInput;