import { Form, Discussions } from "./components";
import { useEffect, useState } from "react";
import agoraStatesDiscussions from "./components/data";

function App() {
    const [discussions, setDiscussions] = useState([]);

    useEffect(() => {
        setDiscussions(agoraStatesDiscussions);
    }, []);

    const addDiscussion = ({ title, author, bodyText }) => {
        const newDiscussion = {
            id: Date.now(),
            createdAt: new Date().toISOString(),
            title: title,
            url: "https://github.com/codestates-seb/agora-states-fe/discussions",
            author: author,
            answer: null,
            bodyHTML: bodyText,
            avatarUrl:
                "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
        };
        console.log(newDiscussion.id);
        setDiscussions([newDiscussion, ...discussions]);
    };

    const deleteDiscussion = (id) => {
        const deleteData = agoraStatesDiscussions.filter((el) => el.id !== id);
        setDiscussions(deleteData);
    };

    return (
        <>
            <h1>d</h1>
            <Form addDiscussion={addDiscussion}></Form>
            <Discussions discussions={discussions} deleteDiscussion={deleteDiscussion}></Discussions>
        </>
    );
}

export default App;
