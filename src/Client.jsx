/**
 * Functional component Client
 * @param {,Object }  details,
 * @param {,Function} onDelete
 * @returns {,<Client/>}
 */
const Client = ({ details, onDelete }) => (
  <li>
    {details.name}
    <button onClick={() => onDelete(details.id)}>X</button>
  </li>
);

export default Client;

