import React,{Component} from "react";
import Form from "./Edit form/EditTemplate";

class EditingForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            formData:{
                no: "",
                date: "",
                description: "",
            }
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.editData.no !== this.props.editData.no) {
            this.setState({
                formData: this.props.editData
            })
        }
    }

    listening = (event) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [event.target.name]:event.target.value
            }
        }, ()=>{
            console.log(this.state.formData);
        })

    };

    setUpdatedData = () => {
      this.props.setUpdatedData(this.state.formData);
    };

    render() {

        return( // value={this.state.formData.no}
            <Form modalId={"EditTemplateId"} onSaveFn={this.setUpdatedData}>

                <form>

                    <div className="form-group">
                        <label>No</label>
                        <input type="number" className="form-control" name={"no"} value={this.state.formData.no} onChange={(event) => this.listening(event)}/>
                    </div>

                    <div className="form-group">
                        <label>Date</label>
                        <input type="date" className="form-control" name={"date"} value={this.state.formData.date} onChange={(event) => this.listening(event)}/>
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" className="form-control" name={"description"} value={this.state.formData.description} onChange={(event) => this.listening(event)}/>
                    </div>



                </form>

            </Form>
        )

    }

}
export default EditingForm;
