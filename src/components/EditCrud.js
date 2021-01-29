import { useContext, useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { CrudContext } from '../context/CurdContext';



const EditCrud = () => {


	const { cruds, updateCrud } = useContext(CrudContext)

	const crud = cruds;
	const id = crud.id;


	const [Name, setName] = useState(crud.Name);
	const [lastname, setLastName] = useState(crud.lastname)
	const [email, setEmail] = useState(crud.email)
	const [address, setAddress] = useState(crud.address)
	const [phone, setPhone] = useState(crud.phone)


	const updatedCrud = { id, Name, lastname, email, address, phone };


	const handleSubmit = (e) => {
		e.preventDefault()
		updateCrud(id, updatedCrud)
	}



	return (

		<>
			<Form className="bg-primary p-3" onSubmit={handleSubmit}>
				<Form.Row>
					<Col lg={6}>
						<Form.Group controlId="formGroupName">
							<Form.Label>Name</Form.Label>

							<Form.Control
								type="text"
								name="Name"
								value={Name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</Form.Group>
					</Col>

					<Col lg={6}>
						<Form.Group controlId="formGroupLastName">
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								type="text"
								name="lastname"
								value={lastname}
								onChange={(e) => setLastName(e.target.value)}
								required />
						</Form.Group>
					</Col>

					<Col lg={6}>
						<Form.Group controlId="formGroupEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required />
						</Form.Group>
					</Col>

					<Col lg={6}>
						<Form.Group controlId="formGroupPhone">
							<Form.Label>Phone</Form.Label>
							<Form.Control
								type="text"
								name="phone"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								required />
						</Form.Group>
					</Col>

					<Col lg={12}>
						<Form.Group controlId="formGroupAddress">
							<Form.Label>Address</Form.Label>
							<Form.Control
								as="textarea"
								rows="6"
								cols="20"
								name="address"
								value={address}
								onChange={(e) => setAddress(e.target.value)}
								required />
						</Form.Group>
					</Col>

					<Col lg={12} className="mb-3 p-3">
						<Button variant="danger" type="submit" block >
							UpDate Crud
  						</Button>
					</Col>
				</Form.Row>
			</Form>
		</>
	)
}

export default EditCrud
