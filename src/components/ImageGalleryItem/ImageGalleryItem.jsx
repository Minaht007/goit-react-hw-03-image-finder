import { Component } from 'react';
import { ModalImg } from 'components/Modal/Modal';
import Style from './ImageGalleryItem.module.css';
export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  handlTogleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };
  render() {
    const { photo, largeImageURL } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <li
          className={Style.ImageGalleryItem_image}
          onClick={this.handlTogleModal}
        >
          <img src={photo.previewURL} alt={photo.tags} />
        </li>
        {isModalOpen && (
          <ModalImg
            largPhoto={largeImageURL}
            closeModal={this.handlTogleModal}
          />
        )}
      </>
    );
  }
}
