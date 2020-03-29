import React, {Component} from "react";
import Table from "./components/tables/Table";
import _findIndex from "lodash.findindex";
import EditingForm from "./components/EditingForm";
import "./App.css";

class App extends Component {

  // states are created inside constructor
  constructor() {
    super();

    // how to initialize a state
    this.state = {
      formData:[],
      currentData:[],
      editFormData:[]
    };

 }

 listening = (event) => {
   this.setState({
      currentData: {
        ...this.state.currentData,
        [event.target.name]:event.target.value
      }
   }, ()=>{
     console.log(this.state.currentData);
   })

 };

 onSubmitFn = () => {
   this.setState({
      formData:[
          ...this.state.formData,
          ...[this.state.currentData]
      ]
   }, ()=>{
     console.log(this.state.formData);
   })

 };

deleteFn = (id) => {
   let tempData = this.state.formData;
   let record = _findIndex(tempData, {no:id});

   tempData.splice(record, 1);
   this.setState({
       formData: tempData
   })

};

editFn = (id) => {
    let tempData = this.state.formData;
    let record = _findIndex(tempData, {no:id});

    this.setState({
        editFormData: tempData[record]
    },()=>{
        console.log(this.state.editFormData)
    })
};

setUpdatedData = (data) => {
    let tempData = this.state.formData;
    let record = _findIndex(tempData, {no:data.no});

    tempData.splice(record, 1, data);
    this.setState({
        formData: tempData
    })

};

markAsComplete = (id) => {
    let tempData = this.state.formData;
    let record = _findIndex(tempData, {no:id});

    tempData.splice(record, 1);
    console.log("task completed ID: ", id);



};



  render() {



    return(
        <div className={"container"}>

            <h1 className="display-4">Easy To - Do </h1>

          <div className={"row"}>

            <div className={"col-md-4 p-3 mb-2 bg-warning text-dark"}>

              <form>

                <div className="form-group">
                  <label>Task No</label>
                  <input type="number" className="form-control" name={"no"} onChange={(event) => this.listening(event)}/>
                </div>

                <div className="form-group">
                  <label>Date</label>
                  <input type="date" className="form-control" name={"date"} onChange={(event) => this.listening(event)}/>
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <input type="text" className="form-control" name={"description"} onChange={(event) => this.listening(event)}/>
                </div>


                <button type="button" className="btn btn-primary" name={"submitBtn"} onClick={()=> this.onSubmitFn()}>Add to list</button>

              </form>


            </div>

            <div className={"col-md-8 p-3 mb-2 bg-primary text-white"}>

              <Table

                  TableBodyValues={this.state.formData}
                  isAction={true}
                  markAsComplete={(event)=>this.markAsComplete(event.id)}
                  deleteFn={(event)=> this.deleteFn(event.id)}
                  editFn={(event)=> this.editFn(event.id)}
                  editBtnOtherProps={{
                      "data-toggle":"modal",
                      "data-target":"#EditTemplateId"
                  }}

              />

            </div>

              <EditingForm
                  editData = {this.state.editFormData}
                  setUpdatedData={(data) => this.setUpdatedData(data)}
              />

          </div>

        </div>
    )
  }

}

export default App;

