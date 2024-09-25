import importlib
import os
import pprint 

#paper name; module with this name will be tested on a html file
#of the same name in the test_files folder
paper_name = "ITV"

current_dir = os.path.dirname(os.path.abspath(__file__))
module_path = os.path.join(current_dir, f"{paper_name}.py")
        
# Check if the module file exists
if not os.path.isfile(module_path):
    raise ModuleNotFoundError(f"Newspaper-specific scraping module {paper_name} not found at {module_path}")

# Load the module from file
spec = importlib.util.spec_from_file_location(paper_name, module_path)
newspaper_module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(newspaper_module)

# Open the test html file
with open(f'test_files/{paper_name}.html', 'r') as file:
    test_html = file.read()
    
# Get the article attributes
attr = newspaper_module.extract(test_html, parsed_attr=["title", "subtitle"
                                                        ,"text"
                                                        ,"image", "author", "date" 
                                                       ])

# Pretty-print them
pp = pprint.PrettyPrinter(indent=4)
pp.pprint(attr)
