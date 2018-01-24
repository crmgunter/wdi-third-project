import React from 'react'
import PropTypes from 'prop-types'
import EditUserForm from './EditUserForm'

class EditUserModal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    }

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    }

    return (
      <div className="backdrop"  style={backdropStyle}> 
        <div className="modal" style={modalStyle}>
          Edit {this.props.user.userName}
          
          <EditUserForm 
          user={this.props.user} 
          updateUser={this.props.updateUser}/>

          <div className="footer">
            
          </div>
        </div>
      </div>
    )
  }
}

EditUserModal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node
}

export default EditUserModal