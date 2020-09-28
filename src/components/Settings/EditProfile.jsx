import React, { useState, useEffect } from 'react';
import DataService from '../../utilities/dataService';
import style from './Settings.module.css';

const PhotoGallery = ({ items }) => {
  const photos = items.length > 9 ? items.slice(0, 9) : items;
  const blank = 9 - items.length;
  return (
    <div className={style.dp_gallery}>
      {photos.map((img, i) => (
        <div className={style.dp} key={i}>
          <img src={DataService.getCelebPofilesUrl(img)} alt=".." />
        </div>
      ))}
      {blank.length > 0 &&
        [...Array(blank)].map((item, i) => (
          <div className={style.blank} key={i} />
        ))}
    </div>
  );
};

const EditProfile = () => {
  const [celebData, setCelebData] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);
  const [celebImages, setCelebImages] = useState([]);
  const [imagesLoading, setImagesLoading] = useState(true);

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('C_TIND_ALIAS')).id;
    const prof = localStorage.getItem('C_TIND_PROF');
    if (!prof) {
      DataService.getCelebrityDetails(id)
        .then((res) => {
          const profileData = {
            name: res.name,
            birthday: res.birthday,
            gender: res.gender,
            biography: res.biography,
            place_of_birth: res.place_of_birth,
          };
          localStorage.setItem('C_TIND_PROF', JSON.stringify(profileData));
          setCelebData(profileData);
          setDataLoading(false);
        })
        .catch((err) => {
          setCelebData(null);
          setDataLoading(false);
        });
    } else {
      setCelebData(JSON.parse(prof));
      setDataLoading(false);
    }

    const images = localStorage.getItem('C_TIND_IMGS');
    if (!images) {
      DataService.getCelebrityPhotos(id)
        .then((res) => {
          const images = res.profiles.map((img) => img.file_path);
          localStorage.setItem('C_TIND_IMGS', JSON.stringify(images));
          setCelebImages(images);
          setImagesLoading(false);
        })
        .catch((err) => {
          setCelebImages([]);
          setImagesLoading(false);
        });
    } else {
      setCelebImages(JSON.parse(images));
      setImagesLoading(false);
    }
  }, []);

  const getGender = (no) => {
    return no === 2 ? 'Male' : no === 1 ? 'Female' : '-';
  };

  return (
    <div className={style.edit_page}>
      {!imagesLoading && <PhotoGallery items={celebImages} />}
      <div>
        <div className={style.list_item}>
          <div>Random Photos</div>
          <div className="ios-toggle">
            <label htmlFor="toggle">
              <input type="checkbox" id="toggle" />
              <span></span>
            </label>
          </div>
        </div>
        <div className={style.help_text}>
          Random photos continously checks all of the profile photos and picks a
          random one to show first.
        </div>
        {!dataLoading && celebData && (
          <>
            <div className={style.item_label}>About {celebData.name}</div>
            <div className={style.list_item}>
              <div>
                <p className={style.biotext}>{celebData.biography}</p>
              </div>
            </div>
            <div className={style.item_label}>Date of Birth</div>
            <div className={style.list_item}>
              <div>
                <p className={style.biotext}>{celebData.birthday}</p>
              </div>
            </div>
            <div className={style.item_label}>Birth Place</div>
            <div className={style.list_item}>
              <div>
                <p className={style.biotext}>{celebData.place_of_birth}</p>
              </div>
            </div>
            <div className={style.item_label}>Gender</div>
            <div className={style.list_item}>
              <div>
                <p className={style.biotext}>{getGender(celebData.gender)}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
