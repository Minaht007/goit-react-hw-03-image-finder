import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export class ImmageGallery extends Component {
  render() {
    const { photos } = this.props;
    return (
      <ul>
        {photos.map(photo => (
          <ImageGalleryItem
            photo={photo}
            key={photo.id}
            largeImageURL={photo.largeImageURL}
          />
        ))}
      </ul>
    );
  }
}
