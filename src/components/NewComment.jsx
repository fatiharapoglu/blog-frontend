import React, { useRef } from "react";

const NewComment = (props) => {
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);

        try {
            let entries = Object.fromEntries(formData);
            entries.belongsTo = props.postID;

            await fetch(`http://localhost:3000/api/v1/posts/${props.postID}/comments/new`, {
                method: "POST",
                body: JSON.stringify(entries),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            // snackbar here
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <label>
                Comment:
                <textarea name="text" />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};
export default NewComment;
