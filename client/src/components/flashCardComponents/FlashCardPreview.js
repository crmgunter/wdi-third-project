import React, { Component } from 'react'

import FlashCardAnswer from './FlashCardAnswer'

import ListContainer from '../styledComponents/ListContainer'
import FlashContainer from '../styledComponents/FlashContainer'
import FlashLink from '../styledComponents/FlashLink'
import EditCardModal from './EditCardModal'

class FlashCardPreview extends Component {
   
    state = {
        flashCard: {},
        isOpenAnswer: false,
        isOpenEditCard: false
    }

    toggleAnswer = () => {
        this.setState({
            isOpenAnswer: !this.state.isOpenAnswer
        })
    }

    toggleEditCardModal = () => {
        this.setState({
            isOpenEditCard: !this.state.isOpenEditCard
        })
    }

    componentWillMount () {
        this.setState({flashCard: this.props.flashcard})
    }

    handleClick = () => {
        if(window.confirm('Are you sure?')) {
            this.props.deleteFlashCard(this.props.flashcard)
        }
    }

    updateFlashCard = (updatedCard) => {
        
    }

    render() {
    return (
        <ListContainer>
            <FlashContainer>
                <i className="fa fa-pencil fa-lg fc-icon" aria-hidden="true" onClick={this.toggleEditCardModal} ></i>
                <FlashLink onClick={this.toggleAnswer}>
                    {this.state.flashCard.question}
                </FlashLink>   
                <i className="fa fa-trash fa-lg fc-icon" aria-hidden="true" onClick={this.handleClick} ></i>
            </FlashContainer>
            <FlashCardAnswer 
                    show={this.state.isOpenAnswer}
                    flashCard={this.state.flashCard} />
            <EditCardModal 
                    show={this.state.isOpenEditCard}
                    flashCard={this.state.flashCard}
                    toggleEditCardModal={this.toggleEditCardModal}/>
        </ListContainer>
    )
}
}

export default FlashCardPreview


// {`/users/${props.userId}/subjects/${props.subject._id}`}