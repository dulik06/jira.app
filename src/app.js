import React from "react";
import ReactDOM from "react-dom";
import Heading from "./components/Headings/Heading"
import Form from "./components/Headings/Form"
import SelectionPriority from "./components/Headings/SelectionPriority"

function Application(){
  return (
    <div className="container-background">
      <Heading/>
      <hr/>
        <Form headerWhat="Describe what the problem is and add as much relevant details as possible." headerWhen="When did it happen" headerWho="Who was involved in the bug?" headerWhere="Where did the bug happened"/>
        <SelectionPriority />
    </div>
  )
}

ReactDOM.render(<Application/>, document.getElementById("root"));
