import React, { Component } from "react";
import fetchImages from "./API/fetchImages";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    currentSearch: '',
    pageNumber: 1,
    modalOpen: false,
    modalImg: '',
    modalAlt: '',
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const inputForSearch = event.target.elements.inputForSearch;
    if (inputForSearch.value.trim() === '') {
      return;
    }
    const response = await fetchImages(inputForSearch.value, 1);
    this.setState({
      images: response,
      isLoading: false,
      currentSearch: inputForSearch.value,
      pageNumber: 1,
    });
  };

  handleClickMore = async () => {
      const response = await fetchImages(
      this.state.currentSearch,
      this.state.pageNumber + 1
    );
    this.setState({
      images: [...this.state.images, ...response],
      pageNumber: this.state.pageNumber + 1,
    });
  };

  handleImageClick = event => {
    this.setState({
      modalOpen: true,
      modalAlt: event.target.alt,
      modalImg: event.target.name,
    });
  };

  handleModalClose = () => {
    this.setState({
      modalOpen: false,
      modalImg: '',
      modalAlt: '',
    });
  };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.handleModalClose();
    }
  };

  async componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  render() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }}
    >
      {this.state.isLoading ? (
          <Loader />
        ) : ( 
          <React.Fragment>
            <Searchbar onSubmit={this.handleSubmit} />
            <ImageGallery
              onImageClick={this.handleImageClick}
              images={this.state.images}
            />
            {this.state.images.length > 0 && this.state.images.length < 500 && this.state.images.length / 12 === this.state.pageNumber ?
            ( 
              <Button onClick={this.handleClickMore} />
            ) : null}
          </React.Fragment>
        )}
        {this.state.modalOpen ? (
          <Modal
            src={this.state.modalImg}
            alt={this.state.modalAlt}
            handleClose={this.handleModalClose}
          />
        ) : null}
    </div>
  );
};
}