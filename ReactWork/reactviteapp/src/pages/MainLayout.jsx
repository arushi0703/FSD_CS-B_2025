import React from 'react'

function MainLayout() {
    return (
        <div>
           <nav>
            <Link style={{fontSize: '30px', color: 'red', marginLeft: '200px', marginTop: '20px'}} to='/login'>Login</Link>
            <Link to='/registration'>Registration</Link>
           </nav>
        </div>
    )
}
export default MainLayout