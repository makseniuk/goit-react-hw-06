import { FaUser } from "react-icons/fa"
import { FaPhone } from "react-icons/fa6"
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contactsSlice'

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const deletePhoneNumber = () => {
    dispatch(deleteContact(contact.id))
  }

  return (
   <li>
          <div >
            <h2><FaUser size="16"/> {contact.name}</h2>
            <p><FaPhone size="16"/> {contact.number}</p>
          </div>
      <button type="button" onClick={deletePhoneNumber}>Delete</button>
    </li>
  )
}

export default Contact