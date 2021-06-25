import React from 'react'
import Calendar from '../components/Calendar'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import "../css/App.css"

function ServiceModal({ap, service, handleFooter}) {
  const [open, setOpen] = React.useState(false)
  console.log(ap)

  const bookApp = ap.map(time => {
      return <div><button >{time.time}</button></div>
  })

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<button class="ui right floated button ui mini button" style={{fontSize: "16px", padding: "5px"}}>Book Now</button>}

    >
      <Modal.Header>Book {service.name} </Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={service.img_url} wrapped />
        <Modal.Description>
          <Header>Is This You ?</Header>
          <p>
            Have you found the style you've been looking for ? If so book here 👇
          </p>
          <p>Is it okay to use this photo?</p>
          <div className="container">
          {bookApp}
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <p class="ui left floated">{handleFooter}</p>
        <Button color='black'  onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ServiceModal