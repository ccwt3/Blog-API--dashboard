import { Dispatch, SetStateAction, useState } from "react";
import { post } from "../../services/fetcher";

//todo Make the error message for invalid characters / empty values on the frontend
//todo Make error visualizing on the frontend

async function createPostHandler(
  event: React.SubmitEvent<HTMLFormElement>,
  setter: Dispatch<SetStateAction<boolean>>,
) {
  event.preventDefault();
  setter(false);
  const formData = new FormData(event.currentTarget);
  const inputs = Object.fromEntries(formData);

  if (!inputs.title && !inputs.message) {
    return console.log("nothinng here");
  }

  const response = await post(
    { title: inputs.title, message: inputs.message },
    "/posts",
  );
  console.log(response);
}

export function CreatePost() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsDialogOpen(true)}>
        New Post
      </button>

      {isDialogOpen && (
        <dialog open={isDialogOpen}>
          <form
            onSubmit={(e) => {
              createPostHandler(e, setIsDialogOpen);
            }}
          >
            <div className="createPost__item">
              <label htmlFor="title">Title: </label>
              <input type="text" name="title" id="title" />
            </div>

            <div className="createPost__item">
              <label htmlFor="message">Content: </label>
              <input type="text" name="message" id="message" />
            </div>

            <button type="submit">Create</button>
            <button type="button" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </button>
          </form>
        </dialog>
      )}
    </>
  );
}
