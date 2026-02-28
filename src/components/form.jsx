export function GenericForm({ handleSubmit, type }) {
  return (
    <form className="genericForm" onSubmit={handleSubmit}>
      <h1>{type}</h1>

      <div className="genericForm__item">
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" />
      </div>

      <div className="genericForm__item">
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />
      </div>

      <button className="genericForm__button">{type}</button>
    </form>
  );
}
