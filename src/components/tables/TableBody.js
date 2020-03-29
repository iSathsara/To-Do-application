import React from "react";

const TableBody = ({
                        bodyValues = [],
                        isAction = false,
                        deleteFn = undefined,
                        editFn = undefined,
                        editBtnOtherProps = {},
                        markAsComplete = undefined,


}) =>{

        return(

                <tbody>
                {
                    bodyValues.map((values, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{values.no}</th>
                                <td>{values.date}</td>
                                <td>{values.description}</td>

                                {
                                    (isAction)? (
                                        <td className={"p-0"}>
                                            <button type="button" className="btn btn-success mt-1 ml-1" onClick={()=> markAsComplete({id:values.no})}>Done</button>
                                            <button type="button" className="btn btn-info mt-1 ml-1" onClick={() => editFn({id:values.no})} {...editBtnOtherProps}>Edit</button>
                                            <button type="button" className="btn btn-danger mt-1 ml-1" onClick={() => deleteFn({id:values.no})}>Delete</button>
                                        </td>
                                    ):null
                                }

                            </tr>
                        )
                    })
                }

                </tbody>


        )

}

export default TableBody;