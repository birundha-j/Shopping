import react, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';

function NowProjects() {
    const [post, setPost] = useState([])
    const [content, setContent] = useState()
    // const [isModalVisible, setIsModalVisible] = useState(false);
    const [test, setTest] = useState([])
    const [title, setTitle] = useState([])

    function viewData() {
        const url = `https://jsonplaceholder.typicode.com/comments/${content}`;
        fetch(url).then(resp => resp.json())
            .then(resp => setTest(resp))
    }

    function addchange(e) {
        setContent(e.target.value)
    }
    // console.log(content, "content")
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/comments';
        fetch(url).then(resp => resp.json())
            .then(resp => setPost(resp))
    }, [])



    return (
        <div>
            <input type="number" onChange={addchange} />
            <button onClick={viewData}>Find</button>
            <div> {test.email}</div>
            <div> {test.postId}</div>
        </div>
    )
}
export default NowProjects;


// const showModal = (id) => {
//     post.map((item)=>{
//         if(item.id === id){
//             setTitle(item.email)
//         }
//     })
//     setIsModalVisible(true);
// }



// const handleOk = () => {
//     setIsModalVisible(false);
//     setTest()
// };

// const handleCancel = () => {
//     setIsModalVisible(false);
// };


{/* <table>
                <tr>
                    <th>User Id</th>
                    <th> Id</th>
                </tr>
                {post.map((data) => {
                    return (
                        <tr>
                            <td>{data.postId} </td>
                            <td onClick={() => showModal(data.id)}>{data.name} </td>
                        </tr>
                    )
                })}
            </table>
             */}
{/* <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {title}

            </Modal> */}
