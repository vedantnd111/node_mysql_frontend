import React from 'react'

function ShowError({error}) {
    return <div className="alert alert-danger mt-3" style={{ display: error ? '' : 'none' }}>
            <h5>{error}</h5>
        </div>
}

export default ShowError
