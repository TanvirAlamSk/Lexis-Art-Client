import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/UserContext/UserContext';
import Review from '../../components/Review/Review';

const MyComments = () => {
    const [myComments, setMyComments] = useState([])
    const { user, logOut } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/myreview?email=${user?.email}`, {
            headers: {
                authorization: `Bearar ${localStorage.getItem("lexis-art")}`
            }
        })
            .then((response) => {
                if (response.status == 401 || response.status == 403) {

                    logOut()
                }
                return response.json()
            })
            .then((data) => setMyComments(data))
    }, [user?.email, logOut])
    return (
        <div className={`${myComments.length === 0 && "h-screen"} `}>
            {
                myComments?.length === 0 && <h2 className='mt-10'> You haven't commented yet</h2>
            }

            <div className="container w-full mx-auto my-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    myComments?.map((myComment, i) => <Review key={i} myComment={myComment}></Review>)
                }
            </div>
        </div>
    );
};

export default MyComments;