import React, {Component} from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

class Table extends Component{

    static defaultProps = {
           headerValue:[],
           bodyValues:[],
           isAction: false,
           deleteFn: undefined,
           editFn: undefined,
           editBtnOtherProps: {},
           markAsComplete:undefined,

    };

    render() {

        return(
            <div className={"table"}>
                <table className="table table-dark">
                    <TableHead/>
                    <TableBody bodyValues={this.props.TableBodyValues}
                               isAction={this.props.isAction}
                               deleteFn={this.props.deleteFn}
                               editFn={this.props.editFn}
                               editBtnOtherProps={this.props.editBtnOtherProps}
                               markAsComplete={this.props.markAsComplete}

                    />
                </table>
            </div>

        )
    }

}

export default Table;