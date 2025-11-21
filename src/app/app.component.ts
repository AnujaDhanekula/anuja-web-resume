import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.4s ease-in', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(30px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('0.4s ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'Anuja Dhanekula - Resume';
  resumeData: any = null;
  menuOpen = false;
  isScrolled = false;
  showScrollTop = false;
  currentYear = new Date().getFullYear();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadResumeData();
  }

  loadResumeData(): void {
    this.http.get('assets/config.json').subscribe({
      next: (data) => {
        this.resumeData = data;
        console.log('Resume data loaded successfully', this.resumeData);
      },
      error: (error) => {
        console.error('Error loading resume data:', error);
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 50;
    this.showScrollTop = scrollPosition > 300;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  scrollToSection(sectionId: string): void {
    this.menuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  navigateToMyBlog(): void
  {
    window.open('https://dhanekulaanuja-udlci.wordpress.com/', '_blank');
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  downloadResume(format: 'pdf' | 'html'): void {
    if (format === 'html') {
      this.downloadHTMLResume();
    } else {
      this.downloadPDFResume();
    }
  }

  private downloadHTMLResume(): void {
    const resumeContent = this.generateHTMLResume();
    const blob = new Blob([resumeContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Anuja_Dhanekula_Resume.html';
    link.click();
    window.URL.revokeObjectURL(url);
  }

  private downloadPDFResume(): void {
    // Download only the resume section as PDF using html2pdf.js
    const element = document.querySelector('.hero-section');
    if (!element) {
      alert('Resume section not found!');
      return;
    }
    // Dynamically load html2pdf.js if not present
    if (!(window as any).html2pdf) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
      script.onload = () => this.exportSectionToPDF(element);
      document.body.appendChild(script);
    } else {
      this.exportSectionToPDF(element);
    }
  }

  private exportSectionToPDF(element: Element): void {
    const opt = {
      margin:       0.2,
      filename:     'Anuja_Dhanekula_Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    (window as any).html2pdf().set(opt).from(element).save();
  }

  generateHTMLResume(): string {
    if (!this.resumeData) return '';

    const data = this.resumeData;
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.personalInfo.name} - Resume</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 900px; margin: 0 auto; padding: 20px; background: #fff; }
    h1 { color: #2c3e50; font-size: 32px; margin-bottom: 5px; }
    h2 { color: #3498db; font-size: 20px; margin: 20px 0 10px; padding-bottom: 5px; border-bottom: 2px solid #3498db; }
    h3 { color: #34495e; font-size: 18px; margin: 15px 0 8px; }
    h4 { color: #555; font-size: 16px; margin: 10px 0 5px; }
    .header { text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 3px solid #3498db; }
    .contact-info { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin: 10px 0; font-size: 14px; }
    .contact-info a { color: #3498db; text-decoration: none; }
    .website-link { display: block; margin: 8px auto 0 auto; color: #3498db; font-size: 15px; text-align: center; text-decoration: none; }
    .section { margin-bottom: 25px; }
    ul { margin-left: 20px; }
    li { margin-bottom: 8px; }
    .job-header { margin-bottom: 10px; }
    .company { font-weight: bold; color: #2c3e50; }
    .duration { color: #7f8c8d; font-style: italic; }
    .skills-grid { display: flex; flex-wrap: wrap; gap: 8px; margin: 10px 0; }
    .skill-tag { background: #ecf0f1; padding: 5px 12px; border-radius: 15px; font-size: 13px; color: #2c3e50; }
    .cert-item { margin-bottom: 12px; }
    .cert-name { font-weight: bold; color: #2c3e50; }
    .cert-details { color: #7f8c8d; font-size: 14px; }
    @media print { body { padding: 10px; } }
  </style>
</head>
<body>
  <div class="header">
    <h1>${data.personalInfo.name}</h1>
    <p style="font-size: 18px; color: #3498db; margin: 5px 0;">${data.personalInfo.title}</p>
    <p style="font-size: 14px; color: #7f8c8d; margin: 10px 0;">${data.personalInfo.tagline}</p>
    <a class="website-link" href="https://anuja-dhanekula.netlify.app/" target="_blank">https://anuja-dhanekula.netlify.app/</a>
        <div class="contact-info">
            <span>📧 <a href="mailto:${data.personalInfo.email}">${data.personalInfo.email}</a></span>
            <span>📱 ${data.personalInfo.phone.india}</span>
            <span>📱 ${data.personalInfo.phone.usa}</span>
            <span>💼 <a href="${data.personalInfo.linkedin}" target="_blank">LinkedIn Profile</a></span>
        </div>
    </div>

    <div class="section">
        <h2>Professional Summary</h2>
        <ul>
            ${data.professionalSummary.map((item: string) => `<li>${item}</li>`).join('')}
        </ul>
    </div>

    <div class="section">
        <h2>Core Competencies</h2>
        <div class="skills-grid">
            ${data.coreCompetencies.map((comp: string) => `<span class="skill-tag">${comp}</span>`).join('')}
        </div>
    </div>

    <div class="section">
        <h2>Professional Experience</h2>
        ${data.experience.map((job: any) => `
            <div style="margin-bottom: 25px;">
                <div class="job-header">
                    <h3>${job.position}</h3>
                    <p class="company">${job.company} ${job.client ? '(Client: ' + job.client + ')' : ''}</p>
                    <p class="duration">${job.duration} | Team Size: ${job.teamSize || 'N/A'}</p>
                    <p style="font-size: 13px; color: #7f8c8d; margin: 5px 0;">
                        <strong>Environment:</strong> ${job.environment.tools} | ${job.environment.database} | ${job.environment.appServer}
                    </p>
                </div>
                <h4>Key Achievements:</h4>
                <ul>
                    ${job.achievements.map((ach: string) => `<li>${ach}</li>`).join('')}
                </ul>
                <h4>Responsibilities:</h4>
                <ul>
                    ${job.responsibilities.slice(0, 8).map((resp: string) => `<li>${resp}</li>`).join('')}
                </ul>
            </div>
        `).join('')}
    </div>

    <div class="section">
        <h2>Technical Skills</h2>
        ${Object.entries(data.technicalSkills).map(([category, skills]: [string, any]) => `
            <div style="margin-bottom: 15px;">
                <h4>${category}:</h4>
                <div class="skills-grid">
                    ${Array.isArray(skills) ? skills.map((skill: string) => `<span class="skill-tag">${skill}</span>`).join('') : `<span class="skill-tag">${skills}</span>`}
                </div>
            </div>
        `).join('')}
    </div>

    <div class="section">
        <h2>Certifications</h2>
        ${data.certifications.map((cert: any) => `
            <div class="cert-item">
                <div class="cert-name">${cert.name}</div>
                <div class="cert-details">${cert.issuer} | ${cert.date}</div>
            </div>
        `).join('')}
    </div>

    <div class="section">
        <h2>Education</h2>
        ${data.education.map((edu: any) => `
            <div style="margin-bottom: 15px;">
                <h4>${edu.degree}</h4>
                <p>${edu.institution}, ${edu.university}</p>
                <p class="duration">${edu.duration} | Grade: ${edu.grade}</p>
            </div>
        `).join('')}
    </div>

    <div class="section">
        <h2>Career Highlights</h2>
        <ul>
            ${data.careerHighlights.map((highlight: string) => `<li>${highlight}</li>`).join('')}
        </ul>
    </div>
</body>
</html>
    `.trim();
  }

  getSkillCategories(): any[] {
    if (!this.resumeData?.technicalSkills) return [];
    
    return Object.entries(this.resumeData.technicalSkills).map(([name, skills]) => ({
      name,
      skills: Array.isArray(skills) ? skills : [skills]
    }));
  }
}
