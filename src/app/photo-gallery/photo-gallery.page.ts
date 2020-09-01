import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { ActionSheetController } from '@ionic/angular';
import { KeycloakService } from '../keycloak/keycloak.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: 'photo-gallery.page.html',
  styleUrls: ['photo-gallery.page.scss']
})
export class PhotoGalleryPage implements OnInit{
  photos = this.photoService.photos;

  constructor(public actionSheetController: ActionSheetController, public photoService: PhotoService, public keycloak: KeycloakService) {}
  ngOnInit() {
    // this.photoService.loadSaved();
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  token() {
    console.log('checking token');
    this.keycloak.getToken().then(a => {
      console.log('aaaaaaaa ' + a);
    });
    }

  public async showActionSheet(photo, position) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
          }
      }]
    });
    await actionSheet.present();
  }
}
