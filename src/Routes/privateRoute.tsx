// import React, { PropsWithChildren } from 'react'
// import { useSelector } from 'react-redux'
// import { Navigate } from 'react-router-dom'

// const PrivateRoutes : React.FC<PropsWithChildren> = ({children}) => {
//     const user = useSelector((state) => state.user)
    
//   return (
//     <div>
//         {
//             user? <div> {children} </div>  : <Navigate to="/signIn" />
             
//         }
//     </div>
//   )
// }

// export default PrivateRoutes



import React, { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const PrivateRoutes: React.FC<PropsWithChildren> = ({ children }) => {
    const user:string = useSelector((state: any) => state.mainUser);

    return (
        <div>
            {user ? (
                <div>{children}</div>
            ) : (
                <Navigate to="/signIn" replace />
            )}
        </div>
    );
};

export default PrivateRoutes;
