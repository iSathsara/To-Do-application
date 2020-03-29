import React, {Component} from "react";

class TableHead extends Component {

    static setDefaultProps = {
        headerValues:[],
        isAction:false,
    };

    render() {
        //console.log(this.props.headerValues);
        return(
                <thead>
                <tr>
                    <h2> Your Task List</h2>
                </tr>

                </thead>



        )
    }

}

export default TableHead;