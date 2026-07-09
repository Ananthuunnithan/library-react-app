import React from 'react'

const SearchBook = () => {
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12">

                        <div className="row g-4">
                            <div className="col col-12 col-sm-6">

                                <label htmlFor="" className="form-label">Book Code</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12">

                                <button className="btn btn-success">Search</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchBook