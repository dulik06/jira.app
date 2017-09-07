import React from "react";
import axios from 'axios'
import PropTypes from 'prop-types';
import InputArea from "./InputArea";
import SubbmitBotton from "./SubbmitBotton";
import TextArea from './TextArea';
import AttachArea from './AttachArea';


const validationsMap = {
  whatQuestion1: value => value.length > 1,
  whatQuestion2: value => value.length > 1,
  whatQuestion3: value => value.length > 1,
  whatQuestion4: function (fileValue) {
    if (!fileValue) {
      return true;
    }
    if (fileValue.type == 'image/jpeg' ||  fileValue.type == 'image/png' || fileValue.type == 'application/pdf') {
      return true
    }
    return false
  }
};


export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {whatQuestion1:"", whatQuestion2: "", whatQuestion3:"", whatQuestion4: "", whenQuestion1: "", whenQuestion2: "", whereQuestion1: "", whereQuestion2: "", whoQuestion1: "", whoQuestion2: "", howQuestion1: "" }
  }

  changeInput1(newInput) {
    this.setState({whatQuestion1: newInput})
  }

  changeInput2(newInput) {
    this.setState({whatQuestion2: newInput})
  }
  changeInput3(newInput) {
    this.setState({whatQuestion3: newInput})
  }

  changeInput4(newInput) {
    this.setState({whatQuestion4: newInput})
  }

  changeInput5(newInput) {
  this.setState({whenQuestion1: newInput})
}

  changeInput6(newInput) {
    this.setState({whenQuestion2: newInput})
  }

  changeInput7(newInput) {
    this.setState({whoQuestion1: newInput});
  }

  changeInput8(newInput) {
    this.setState({whoQuestion2: newInput});
  }

  changeInput9(newInput) {
    this.setState({whereQuestion1: newInput});
  }

  changeInput10(newInput) {
    this.setState({whereQuestion2: newInput});
  }

  changeInput11(newInput) {
    this.setState({howQuestion1: newInput});
  }


  isNotReadyToSubmit() {
    for(let answer in this.state) {
      if(typeof validationsMap[answer] == 'function') {
        if(!validationsMap[answer](this.state[answer])) {
          return true;
        }
      }
    }

    return false;
  }


  appendDataToForm() {
    const form = new FormData();
    for(let name in this.state) {
      form.append(name, this.state[name]);
    }
    return form;
  }



  handleSubmit(e) {  ///build formData
    const form = document.querySelector('form');
    if (this.isNotReadyToSubmit()) {
      return alert("not ready");
    } else {
      alert('Was submitted: ' + this.state.whatQuestion1 + ", " + this.state.whatQuestion2 + ", " + this.state.whatQuestion3 + ", ");
      e.preventDefault();
      console.log(this.appendDataToForm());
      axios.post('http://localhost:3000/ala', this.appendDataToForm())
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <form style={{textAlign: "center", marginTop: 50}} onSubmit={this.handleSubmit.bind(this)}>
        <div className="fields-container">
          <div>
            <h1 className="main-title">{this.props.headerWhat}</h1>
            <TextArea value={this.state.whatQuestion1} onChange={this.changeInput1.bind(this)} label="What did you do?"/>
            <TextArea value={this.state.whatQuestion2} onChange={this.changeInput2.bind(this)} label="What happened?"/>
            <TextArea value={this.state.whatQuestion3} onChange={this.changeInput3.bind(this)} label="What did you expect to happen?"/>
            <AttachArea onChange={this.changeInput4.bind(this)} label="Add a screenshot if you can."/>
          </div>
          <div>
            <h1 className="main-title">{this.props.headerWhen}</h1>
            <TextArea value={this.state.whenQuestion1} onChange={this.changeInput5.bind(this)} label="When did you encountered the bug"/>
            <TextArea value={this.state.whenQuestion2} onChange={this.changeInput6.bind(this)} label="Did you encountered the same bug multiple times?"/>
          </div>
          <div>
            <h1 className="main-title">{this.props.headerWho}</h1>
            <InputArea value={this.state.whoQuestion1} onChange={this.changeInput7.bind(this)} label="Add the user_id and or factoring_application_id"/>
            <InputArea value={this.state.whoQuestion2} onChange={this.changeInput8.bind(this)} label="If applicable, who talked to the user?"/>
          </div>
          <div>
            <h1 className="main-title">{this.props.headerWhere}</h1>
            <InputArea value={this.state.whereQuestion1} onChange={this.changeInput9.bind(this)} label="Add the user_id and or factoring_application_id"/>
            <InputArea value={this.state.whereQuestion2} onChange={this.changeInput10.bind(this)} label="If applicable, who talked to the user?"/>
          </div>
          <div>
            <br/><br/><br/>
            <TextArea value={this.state.howQuestion1} onChange={this.changeInput11.bind(this)} label="Describe how to reproduce the bug"/>
          </div>

        </div>
        <SubbmitBotton disabled= {this.isNotReadyToSubmit()} />
      </form>

    );
  }
}



Form.propTypes = {
  headerWhat: PropTypes.string.isRequired,
  headerWhen: PropTypes.string.isRequired,
  headerWho: PropTypes.string.isRequired,
  headerWhere: PropTypes.string.isRequired,
};


