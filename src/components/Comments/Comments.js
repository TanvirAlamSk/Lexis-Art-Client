import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from '../../context/UserContext/UserContext';
import Comment from './Comment/Comment';

const Comments = ({ selectService }) => {
    const [comments, setComments] = useState([])
    const { user } = useContext(AuthContext)
    const { service, _id } = selectService
    const commentToast = () => {
        toast.success("Upload Your Comment", {
            position: toast.POSITION.TOP_CENTER
        })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/comments/${_id}`)
            .then((response) => response.json())
            .then((data) => setComments(data))
    }, [_id])

    const handelComments = (event) => {
        event.preventDefault()

        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date + ' ' + time;

        const userComment = event.target.comment.value
        const commentItem = { email: user?.email, name: user?.displayName, image: user?.photoURL, dateTime, userComment, service, serviceId: _id }



        if (userComment.length > 0) {
            fetch(`http://localhost:5000/comments/${_id}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(commentItem)
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    if (data.acknowledged) {
                        commentToast()
                        const newData = [...comments, commentItem]
                        setComments(newData);
                    }
                })
        }
        event.target.reset()
    }
    return (
        <div>
            <h2 className='text-3xl mt-20 text-left'>Comments</h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {
                    comments.map((comment, i) => <Comment key={i} comment={comment}></Comment>)
                }
            </div>
            <div className="divider mt-5"></div>
            {
                user ?
                    <form onSubmit={handelComments} className="card-body pb-0 mt-3 w-5/6'">
                        <div className="">
                            <textarea type="text" name='comment' placeholder="comment" className="input w-full h-24 border-2 border-black pl-5 pt-2" />
                        </div>
                        <div className="mt-6 text-right">
                            <button type='submit' className="btn bg-teal-500 text-white hover:bg-teal-600">Comment</button>
                        </div>
                    </form>
                    :
                    <div>
                        <p className='text-left'>Please Login For comments</p>
                    </div>
            }
        </div>
    );
};

export default Comments;


// Say Your Opinion :