import React from 'react';

// External Controller ( Redirect to Offline Page )

// React.useEffect(() => {
//     function changeStatus() {
//         if(!navigator.onLine){
//             localStorage.setItem("path", path === "/offline" ? localStorage.getItem("path") : path);
//             navigate(`/offline?redirectTo=${localStorage.getItem("path")}`);
//         }
//     }
//     if(!navigator.onLine){
//         localStorage.setItem("path", path === "/offline" ? localStorage.getItem("path") : path);
//         navigate(`/offline?redirectTo=${localStorage.getItem("path")}`);
//     }
//     window.addEventListener("offline", changeStatus);
//     return () => {
//       window.removeEventListener("offline", changeStatus);
//     };
// }, [navigate, path]);


function Offline() {
    return (
        <section className='offline'>
            Offline
        </section>
    );
}

export default Offline;