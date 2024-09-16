import importlib.util
import os

def choose_extract(News_paper):
    """
    Dynamically import a module based on the given string.

    Args:
        News_paper (str): The name of the module to import (without .py extension).

    Returns:
        module or None: The imported module, or None if the import fails.
    """
    try:
        module_path = os.path.join('/home/unicph.domain/mbl333/Scrapping_pro/Scrapping_articles/Scrapping_specific', f"{News_paper}.py")
        
        # Print the module path for debugging
        print(f"Attempting to import module from path: {module_path}")
        
        # Check if the module file exists
        if not os.path.isfile(module_path):
            raise ModuleNotFoundError(f"Module {News_paper} not found at {module_path}")
        
        # Load the module from file
        spec = importlib.util.spec_from_file_location(News_paper, module_path)
        newspaper_module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(newspaper_module)
        
        return newspaper_module
        
    except ModuleNotFoundError as e:
        print(f"Module {News_paper} not found: {e}")
    except Exception as e:
        print(f"Error importing module {News_paper}: {e}")
    
    return None

# Example usage:
if __name__ == "__main__":
    module_name = "CNN"  # Replace with the actual module name you want to import (without .py extension)
    newspaper_module = choose_extract(module_name)
    if newspaper_module:
        print(f"Successfully imported module {module_name}")
        # Now you can access functions or classes from the imported module
        # Example: newspaper_module.extract_function()
    else:
        print(f"Failed to import module {module_name}")

