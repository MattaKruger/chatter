from pypdf import PdfReader
def pdf_to_txt(pdf_path, txt_path):
    with open(pdf_path, 'rb') as pdf_file:
        pdf_reader = PdfReader(pdf_file)
        with open(txt_path, 'w') as txt_file:
            for page_num in range(len(pdf_reader.pages)):
                page = pdf_reader.pages[page_num]
                txt_file.write(page.extract_text())

# Replace 'input.pdf' and 'output.txt' with your file paths
pdf_to_txt('../sources/vue3_composition.pdf', '../sources/vue3_composition.txt')