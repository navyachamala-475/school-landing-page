from fpdf import FPDF

pdf = FPDF()
pdf.add_page()
pdf.set_font("helvetica", size=18, style='B')

# Add Title
pdf.multi_cell(0, 10, txt='School Landing Page Design - Assignment', align='C')
pdf.ln(5)

# Add name
pdf.set_font("helvetica", size=14, style='B')
pdf.cell(0, 10, txt="Submitted By : Chamala Venkata Navya", new_x="LMARGIN", new_y="NEXT", align='C')
pdf.ln(5)

# Add Link
pdf.set_font("helvetica", size=12, style='U')
pdf.set_text_color(0, 0, 255)
pdf.cell(0, 10, txt="Live Demo : https://school-landing-page-black.vercel.app", new_x="LMARGIN", new_y="NEXT", align='C', link="https://school-landing-page-black.vercel.app/")
pdf.ln(10)

# Add image
screenshot_path = r"C:\Users\Navas\Downloads\Task2\image copy.png"
pdf.image(screenshot_path, x=10, w=190)

pdf.output(r"C:\Users\Navas\Downloads\Task2\School_ComingSoon_Chamala_Venkata_Navya.pdf")
print("PDF created successfully!")
