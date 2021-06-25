import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import "../css/App.css"

function ServiceModal({ap}) {
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
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
          <div className="container">
          {bookApp}
          </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
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