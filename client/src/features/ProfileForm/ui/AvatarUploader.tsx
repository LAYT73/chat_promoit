import React, { useState, ChangeEvent } from 'react';
import styles from './AvatarUploader.module.scss';

interface AvatarUploaderProps {
  onImageUpload: (file: File) => void;
}

const AvatarUploader: React.FC<AvatarUploaderProps> = ({ onImageUpload }) => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      setImage(URL.createObjectURL(file));
      onImageUpload(file);
    }
  };

  return (
    <div className={styles.avatarUploader}>
      <input
        type="file"
        accept="image/*"
        id="avatar-input"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      <label htmlFor="avatar-input" className={styles.avatarLabel}>
        {image ? (
          <img src={image} alt="Avatar" className={styles.avatarImage} />
        ) : (
          <div className={styles.avatarPlaceholder}>Upload Avatar</div>
        )}
      </label>
    </div>
  );
};

export default AvatarUploader;
