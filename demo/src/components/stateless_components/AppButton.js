import React from "react"

export const AppButton = (props) => (
        <button
            style={props.disabled ? styles.DisabledAddButton : styles.AddButton}
            onClick={props.handleAddItem}
            disabled={props.disabled}
        >
            {props.value}
        </button>
)

const styles = {
    AddButton: {
        fontSize: "1.5em",
        padding: "4px 8px",
        color: "lightskyblue",
        background: "#222",
        border: "none",
    },
    DisabledAddButton: {
        fontSize: "1.5em",
        padding: "4px 8px",
        color: "white",
        background: "#222",
        border: "none",
    },
}
