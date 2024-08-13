import { LightningElement, wire} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CurrentPageReference } from 'lightning/navigation';




export default class FileUpload extends LightningElement {


    currentPageReference = null; 
    urlStateParameters = null;

    recId;

    @wire(CurrentPageReference)
    getParameters(currentPageReference) {
       if (currentPageReference) {
          this.urlStateParameters = currentPageReference.state;
          this.setParametersBasedOnUrl();
       }
    }

    setParametersBasedOnUrl() {
        this.recId = this.urlStateParameters.recId || null;
    }

    get acceptedFormats() {
        return ['.pdf', '.png', '.jpg', 'jpeg', '.png', '.gif', '.svg', '.mp3', '.wav', '.mp4', '.mov', '.avi', '.js', '.css', '.zip', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.ics', '.pdf', '.ttf', '.woff'];
    }

    handleUploadFinished(event) {
        const uploadedFiles = event.detail.files.length; 
        
        const evt = new ShowToastEvent({
            title: 'SUCCESS',
            message: uploadedFiles + ' File(s) uploaded  successfully',
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }
}