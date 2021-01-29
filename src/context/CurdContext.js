import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';




export const CrudContext = createContext();


const CrudContextProvider = (props) => {

	const [cruds, setCrud] = useState([
		{ id: uuidv4(), Name: "Togrul", lastName: "Salmanli", email: "togrul@gmail.com", address: "Seki", phone: "(077)514-80-75" },
		{ id: uuidv4(), Name: "Tebriz", lastName: "Aliyev", email: "Tebriz@gmail.com", address: "Seki", phone: "(077)514-80-75" },
		{ id: uuidv4(), Name: "Taryel", lastName: "Allahverdiyev", email: "Taryel@gmail.com", address: "Seki", phone: "(077)514-80-75" },
		{ id: uuidv4(), Name: "Adil", lastName: "Abbasli", email: "Adil@gmail.com", address: "Seki", phone: "(077)514-80-75" },
		{ id: uuidv4(), Name: "Elsever", lastName: "Vahidli", email: "togrul@gmail.com", address: "Seki", phone: "(077)514-80-75" },
		{ id: uuidv4(), Name: "Ilkin", lastName: "Nurmemedov", email: "togrul@gmail.com", address: "Seki", phone: "(077)514-80-75" },
		{ id: uuidv4(), Name: "Sahin", lastName: "Salmanov", email: "togrul@gmail.com", address: "Seki", phone: "(077)514-80-75" },
		{ id: uuidv4(), Name: "Elcin", lastName: "Hesenli", email: "togrul@gmail.com", address: "Seki", phone: "(077)514-80-75" }
	])


	const addCrud = (Name, lastname, email, address, phone) => {
		setCrud([...cruds, { id: uuidv4(), Name: Name, lastName: lastname, email: email, address: address, phone: phone }])
	}



	const deleteCrud = (id) => {
		setCrud(cruds.filter(crud => crud.id !== id))
	}


	const updateCrud = (id, updateCrud) => {
		setCrud(cruds.map((crud) => (crud.id === id ? updateCrud : crud)))
	}


	return (
		<CrudContext.Provider value={{ cruds, addCrud, deleteCrud, updateCrud }}>
			{props.children}
		</CrudContext.Provider>
	)
}
export default CrudContextProvider;