// import react, { useEffect, useState } from 'react';
// import { Modal, Button } from 'antd';

// function NowProjects() {
//     const [post, setPost] = useState([])
//     const [content, setContent] = useState()
//     const [isModalVisible, setIsModalVisible] = useState(false);
//     const [test, setTest] = useState()

//     const showModal = (id) => {
//         setTest(post[id])
//     // console.log(test.id, "test") if (id <=100) {

//             post.find((data) => {
//                 setContent(data.title)

//             })

//         }
//         setIsModalVisible(true);
//     };


//     const handleOk = () => {
//         setIsModalVisible(false);
//         setTest()
//     };

//     const handleCancel = () => {
//         setIsModalVisible(false);
//     };

//     useEffect(() => {
//         const url = 'https://jsonplaceholder.typicode.com/todos';
//         fetch(url).then(resp => resp.json())
//             .then(resp => setPost(resp))
//     }, [])


//     return (
//         <div>

//             <table>
//                 <tr>
//                     <th>User Id</th>
//                     <th> Id</th>


//                 </tr>
//                 {post.map((data, index) => {
//                     return (
//                         <tr>
//                             <td>{data.userId} </td>
//                             <td onClick={() => showModal(index)}>{data.id} </td>


//                         </tr>
//                     )
//                 })}
//             </table>
//             <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
//                 {content}

//             </Modal>


//         </div>
//     )
// }
// export default NowProjects;