import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewBooks = () => {
    const [data, changeData] = useState(
        [
            { "title": "The Great Gatsby", "avatar": "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg", "description": "Available on Amazon" },
            { "title": "To Kill a Mockingbird", "avatar": "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg", "description": "Available on Amazon" },
            { "title": "1984", "avatar": "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg", "description": "Available on Amazon" },
            { "title": "The Alchemist", "avatar": "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg", "description": "Available on Amazon" },
            { "title": "Harry Potter and the Philosopher's Stone", "avatar": "https://covers.openlibrary.org/b/isbn/9780747532743-L.jpg", "description": "Available on Amazon" },
        ]
    )
    return (
        <div>
            <NavBar />
            <div class="container mt-4">
                <div class="row">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div class="row g-3">
                            {data.map(
                                (value, index) => {
                                    return (

                                        <div class="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                            <div class="card">
                                                <img src={value.avatar} class="card-img-top" alt="..." height="350px" />
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.title}</h5>
                                                    <p class="card-text">{value.description}</p>
                                                    <a href="#" class="btn btn-primary">Buy now</a>
                                                </div>
                                            </div>

                                        </div>

                                    )
                                }
                            )}

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewBooks