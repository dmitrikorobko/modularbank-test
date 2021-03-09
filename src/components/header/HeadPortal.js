import * as React from "react"
import * as ReactDOM from "react-dom"

const headRoot = document.head;

export default class HeadPortal extends React.Component {
    render() {
        return ReactDOM.createPortal(this.props.children, headRoot);
    }
}