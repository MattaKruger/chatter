from langchain.document_loaders import PyPDFLoader
from langchain.vectorstores import FAISS
from langchain.embeddings.openai import OpenAIEmbeddings

loader = PyPDFLoader("../sources/vue3_composition.pdf")
pages = loader.load_and_split()

faiss_index = FAISS.from_documents(pages, OpenAIEmbeddings())
docs = faiss_index.similarity_search("How is a vue 3 composition component created?", k=2)
for doc in docs:
    print(str(doc.metadata["page"]) + ":", doc.page_content[:600])