import css from "./TextInput.module.css";

export default function TextInput({ value, onUpdate }) {
    const handleChange = (event) => {
        onUpdate(event.target.value);
    };

    return (
        <div className={css.wrapper}>
            <span>Text input</span>
            <input type="text" value={value} onChange={handleChange} />
        </div>
    );
}