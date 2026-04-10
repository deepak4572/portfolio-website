import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private readonly RESUME_URL = 'https://drive.google.com/uc?export=download&id=1x638etGpCLVlYOkfOMKiESBvOgRqWn0O';

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = this.RESUME_URL;
    link.download = 'Deepak_Chauhan_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
