import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { CONTACT_ITEMS } from '../../../core/data/portfolio.data';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly contacts = CONTACT_ITEMS;
  private readonly formBuilder = inject(FormBuilder);
  readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]]
  });

  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';
  feedbackMessage = '';

  async onSubmit(): Promise<void> {
    this.submitStatus = 'idle';
    this.feedbackMessage = '';

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    if (!this.isEmailJsConfigured()) {
      this.submitStatus = 'error';
      this.feedbackMessage =
        'Email service is not configured yet. Please set EmailJS keys in environment config.';
      return;
    }

    this.isSubmitting = true;
    const submittedAt = new Intl.DateTimeFormat('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(new Date());
    const name = this.contactForm.controls.name.value.trim();
    const email = this.contactForm.controls.email.value.trim();
    const message = this.contactForm.controls.message.value.trim();

    try {
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          title: 'New Contact Request',
          time: submittedAt,
          name,
          email,
          from_name: name,
          from_email: email,
          reply_to: email,
          message,
          to_email: environment.contact.recipientEmail
        },
        {
          publicKey: environment.emailjs.publicKey
        }
      );

      this.submitStatus = 'success';
      this.feedbackMessage = 'Thanks for reaching out. Your message has been sent successfully.';
      this.contactForm.reset();
    } catch {
      this.submitStatus = 'error';
      this.feedbackMessage = 'Unable to send your message right now. Please try again later.';
    } finally {
      this.isSubmitting = false;
    }
  }

  private isEmailJsConfigured(): boolean {
    return (
      environment.emailjs.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      environment.emailjs.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      environment.emailjs.publicKey !== ''
    );
  }
}
