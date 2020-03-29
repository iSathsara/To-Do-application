import React, {Fragment} from "react";

const Form = ({
    onSaveFn = undefined,
    modalId = "",
    children = null,
              }) => {

    return(

        <Fragment>

            <div className={"modal fade"} id={modalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Change Details </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>onSaveFn()}>Update</button>
                        </div>
                    </div>
                </div>
            </div>


        </Fragment>


    )

}

export default Form;