import {
  Meteor
} from 'meteor/meteor';
import {
  FilesCollection
} from 'meteor/ostrio:files';

//utils
import { authorizedUser } from '../utils';
import { PUB_FILES_IMAGES_ALL } from '../names';

//names
import {
  IMAGES
} from '../names';

//publications
import imagesPub from '../publications/images-publications';

//methods
import getPhotosMethods from '../methods/photo-methods';

const IMAGES_PATH = '../../../../../public';

export const Images = new FilesCollection({
  storagePath: IMAGES_PATH,
  permissions: 0777,
  parentDirPermissions: 0777,
  collectionName: IMAGES,
  allowClientCode: false, // Disallow remove files from Client

  onBeforeUpload(file) {

    file.meta.new =  'desde el server';
    
    authorizedUser(Meteor.userId());

    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    }

    return 'Please upload image, with size equal or less than 10MB';
  }
});

if (Meteor.isServer) {
  imagesPub(Images);
}