import React, { useRef } from "react";

const NewComment = (props) => {
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        formData.append("belongsTo", props.postID);
        const entries = Object.fromEntries(formData);

        try {
            await fetch(`http://localhost:3000/api/v1/posts/${props.postID}/comments/new`, {
                method: "POST",
                body: JSON.stringify(entries),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            props.setLen((current) => current + 1);
            // snackbar here
            console.log("snackbar");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <h3>Leave a comment</h3>
            <label>
                Username:
                <input type="text" name="username" placeholder="Who are you?" required />
            </label>
            <label>
                Comment:
                <textarea name="text" placeholder="What do you think?" required />
            </label>
            <button className="btn" type="submit">
                Submit
            </button>
        </form>
    );
};

export default NewComment;
