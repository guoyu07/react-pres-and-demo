import React, { Component } from "react"
import "./App.css"
import {
    ListDemo,
    InputDemo,
    ToggleButtonDemo,
    InteractiveListDemo,
} from "./stateful_components/index"
import { DemoNav } from "./stateless_components"
/* all demos is an array of stateful Component Names that we want to have access to */
const allDemos = [
    "ToggleButtonDemo",
    "InputDemo",
    "ListDemo",
    "InteractiveListDemo",
]
class App extends Component {
    state = {
        selectedDemo: "",
    }
    selectDemo = (componentName) =>
        this.setState({ selectedDemo: componentName })
    render() {
        console.log("whole app")
        return (
            <div className="App">
                <div>
                    <DemoNav
                        demos={allDemos}
                        selectedDemo={this.state.selectedDemo}
                        selectDemo={(name) => this.selectDemo(name)}
                    />
                </div>
                <div>
                    {this.state.selectedDemo === "ToggleButtonDemo" && <ToggleButtonDemo /> }
                    {this.state.selectedDemo === "ListDemo" && <ListDemo />}
                    {this.state.selectedDemo === "InteractiveListDemo" && <InteractiveListDemo />}
                    {this.state.selectedDemo === "InputDemo" && <InputDemo />}
                </div>
            </div>
        )
    }
}

export default App
