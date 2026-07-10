import { Dispatch, SetStateAction, useState } from "react";
import { post } from "../../services/fetcher";

//todo Make the error message for invalid characters / empty values on the frontend
//todo Make error visualizing on the frontend

async function createPostHandler(
  event: React.SubmitEvent<HTMLFormElement>,
  setter: Dispatch<SetStateAction<boolean>>,
  onCreated?: () => void,
) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const inputs = Object.fromEntries(formData);

  if (!inputs.title && !inputs.message) {
    return console.log("Must fill the spaces");
  }

  const response = await post(
    { title: inputs.title, message: inputs.message },
    "/posts",
  );
  console.log(response);
  setter(false);

  if (response.status === 200 || response.status === 201) {
    onCreated?.();
  }
}

export function CreatePost({ onCreated }: { onCreated?: () => void }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setIsDialogOpen(true)}
      >
        New Post
      </button>

      {isDialogOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setIsDialogOpen(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal__header">
              <h2>New post</h2>
              <button
                type="button"
                className="modal__close"
                aria-label="Close"
                onClick={() => setIsDialogOpen(false)}
              >
                &times;
              </button>
            </div>

            <form
              onSubmit={(e) => {
                createPostHandler(e, setIsDialogOpen, onCreated);
              }}
            >
              <div className="createPost__item">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" />
              </div>

              <div className="createPost__item" style={{ marginTop: "1rem" }}>
                <label htmlFor="message">Content</label>
                <textarea name="message" id="message" rows={4} />
              </div>

              <div className="createPost__actions">
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
