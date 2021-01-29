import { useContext, useState } from 'react'
import { CrudContext } from '../context/CurdContext';
import { Modal } from 'react-bootstrap'
import EditCrud from '../components/EditCrud';



const Employee = ({ cruds }) => {

	const { deleteCrud } = useContext(CrudContext)
	//const { crud } = useContext(CrudContext)
	//const crud = props.crud

	/*useEffect(() => {
		console.log("DeleteCrud")
	}, [deleteCrud])*/



	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			{
				cruds.map((employee, id) => (
					<tr key={employee.id}>
						<th scope="row">{employee.Name}</th>
						<td>{employee.lastName}</td>
						<td>{employee.email}</td>
						<td>{employee.address}</td>
						<td>{employee.phone}</td>
						<td className="d-flex flex-row justify-content-around">
							<i onClick={handleShow} className="fas fa-edit" style={{ color: "yellow" }}></i>
							<i className="fas fa-trash" style={{ color: "red" }} onClick={() => deleteCrud(employee.id)}></i>
						</td>
					</tr>

				))
			}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>UpDate Crud</Modal.Title>
				</Modal.Header>
				<EditCrud />
			</Modal>

		</>
	)
}

export default Employee
