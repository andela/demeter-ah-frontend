import React, {
  useState, useRef,
} from 'react';
import defaultImage from '../../../assets/images/default-img.png';
import Button from '../../../components/Button';
import callToast from '../../../components/Toast';
import uploadBtn from '../../../assets/images/upload-img.png';

const FeaturedImage = ({ articleBanner, articleTitle }) => {
  /* call article banner isOpen is true and send it { title, image } */
  const inputEl = useRef(null);
  const [image, setImage] = useState(defaultImage);
  const [imageName, setImageName] = useState('');
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    e.persist();
    setTitle(e.target.value);
  };

  const onBlur = () => {
    articleTitle(title);
  };

  const selectArticleImage = (e) => {
    const { files } = e.target;
    let selectedImage;

    if (files && files) {
      [selectedImage] = files;
      if (!selectedImage.type.match(/image/)) {
        callToast('Please select only an image.', 'error');
        return;
      }

      setImageName(e.target.value.split(/(\\|\/)/g).pop());
      const reader = new FileReader();
      reader.onload = ev => setImage(ev.target.result);
      articleBanner(selectedImage);
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <div className="flex bg-gray-200 relative mb-8">
      <Button
        type="button"
        onClick={() => inputEl.current.click()
        }
        name="upload"
        className="uploadbtn absolute"
        title=" change Image"
      >
        <img src={uploadBtn} alt="upload button" title="change image" />
      </Button>
      <div style={{ background: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 99.98%, rgba(255, 255, 255, 0) 99.99%, rgba(255, 255, 255, 0.2) 100%), url(${image})` }} className="articleImg w-full object-cover mx-0 relative" alt={imageName}>
        <textarea type="text" onChange={onChange} onBlur={onBlur} value={title} name="title" maxLength="100" className="absolute article-title bg-transparent font-light resize-none text-white text-4xl text-center w-10/12" placeholder="Title" />
      </div>
      <input
        type="file"
        className="hidden"
        ref={inputEl}
        onChange={
          selectArticleImage
        }
        accept="image/*"
        data-max-size="2000"
      />
    </div>
  );
};

export default FeaturedImage;
